import Ticker from '@statetree/ticker';
import {executeInSyncOrAsync, executeEntries, disposeAndRemoveEntry} from './helpers';
import Entry from './entry';

function getTickerEntry(func, context, priority, errorCallback, funcsInst){
	const ticker = new Ticker(func, context, priority);
	function doneNotifier(){
		funcsInst.remainingEntries = funcsInst.remainingEntries - 1;
	};
	ticker.onDone(doneNotifier).onError(errorCallback);
	return new Entry(ticker.executeInCycle, ticker);
}

export default class Functions {

	constructor(connector = null) {
		this._entries = [];
		this._tickerEntries = []; // ticker entries
		this.remainingEntries = 0;
		this.connector = connector; // connector is responsible for sequencing next function set
		this._enableConnector = true;
	}
	/**
	 * Based on return value of predicate, this function decides whether to execute the method immediately or in frame cycle
	 *
	 * @param {function} apiFunc
	 * @param {function} callback, Api func execution may be sync or Async, if its sync we cant return notifier as user can register doneCallback after API invocation
	 * @param {function} errorCallback.
	 * @return {void}
	 */
	executeWhenIdle(apiFunc, callback, errorCallback){
		const predicate = ()=>{
			if(this.remainingEntries < 0){
				throw new Error("There can't be negative entries")
			}
			return this.remainingEntries === 0;
		};
		if(!errorCallback){
			errorCallback = (error)=>console.log(error);
		}
		executeInSyncOrAsync(predicate, apiFunc, callback, errorCallback);
	};

	/**
	 * execute all the entries
	 *
	 * @param {function} callback
	 * @return {void}
	 */
	trigger(callback = null){
		const that = this;
		const _trigger = ()=>{
			const {_entries, _tickerEntries} = that;
			const shouldTrigger = that.shouldExecuteFunctions();
			if(shouldTrigger){
				that.functionsWillExecute();
				(_entries.length > 0) && executeEntries(_entries);
				if (_tickerEntries.length > 0) {
					that.remainingEntries = executeEntries( _tickerEntries, true)
				};
			}
		};

		const entriesExecutionCompletedNotifier = ()=>{
			if(that.remainingEntries === 0){
				callback && callback()
				that.functionsDidExecute();
			} else {
				that.executeWhenIdle(entriesExecutionCompletedNotifier);
			}
		};

		this.executeWhenIdle( _trigger, entriesExecutionCompletedNotifier);
	};

	/**
	 * Add the function to entries
	 * if trigger is in progress, adds once its completed
	 *
	 * @param {function} func
	 * @param {object} context
	 * @param {boolean} executeInCycle
	 * @param {number} priority
	 * @param {function} callback
	 * @param {function} errorCallback
	 * @return {void}
	 */
	addFunction(func, context = null, executeInCycle = false, priority = 0, callback = null, errorCallback = null){
		const _addFunction = () => {
			let entry = new Entry(func, context, priority);
			if (executeInCycle){
				entry = getTickerEntry(func, context, priority, errorCallback, this);
				this._tickerEntries.push(entry);
			} else {
				entry = new Entry(func, context);
				this._entries.push(entry);
			}
			callback && callback(entry)
		};
		this.executeWhenIdle(_addFunction);
	};

	/**
	 * remove the function from entries
	 * if trigger is in progress, removes once its completed
	 *
	 * @param {function} func
	 * @param {object} context
	 * @param {function} callback
	 * @return {void}
	 */
	removeFunction(func, context = null, callback = null){
		const _removeFunction = ()=> {
			const {_tickerEntries, _entries} = this;
			disposeAndRemoveEntry(func,context,_entries);
			disposeAndRemoveEntry(func,context,_tickerEntries , true);
			callback && callback();
		}

		this.executeWhenIdle(_removeFunction);
	};

	/**
	 * Should be implemented by the class which inherits it,
	 * will be called before executing entries
	 */
	functionsWillExecute(){

	};

	/**
	 * Should be implemented by the class which inherits it,
	 * Should be a predicate function which decides whether to execute the entries.
	 * @return {boolean}
	 */
	shouldExecuteFunctions(){
		return true;
	};

	/**
	 * Should be extended by calling super.functionsDidExecute() by the class which inherits it,
	 * If connector is enabled , this will trigger the function that was referenced to connector
	 */
	functionsDidExecute(){
		this._enableConnector && this.connector && this.connector();
	};

	/**
	 * sets the connector function which is the binder for next sequence of actions
	 * if trigger is in progress, sets once its completed
	 *
	 * @param {function} connector
	 * @return {void}
	 */
	setConnector(connector){
		const _setConnector = () => {
			this.connector = connector;
		}
		this.executeWhenIdle(_setConnector);

	}

	/**
	 * removes the connector function which is the binder for next sequence of actions
	 * if trigger is in progress, removes once its completed
	 *
	 * @return {void}
	 */
	removeConnector(){
		const _removeConnector = () => {
			this.connector = null;
		};
		this.executeWhenIdle(_removeConnector);
	}

	/**
	 * enables the connector function which is the binder for next sequence of actions
	 * if trigger is in progress, enables once its completed
	 *
	 * @return {void}
	 */
	linkConnector(){
		const _linkConnector = () => {
			this._enableConnector = true;
		};
		this.executeWhenIdle(_linkConnector);

	}

	/**
	 * disables the connector function which is the binder for next sequence of actions
	 * if trigger is in progress, disables once its completed
	 *
	 * @return {void}
	 */
	unLinkConnector(){
		const _unLinkConnector = () => {
			this._enableConnector = false;
		};
		this.executeWhenIdle(_unLinkConnector);
	}
}
