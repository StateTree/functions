import Ticker from '@statetree/ticker';
import {executeLater, clearDisposedEntries, executeEntries} from './helpers';
import Entry from './entry';

export default class Functions {
    constructor(connector = null) {
        this.entries = [];
        this.frameEntries = [];
        this.remainingEntries = 0;
        this.connector = connector; // connector is responsible for sequencing next function set
	    this.enableConnector = true;
    }

	trigger(callback = null){
    	 const _trigger = ()=>{
		    const shouldTrigger = this.shouldExecuteFunctions();
		    if(shouldTrigger){
			    this.functionsWillExecute();
			    if(this.entries.length > 0){
				    executeEntries.call(this);
			    }
			    if(this.frameEntries.length > 0){
				    executeEntries.call(this, true);
			    }
		    }
	    };
		const doneNotifier = ()=>{
			if(this.remainingEntries === 0){
				callback && callback.call(callback['this'])
				this.functionsDidExecute();
			} else {
				executeLater.call(this, doneNotifier);
			}
		};
		executeLater.call(this, _trigger, doneNotifier);
	};
	

	addFunction(func, context = null, executeLaterInNextTick = false, priority = 0, callback = null){
		const _addFunction = () => {
			let entry;
			if (executeLaterInNextTick){
				const doneNotifier = () => {
					this.remainingEntries = this.remainingEntries - 1;
				};
				const ticker = new Ticker(func,context, priority);
				ticker.onDone(doneNotifier);
				entry = new Entry(ticker.executeInCycle, ticker);
				this.frameEntries.push(entry);
			} else {
				entry = new Entry(func, context);
				this.entries.push(entry);
			}
			callback && callback.call(callback['this'], entry)
		};
		executeLater.call(this,_addFunction);
	};

	removeFunction(func, context = null, callback = null){
		const _removeListener = ()=> {
			let entry, i;
			const {frameEntries, entries} = this;

			for(i = 0; i < entries.length; i++){
				entry = entries[i];
				if(entry.func) {
					if(entry.func === func && entry.context === context){
						entry.dispose();
						clearDisposedEntries(i, entries);
						callback && callback();
						return;
					}
				}
			}

			for(i = 0; i < frameEntries.length; i++){
				const frameEntry =  frameEntries[i];
				entry = frameEntry.context;
				if(entry && entry.func === func && entry.context === context){
					frameEntry.dispose();
					clearDisposedEntries(i, frameEntries);
					callback && callback();
					return;
				}
			}

		}
		executeLater.call(this,_removeListener);

	};


	functionsWillExecute(){

	};

	shouldExecuteFunctions(){
		return true;
	};

	functionsDidExecute(){
		this.enableConnector && this.connector && this.connector();
	};


	setConnector(connector){
		const _setConnector = () => {
			this.connector = connector;
		}
		executeLater.call(this,_setConnector);

	}

	removeConnector(){
		const _removeConnector = () => {
			this.connector = null;
		};
		executeLater.call(this,_removeConnector);
	}

	linkConnector(){
		const _linkConnector = () => {
			this.enableConnector = true;
		};
		executeLater.call(this,_linkConnector);

	}

	unLinkConnector(){
		const _unLinkConnector = () => {
			this.enableConnector = false;
		};
		executeLater.call(this,_unLinkConnector);
	}
}
