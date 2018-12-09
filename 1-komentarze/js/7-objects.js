// es5
let domKuby = {
pokoje: 3,
kolor: "rozowy",
dach: "skosny",
opiszDom: function(){
    console.log(this.pokoje);
}
}
console.log(domKuby.kolor);
domKuby.opiszDom();

// es6
let domKlaudii = {
    pokoje: 2,
    kolor: "szary",
    dach: "plaski",
    opiszDom(){
        console.log(this.pokoje);
    }
    }
    console.log(domKuby.kolor);
    domKlaudii.opiszDom();

    class Person{
        constructor(name, surname) {
            this.name=name;
            this.surname=surname;
        }

        opiszOsobe () {
            // setInterval( ())
            console.log("Nazywam sie: "+this.name+" "+this.surname);
        }
    }
let kuba = new Person ("Kuba", "Kowalski");
kuba.opiszOsobe();

let paulina = new Person ("Paulina", "Nowak");
paulina.opiszOsobe();