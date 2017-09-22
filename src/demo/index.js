import Functions from "./../lib";



function immediateFunction(){
    console.log("I am Immediate Function");
}

function frameFunction(){
    console.log("I am Frame Function");
}
const functions = new Functions();
functions.add(window,frameFunction, true);
functions.add(window,immediateFunction);

functions.trigger()
