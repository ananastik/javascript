"use strict";
let parFirst = document.getElementById("parFirst");
console.log(parFirst);

let linkLink = document.getElementsByClassName("superlink");
console.log(linkLink);

let wszystkieLinki = document.getElementsByTagName('a');
console.log(wszystkieLinki);

let pierwszyLinkSuperLink = document.querySelector(".superlink");
console.log(pierwszyLinkSuperLink);

let wszystkieLinkiSuperLink = document.querySelectorAll(".superlink");
console.log(wszystkieLinkiSuperLink);

for (let element of wszystkieLinki) {
    console.log(element);
}