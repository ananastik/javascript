for (let i=0; i<10; i=i+2) {
    console.log(i);
}

let liczba =100;
for (let i=0; i<10; ++i) {
    console.log(i+liczba);
}

let names = ["Krystian", "Anastazja", "Klaudia", "Wiola"];
names.forEach((element, index) => {
    console.log("pod indexem: " + index + " jest imie: "+ element);
});


let kuba = {
    name: "Kuba",
    surname: "Nowak",
    height: 194
}

for(let property in kuba){
    console.log(property);
}

for(let key in kuba){
    console.log(key);
    console.log(kuba[key]);
}

let iter = 0;

while(iter < 10){
    console.log(iter);
    ++iter;
}

do {
    console.log(iter);
    ++iter;
} while (iter<10)

for (let i=0; i<10; ++i) {
    console.log(i);
}

for (let i=0; i<10; ++i) {
    if (i==6) {
        break;
    }
    console.log(i);
}

for (let i=0; i<10; ++i) {
    if (i==6) {
        continue;
    }
    console.log(i);
}






