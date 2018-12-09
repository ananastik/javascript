let eurUsd = {
    last: 1.13444,
    cur: 1.13552,
};

console.log(eurUsd.last);

let grupa = {
    studenci: [
        { 'imie': 'Anastazja', 'wzrost': 172 },
        { 'imie': 'Karolina', 'wzrost': 169 },
        { 'imie': 'Kuba', 'wzrost': 194 },
        { 'imie': 'Klaudia', 'wzrost': 170 },
        { 'imie': 'Rafal', 'wzrost': 180 },
    ],
    wykladowca: "Krystian",
}
console.log(grupa);

for(let key in grupa){
    if (Array.isArray(grupa[key])){
        grupa[key].forEach(element => {
            console.log("Student: "+element.imie);
        });
    }
}

const result = (liczba1, liczba2, liczba3)=>{
    let wynik = 0;

    wynik = liczba1 * liczba2*liczba3;
    return wynik;
}

// if (wzrostKlaudii < wzrostKuby) {
//     console.log("Klaudia jest nizsza");
// }
