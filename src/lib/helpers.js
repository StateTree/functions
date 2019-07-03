import Ticker from "@statetree/ticker";

/**
 * Based on return value of predicate, this function decides whether to execute the method immediately or in frame cycle
 *
 * @param {function} predicate
 * @param {function} apiFunc
 * @param {function} callback Api func execution may be sync or Async, if its sync we cant return notifier as user can register doneCallback after API invocation
 * @param {function} errorCallback
 * @return {void}
 */
export function executeInSyncOrAsync(predicate, apiFunc, callback, errorCallback){
	// Important to create inside closure to execute in Ticker
	const _executeLater = ()=>{
		if(predicate()){ // execute API calls Only after all user added functions are executed
			const returnValue = apiFunc();
			callback && callback(returnValue);
		} else {
			let ticker = new Ticker(_executeLater, null, 2);
			errorCallback && ticker.onError(errorCallback);
			ticker.executeInCycle()
		}
	};
	_executeLater();
};

export function executeAsync(predicate, apiFunc){
	// Important to create inside closure to execute in Ticker
	const _executeLater = ()=>{
		let ticker;
		if(predicate()){ // execute API calls Only after all user added functions are executed
			ticker = new Ticker(apiFunc, null, 2);
		} else {
			ticker = new Ticker(_executeLater, null, 2);
		}
		return ticker.executeInCycle()
	};
	return _executeLater();
};

/**
 * Executes all the stored functions , if callLater enabled, executes them in frame cycle
 *
 * @param {array} entries of  which contains the function and its context.
 * @param {boolean} callLater indicates execution needs to happen in frame cycle
 * @return {number} return count of entries that are added to execute in loop later
 */
export function executeEntries(entries, callLater = false){
	const disposedEntriesIndex = [];
	let delayedEntriesCount = 0;
	entries.forEach(function(entry, index){
		if (entry.func) {
			callLater && (delayedEntriesCount = delayedEntriesCount + 1);
			entry.func.apply(entry.context || entry.func['this']);
		} else {
			disposedEntriesIndex.push(index);
		}
	});
	clearDisposedEntries(disposedEntriesIndex,entries);
	return delayedEntriesCount;
}

function clearDisposedEntries(indices, entries){
	if(typeof indices === 'number'){
		entries.splice(indices,1);
	} else {
		indices.forEach(function(entryIndex){
			entries.splice(entryIndex,1);
		})
	}
}

function getEntry(list, index, isTicker){
	if(isTicker){
		const tickerEntry =  list[index];
		return tickerEntry.context;
	} else {
		return list[index];
	}
}


export function disposeAndRemoveEntry(func, context, list , isTicker){
	for(let i = 0; i < list.length; i++){
		let entry = getEntry(list,i,isTicker);
		if(entry && entry.func && entry.func === func && entry.context === context){
			list[i].dispose();
			clearDisposedEntries(i, list);
			return;
		}
	}
};