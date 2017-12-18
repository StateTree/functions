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
functions.add(window,frameFunctionSecond, true, 1);
functions.add(window,frameFunction, true );
functions.add(window,immediateFunction);

console.log("trigger 1");

functions.trigger();
// 2 entries

functions.remove(window,frameFunctionSecond, functions.trigger.bind(functions));
// 3rd entry
functions.remove(window,immediateFunction);

console.log("trigger 2");
functions.trigger();
