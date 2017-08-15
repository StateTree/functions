import Entry from './entry';
import Ticker from 'ticker';

export default class Functions {
    constructor() {
        this.entries = [];
        this.frameEntries = [];
    }
}

Functions.prototype.addFunction = function(context,func, executeOnceInAnimationFrame){
    let entry;

    if (executeOnceInAnimationFrame){
        const ticker = new Ticker(context,func);
        entry = new Entry(ticker, ticker.execute);
        this.frameEntries.push(entry)
    } else {
        entry = new Entry(context, func);
        this.entries.push(entry);
    }
    return entry.dispose;
};

Functions.prototype.trigger = function(){
    const disposeIndicies = [];

    let entries = this.entries;
    entries.forEach(function(entry, index){
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            disposeIndicies.push(index);
        }
    });
    disposeIndicies.forEach(function(entryIndex){
        entries.splice(entryIndex,1);
    });

    let frameEntries = this.frameEntries;
    frameEntries.forEach(function(entry, index){
        if (entry.func) {
            entry.func.apply(entry.context || entry.func['this']);
        } else {
            disposeIndicies.push(index);
        }
    });
    disposeIndicies.forEach(function(entryIndex){
        frameEntries.splice(entryIndex,1);
    })

};