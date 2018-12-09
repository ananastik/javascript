// "use strict";


// const paniJasiaAlarmuje = () => {
//     console.log("Pani Jasia alarmuje!!!");
// }

// // let parSecond = document.getElementById("parSecond");
// // parSecond.onclick = paniJasiaAlarmuje;

// parSecond.addEventListener("click", paniJasiaAlarmuje);

// // callback

// // parSecond.removeEventListener("click", paniJasiaAlarmuje);

// parSecond.addEventListener("click", () => {
//     console.log("Pania Jasia alarmuje, ale w funkcji anonimowej!!!");
// });

// let pierwszyLinkZKlasaLink = document.querySelector(".link");
// console.log(pierwszyLinkZKlasaLink);

// pierwszyLinkZKlasaLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Znacznik ktory wywolal klika: ");
//     console.log (e.target);
// });

// let header = document.getElementById("header");
// let mainHeaderText = document.getElementById("main-header-text");

// console.log(mainHeaderText);

// header.addEventListener('click', (e) => {
//     console.log("Kliknieto <header>");
// });

// mainHeaderText.addEventListener('click', (e) => {
//     console.log("Kliknieto <h1>");
// });

let divsRow = document.getElementsByClassName ("row");

for (let element of divsRow) {
    element.addEventListener("click", () => {
        console.log("wyswietla sie ToolTip pokazujacy info o wierszu");
    });
}

let buttonsEdit = document.getElementsByClassName("edit");

for(let element of buttonsEdit){
element.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Wyswietla sie edycja danych tego wiersza");
});
}

// console.log(divsRow);


