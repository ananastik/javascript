let imiePobraneZFormularza = "Klaudia";


const dodajNazwisko = (imie) =>{
let nazwisko = "Nowak"
let imieNazwisko = imie+" "+nazwisko;

console.log(imieNazwisko);
}

dodajNazwisko (imiePobraneZFormularza);

const dodaj2RazyNazwisko = (imie) =>{
    let nazwisko = "Kowalska"
    let imieNazwisko = imie+" "+nazwisko+nazwisko;
    
    console.log(imieNazwisko);
    }
    
    dodaj2RazyNazwisko (imiePobraneZFormularza);