import Ticker from "@statetree/ticker/lib/ticker";

export function executeFunction(apiFunc, callback){
	const _executeFunction = ()=>{
		let ticker;
		if(this.remainingEntries < 0){
			throw new Error("FUnctin")
		}
		if(this.remainingEntries === 0){ // execute API calls Only after all user added functions are executed
			apiFunc.call(this);
			callback && callback.call(callback['this']);
		} else {
			ticker = new Ticker(_executeFunction, this, 2);
			ticker.executeInCycle()
		}
	};
	_executeFunction();
};

export function executeEntry(entry, index, disposedEntriesIndex, callLater = false){
	if (entry.func) {
		callLater && (this.remainingEntries = this.remainingEntries + 1);
		entry.func.apply(entry.context || entry.func['this']);
	} else {
		disposedEntriesIndex.push(index);
	}
}

export function executeEntries(callLater = false){
	const disposedEntriesIndex = [];
	const _entries = callLater ? this.frameEntries : this.entries;
	_entries.forEach(function(entry, index){
		executeEntry.call(this, entry, index, disposedEntriesIndex, callLater)
	}, this);
	clearDisposedEntries(disposedEntriesIndex,_entries);
}

export function clearDisposedEntries(indices, entries){
	if(typeof indices === 'number'){
		entries.splice(indices,1);
	} else {
		indices.forEach(function(entryIndex){
			entries.splice(entryIndex,1);
		}, this)
	}

}