// 1. Da se napishe programa za vnesuvanje na faktoriel za nekoj broj
let num = Number(prompt("Vnesi broj i dobij faktoriel od brojot"))
let faktoriel = 1

while (num>=1){
    if(num*(num-1)>0){
        console.log(num)
       faktoriel*=num
    }
    num--;
}
console.log(faktoriel)

// 2. Vnesuvaj broevi vo niza se dodeka ne vneses karakter. Od vnesenite broevi odredi kolku od niv se dellivi so 5 i 3, koi samo so 5 i koi samo so 3

let broj = prompt ("Vnesi broj vo niza")
let niza = []

if(isNaN(broj)){
    console.log("Vnesovte input koj ne e broj")
}
else{
    while(!isNaN(broj)){
        niza.push(Number(broj))
        broj = prompt("Vnesi broj vo niza")
    }
}
console.log(niza);

for(let i=0; i < niza.length; i++){
    let j = niza[i];

    if(j%5==0 && j%3==0) {
        console.log(j + " e delliv so 5 i so 3");
    }
    else if(j%5==0){
        console.log(j + " e delliv so 5 ")
    }
    else if(j%3==0){
        console.log(j + " e delliv so 3")
    }
}
    
// 3. Da se napishe programa koja na ekran ke gi ispecati site cetiri-cifreni broevi kaj koi zbirot na trite najmalku znacajni cifri e ednakov so najznacajnata cifra (5302->5=3+0+2;4310->4=3+1+0)

for (let i=1000; i<=9999; i++){
    let B = i;
    let C1=parseInt(B/1000);
    B=B%1000;
    let C2=parseInt(B/100);
    B=B%100;
    let C3=parseInt(B/10);
    B=B%10;
    let C4=B/1    

    if(C1==C2+C3+C4){
        console.log(i);
     }
}    
// 4. Da se napise objekt koj ke sodrzi poveke kluc-vrednost parovi, kade sto vrednostite ke bidat od tip string, broj, niza i objekt. Da se ispecatat site svojstva na objektot vo sledniot format kluc:vrednost.  Dokolku vrednosta e niza da se napisat elementite od nizata vo nov red so prazni mesta pred elementot. Array.is.Array()
let company = {
    name : "Final Fiction",
    employees: 9,
    services : ["video production", "translation", "localisation", "subtitling"], 
    management: {
        productionManager: "Dime",
        languageCoordinator: "Elena",
    }
}
console.log(company)

for (let key in company) {
    let value = company[key];
    console.log(key + ": " + value);
  
    if (Array.isArray(value)) {
      console.log(value.join(" "));
    }
  }
console.log(company.services)


// 5. Kreirajte niza od uchenici (ime, prezime, poeni) i presmetajte go prosechniot broj na poeni

let ucenici = [
    {ime: "Pero",
    prezime: "Petrov",
    poeni: 78
},
    {ime: "Monika",
    prezime: "Ristova",
    poeni: 86
},
    {ime: "Kristina",
    prezime: "Dimitrovska",
    poeni: 55
},
    {ime: "Tomas",
    prezime: "Cuklevski",
    poeni: 69
},
    {ime: "Toni",
    prezime: "Ristov",
    poeni: 97
},
]

let zbirOdPoeni = 0
for(i=0; i<ucenici.length; i++){
    zbirOdPoeni+=ucenici[i].poeni
}
let prosek=zbirOdPoeni/ucenici.length
console.log(prosek)


// 6. y = x^n

let x= Number(prompt("Enter number"))
let n= Number(prompt("Enter number"))
let y= stepen(x,n)

function stepen (x, n){
    let j=1;
    for(let i=1; i<=n; i++){
    j=j*x;
    }
    return j;
}
console.log(y)


// 7.Vnesuvajte broevi vo niza dodeka ne vnesete karakter
// bonus: Od vneseni broevi vo niza odredete koja e najgolemata max suma od dva posledovatelni broevi

let brojVoNiza = prompt ("Vnesi broj vo Niza")
let Niza = []

if(isNaN(brojVoNiza)){
    console.log("Vnesovte input koj ne e broj")
}
else{
    while(!isNaN(brojVoNiza)){
        Niza.push(Number(brojVoNiza));
        brojVoNiza = prompt("Vnesi broj vo Niza");
    }
}
console.log(Niza);

let maxZbir = 0
for (let i=0; i < Niza.length-2; i++){
    let k = Niza[i]+Niza[i+1];
    if(k>maxZbir){
        maxZbir=k;
    }
}
console.log(maxZbir)



