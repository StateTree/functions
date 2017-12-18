import Entry from './entry';
import Ticker from 'ticker';

export default class Functions {
    constructor() {
        this.entries = [];
        this.frameEntries = [];
        this.executingLaterInNextTickCount = 0;
    }
}

Functions.prototype.addListener = function(context,func, executeLaterInNextTick = false, priority = 0,  callback = null){
    let entry;
    if (executeLaterInNextTick){

	     const tickerCallback = () => {
		    this.executingLaterInNextTickCount = this.executingLaterInNextTickCount - 1;
		    if(callback){
		    	callback.call(callback['this'])
		    }
	    };
        const ticker = new Ticker(context,func, tickerCallback, priority);
	    entry = new Entry(ticker, ticker.execute);
        this.frameEntries.push(entry)
    } else {
        entry = new Entry(context, func);
        this.entries.push(entry);
    }
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
			} else {
				const tickerCallback = () => {
					this.executingLaterInNextTickCount = this.executingLaterInNextTickCount - 1;
					callback && callback()
				};
				const ticker = new Ticker(frameEntry,frameEntry.dispose, tickerCallback, 3);
				ticker.execute();
				this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1
			}
			return;
		}
	}

	for(i = 0; i < entries.length; i++){
		entry = entries[i];
		if(entry.context === context && entry.listener === func){
			entry.dispose();
			return;
		}
	}
};

Functions.prototype.triggerListeners = function(){
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

};