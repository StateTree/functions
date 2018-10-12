import Functions from "./../lib";
import {expect} from "chai";
Functions.stackDebug = false;


function immediateFunction(){
    console.log("I am Immediate Function", functions.remainingEntries);
}

function frameFunction(){
    console.log("I am first Frame Function", functions.remainingEntries);
}

function frameFunctionSecond(){
    console.log("I am second Frame Function", functions.remainingEntries);
}

let executed = false
function listenersDone(){
	executed = true
	console.log("All Function execu ted", functions.remainingEntries);
}



/*const functions = new Functions(listenersDone);
functions.addFunction(frameFunctionSecond, null, true, 1);
functions.addFunction(frameFunction, null,true );
functions.addFunction(immediateFunction);
functions.trigger(function(){
	console.log("trigger 1 done");
});

functions.removeFunction(frameFunctionSecond);
functions.removeFunction(immediateFunction);
functions.trigger(function(){
	console.log("trigger 2 done");
});*/

const functions = new Functions();
functions.addFunction(frameFunction, {name: 'frameFunction'}, true, 0,(entry)=>{
	console.log('Done adding frame Func');
});
functions.addFunction(frameFunctionSecond, null, true, 0,(entry)=>{
	console.log('Done adding frame Func second');
});
functions.setConnector(listenersDone);
functions.trigger(()=>{
	console.log('Trigger 1 callback');
});
functions.removeFunction(frameFunctionSecond);
functions.trigger(()=>{
	console.log('Trigger 2 callback');
});
