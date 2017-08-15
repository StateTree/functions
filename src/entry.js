import Ticker from 'ticker';

export default class Entry {
    constructor(context, func, callInAnimationFrame){
        this.context = context;
        this.func = func;
        this.callInAnimationFrame = (callInAnimationFrame === undefined) ? false : callInAnimationFrame;
    }
}

Entry.prototype.dispose = function (){
    if(this.context instanceof Ticker){
        this.context.dispose();
    }
    this.context = null;
    this.func = null;
}