import Functions from "./../lib";



function immediateFunction(){
    console.log("I am Immediate Function");
}

function frameFunction(){
    console.log("I am Frame Function");
}

function frameFunctionLast(){
    console.log("I am Frame Function Last");
}
const functions = new Functions();
functions.add(window,frameFunctionLast, true, true);
functions.add(window,frameFunction, true);
functions.add(window,immediateFunction);

functions.trigger();
