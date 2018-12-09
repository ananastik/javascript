"use strict";

let h1MainHeader = document.getElementById("main-header");

console.log(h1MainHeader);

h1MainHeader.innerText = "nowy header text";
let header = document.getElementsByTagName("header")[0];
console.log(header);

header.innerText = "nowy header text";
header.innerHTML = "<div>nowy inner text <p>nowy paragraf</p></div>";
// header.outerHTML = "<div>nowy outer text <p>nowy paragraf</p></div>";
header.outerHTML = "<div id='nowy-div'>nowy inner text <p>nowy paragraf</p></div>";

let nowyDiv = document.getElementById("nowy-div");

nowyDiv.setAttribute("data-class", "nowa-klasa");

nowyDiv.className = "klasa druga-klasa trzecia-klasa";
nowyDiv.id = "calkiem-nowy-div";

nowyDiv.classList.remove("klasa");
nowyDiv.classList.add("krystian");

nowyDiv.classList.toggle("toggle");
nowyDiv.classList.toggle("toggle");
nowyDiv.classList.toggle("toggle");

console.log(nowyDiv.classList);

nowyDiv.style.color = "red";
nowyDiv.style.backgroundColor = "yellow";
