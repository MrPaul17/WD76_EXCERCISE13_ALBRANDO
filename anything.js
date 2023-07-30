function centimeter(){
    let a = Number( document.getElementById("operand1").value);
    let b =  10;
   
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function meter(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1000;
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function kilometer(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1e+6;
    let result = a / b;
    document.getElementById("operand2").value = result;
}


function liters(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1000;
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function cubicMeter(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1e+6;
    let result = a / b;
    document.getElementById("operand2").value = result;
}



function miligram(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1000;
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function gram(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1e+6;
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function kilogram(){
    let a = Number( document.getElementById("operand1").value);
    let b =  1e+9;
    let result = a / b;
    document.getElementById("operand2").value = result;
}
function clk(){
    document.getElementById("operand2").value;
}