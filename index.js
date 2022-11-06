
var screen=document.getElementById("screen");

function btnClick(value) {

    screen.value+=value;
    
}


function clearAll() {
    screen.value="";
}

function results() {

    var result=eval(screen.value); //eval(10+10)
    screen.value=result
    
}