//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a ConvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rect";

var a = document.getElementById("buttonToggle");

//var toggleMode = function(e) {
var toggleMode = (e) => {
    console.log("toggling...");
    if (mode == "rect") {
        document.getElementById("buttonToggle").innerHTML = "circ";
        mode = "circ";
        console.log(mode);
    }
    else {
        document.getElementById("buttonToggle").innerHTML = "rect";
        mode = "rect";
        console.log(mode);
    }
}

a.addEventListener("click", () => toggleMode());

var drawRect = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log("mouseclick registered at ", mouseX, mouseY);

}

//var drawCircle = function(e) {
var drawCircle = (e) => {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    console.log("circ mouseclick registered at ", mouseX, mouseY);

}

//var draw = function(e) {
var draw = (e) => {
    if (mode == "rect") {
        drawRect(e);
    }
    else {
        drawCircle(e);
    }
}

//var wipeCanvas = function() {
var wipeCanvas = () => {

}

c.addEventListener("click", draw);
//var bToggler = document. ;
//bToggler. ;
//var clearB = ;
//clearB. ;