"use strict";

let btn = document.createElement("button");
let btnText = document.createTextNode("Click me");

let classAtr = document.createAttribute("class");

classAtr.value = "btn";

btn.setAttributeNode(classAtr);

btn.appendChild(btnText);

btn.setAttribute("id", "my-btn");

btn.removeAttribute("id");

console.log(btn);

let parfirst = document.getElementById("parFirst");
parfirst.appendChild(btn);

// parfirst.removeChild(btn);
