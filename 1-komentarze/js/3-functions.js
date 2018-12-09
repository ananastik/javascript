// es5 funkcja
// function pomnozliczby (liczba1, liczba2, liczba3){
   
//     let wynik = 0;

//     wynik = liczba1 * liczba2*liczba3;

//     // console.log(wynik);
//     return wynik;
// }

// es5 drugi zapis
// const pomnozliczby =function(liczba1, liczba2, liczba3){
//     let wynik = 0;

//     wynik = liczba1 * liczba2*liczba3;

//     return wynik;
// }

// es6
const pomnozliczby = (liczba1, liczba2, liczba3)=>{
    let wynik = 0;

    wynik = liczba1 * liczba2*liczba3;

    return wynik;
}
const mnozRazyDwa = l1 => {return l1*2};
console.log(mnozRazyDwa(8));

let wynikDzialaniaFunkcji = pomnozliczby(2,3,8);
console.log(wynikDzialaniaFunkcji);
console.log(pomnozliczby(3,4,1));
let drugiWynikDzialaniaFunkcji = pomnozliczby(4,5,10);
console.log(drugiWynikDzialaniaFunkcji);

let mnoznik1 = 7;
let mnoznik2 = 4;
let mnoznik3 = 100;

mnoznik3 = mnoznik1*mnoznik2;

wynikDzialaniaFunkcji = pomnozliczby(mnoznik1, mnoznik2, mnoznik3);
console.log(wynikDzialaniaFunkcji);

// const PomnozLiczby = function ()

// es6
// const ES6Pomnozliczby = () => {

// }