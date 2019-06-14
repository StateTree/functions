import Ticker from '@statetree/ticker';

/*
* Wrapper for function to hold reference to the context*/
export default class Entry {
    constructor(func, context = null){
        this.context = context;
        this.func = func;
    }
}

// Method available only on Entry instance not in Class
Entry.prototype.dispose = function (){
    if(this.context instanceof Ticker){
        this.context.dispose();
    }
    this.context = null;
    this.func = null;
}