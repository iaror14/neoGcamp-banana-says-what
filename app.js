/*alert("This script works!");
var username = prompt("What is your name?");
alert("I hope it works! " + username);
//input
var click = prompt("What is username?");
//processing
var welcomeMessage = "It works! " + click;
//output
alert(welcomeMessage);*/
var btnTranslate = document.querySelector("#btn-translate");
function clickHandler() {
  console.log("Clicked!");
  console.log("input", txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler());
var txtInput = document.querySelector("#txt-input");

/*document.querySelector("textarea");
document.querySelector(".btn-primay");
document.querySelector("#input-btn");
input[(n ame = "translator")];*/
