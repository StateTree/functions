import Ticker from 'ticker';

export default class Entry {
    constructor(context, func){
        this.context = context;
        this.listener = func;
    }
}

Entry.prototype.dispose = function (){
    if(this.context instanceof Ticker){
        this.context.dispose();
    }
    this.context = null;
    this.listener = null;
}