const display = document.getElementById("display");

function AddToDisplay(input) {
    display.value += input;
}

function Clear() {
    display.value = "";
}

function Evaluate(){
    display.value = eval(display.value);
}