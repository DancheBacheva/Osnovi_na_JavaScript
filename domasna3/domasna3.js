// 1. Vnesete dvocifren broj preku prompt i ispecatete go brojot kako zbor. primer: 23- dva tri, 57- pet sedum
var broj = prompt ("Vnesi dvocifren broj")
console.log(broj)
var cifra1 = parseInt(broj/10)
var cifra2 = broj%10
var zborZaCifra = ["nula", "eden", "dva", "tri", "cetiri", "pet", "shest", "sedum", "osum", "devet"]

if(broj >=10 && broj <=99){
    console.log(zborZaCifra[cifra1], zborZaCifra[cifra2])
}
else{
    console.log("Vnesovte pogresen broj")
}

// 2. Kreirajte objekt koj ke sodrzi vrednosti koi se od tip string, broj, niza i objekt
let avtor = {
    name: "Sebastian Fitzek",
    numberOfBooks: 19,
    books: ["Therapy", "Amok game", "The Child", "The soulbreaker", "Splinter", "The Eye Collector", "Do not fall asleep", "The Eye Hunter", "The Nightwalker", "Noah", "Passenger 23", "The blood school", "The Joshua-profile", "The Package", "EightNight", "Seat 7a", "Pacient", "The Present", "The Way Home"],
    lastWrittenBook: {
        title: "The way home",
        year: 2020,
        genre: "Psycho-thriller"
    }
}
    console.log(avtor)

// 3. ispechatete gi vrednostite na objektot koj sto e vrednost na objektot od prethodnata zadacha

    console.log(avtor.lastWrittenBook.title)
    console.log(avtor.lastWrittenBook.year)
    console.log(avtor.lastWrittenBook.genre)
