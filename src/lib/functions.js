import Entry from './entry';
import Ticker from 'ticker';

export default class Functions {
    constructor() {
        this.entries = [];
        this.frameEntries = [];
        this.executingLaterInNextTickCount = 0;
    }
}

// the function that responsible for initiating trigger
// if called using this function will make a synced effect of execution
Functions.prototype.executeTriggerer = function(context, triggerInitiatingfunction, triggererCallback){
	const _executeTriggerer = ()=>{
		let ticker;
		if(this.executingLaterInNextTickCount === 0){
			triggerInitiatingfunction.call(context);
			if(triggererCallback){
				if(this.executingLaterInNextTickCount === 0){
					triggererCallback && triggererCallback();
				} else {
					ticker = new Ticker(this, triggererCallback, null, 2);
					ticker.execute();
				}
			}
		} else {
			ticker = new Ticker(this, _executeTriggerer, triggererCallback, 2);
			ticker.execute();
		}
	};
	_executeTriggerer();
};

Functions.prototype.addListener = function(context, func, executeLaterInNextTick = false, priority = 0, listenerCallback = null){
	Functions.stackDebug && console.log("Functions: triggerListeners : addListener: ", this);
    let entry;
    if (executeLaterInNextTick){

	     const tickerCallback = () => {
		    this.executingLaterInNextTickCount = this.executingLaterInNextTickCount - 1;
		    if(listenerCallback){
			    listenerCallback.call(listenerCallback['this'])
		    }
		    if( this.executingLaterInNextTickCount === 0){
			    Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", this);
			    this.listenersDidExecute();
		    }
	    };
        const ticker = new Ticker(context, func, tickerCallback, priority);
	    entry = new Entry(ticker, ticker.execute);
	    Functions.stackDebug && console.log("Functions: triggerListeners : addListener: frameEntries: ", entry);
        this.frameEntries.push(entry)
    } else {
        entry = new Entry(context, func);
	    Functions.stackDebug && console.log("Functions: triggerListeners : addListener: entries: ", entry);
        this.entries.push(entry);
    }
};


Functions.prototype.listenersWillExecute = function(){

};

Functions.prototype.shouldListenersExecute = function(){
	Functions.stackDebug && console.log("Functions: triggerListeners : shouldListenersExecute: ", true, this);
	return true;
};

Functions.prototype.listenersDidExecute = function(){

};

Functions.prototype.removeListener = function(context,func, callback = null){
	let entry, i;
	const {frameEntries, entries} = this;

	for(i = 0; i < frameEntries.length; i++){
	    const frameEntry =  frameEntries[i];
		entry = frameEntry.context;
		if(entry.context === context && entry.listener === func){
			if(this.executingLaterInNextTickCount === 0){
				frameEntry.dispose();
			} else { // frame trigger Listeners are still running
				let tickerEntry;
				const disposeDoneNotifier = () => {
					if (this.executingLaterInNextTickCount === 0) {
						callback && callback();
					} else{
						tickerEntry = new Ticker(frameEntry,frameEntry.dispose, disposeDoneNotifier, 3);
						tickerEntry.execute();
					}
				};
				tickerEntry = new Ticker(frameEntry,frameEntry.dispose, disposeDoneNotifier, 3);
				tickerEntry.execute();
			}
			return;
		}
	}

	for(i = 0; i < entries.length; i++){
		entry = entries[i];
		if(entry.context === context && entry.listener === func){
			entry.dispose();
			callback && callback();
			return;
		}
	}
};

Functions.prototype.triggerListeners = function(){
	const shouldTrigger = this.shouldListenersExecute();
	if(shouldTrigger){
		Functions.stackDebug && console.log("Functions: triggerListeners : listenersWillExecute: ", this);
		this.listenersWillExecute();
		Functions.stackDebug && console.log("Functions: triggerListeners ", this);
		const entriesIndexToDispose = [];
		this.entries.forEach(function(entry, index){
			if (entry.listener) {
				entry.listener.apply(entry.context || entry.listener['this']);
			} else {
				entriesIndexToDispose.push(index);
			}
		});
		entriesIndexToDispose.forEach(function(entryIndex){
			this.entries.splice(entryIndex,1);
		}, this);


		if(this.frameEntries.length > 0){
			this.frameEntries.forEach(function(entry, index){
				if (entry.listener) {
					this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
					entry.listener.apply(entry.context || entry.listener['this']);
				} else {
					entriesIndexToDispose.push(index);
				}
			}, this);
			entriesIndexToDispose.forEach(function(entryIndex){
				this.frameEntries.splice(entryIndex,1);
			}, this)
		} else {
			Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", this);
			this.listenersDidExecute();
		}
	}

};

Functions.stackDebug = false;