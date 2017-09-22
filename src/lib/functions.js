import Entry from './entry';
import Ticker from 'ticker';

export default class Functions {
    constructor() {
        this.entries = [];
        this.frameEntries = [];
    }
}

Functions.prototype.add = function(context,func, executeLaterInNextAnimationFrame){
    let entry;

    if (executeLaterInNextAnimationFrame){
        const ticker = new Ticker(context,func);
        entry = new Entry(ticker, ticker.callLater);
        this.frameEntries.push(entry)
    } else {
        entry = new Entry(context, func);
        this.entries.push(entry);
    }
    return entry.dispose;
};

Functions.prototype.trigger = function(){
    const entriesIndexToDispose = [];

    this.entries.forEach(function(entry, index){
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            entriesIndexToDispose.push(index);
        }
    });

    entriesIndexToDispose.forEach(function(entryIndex){
        this.entries.splice(entryIndex,1);
    });

    this.frameEntries.forEach(function(entry, index){
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            entriesIndexToDispose.push(index);
        }
    });
    entriesIndexToDispose.forEach(function(entryIndex){
        this.frameEntries.splice(entryIndex,1);
    })

};