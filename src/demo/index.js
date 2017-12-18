import Functions from "./../lib";



function immediateFunction(){
    console.log("I am Immediate Function");
    console.log(functions.executingLaterInNextTickCount);
}

function frameFunction(){
    console.log("I am Frame Function");
	console.log(functions.executingLaterInNextTickCount);
}

function frameFunctionSecond(){
    console.log("I am Frame Function Second");
	console.log(functions.executingLaterInNextTickCount);
}
const functions = new Functions();
console.log(functions.executingLaterInNextTickCount);
functions.addListener(window,frameFunctionSecond, true, 1);
functions.addListener(window,frameFunction, true );
functions.addListener(window,immediateFunction);

console.log("trigger 1");

functions.triggerListeners();
// 2 entries

functions.removeListener(window,frameFunctionSecond, functions.triggerListeners.bind(functions));
// 3rd entry
functions.removeListener(window,immediateFunction);

console.log("trigger 2");
functions.triggerListeners();
