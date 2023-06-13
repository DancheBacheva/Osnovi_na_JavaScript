// 1. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######

let h=""
for(i=0; i<6; i++){
    h+="#";
    console.log(h);
}

// 2. Имате две низи:направете нова низа во која што ќе ги ставите сите имиња кои двете низи ги делат (Jill, Kate)
var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var Mutual = [];

for(i=0; i < JohnFollowers.length; i++){
    for(j=0; j < JaneFollowers.length; j++){
        if(JohnFollowers[i]==JaneFollowers[j])
        Mutual.push(JaneFollowers[j])
    }
}
console.log(Mutual);

// 3.  креирајте функција која се вика exclaim.
// Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!

let zbor = prompt("Vnesi zbor")
function exclaim(str){
    console.log(zbor+`!`)
}
exclaim()

// 4.  Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
// Title -> име на книгата //string
// Author -> име на авторот //string
// Price -> цена на книгата //number
// Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks

let books = [
    {Title: "Kralstvo od sonishtata", 
    Author: "Dzudit Meknot",
    Price: 240},

    {Title: "Emocionalna inteligencija",
    Author: "Daniel Goleman",
    Price: 700},

    {Title: "Pacientot",
    Author: "Sebastijan Ficek",
    Price: 315},

    {Title: "Ova zapocnuva so nas",
    Author: "Kolin Huver",
    Price: 390},

    {Title: "Belata svetlina vo Pariz",
    Author: "Tereza Revaj",
    Price: 550}
]

for (object in books){
console.log(books[object])
}

let filteredBooks = books.filter(function(books){
    return books.Price<400;
});

filteredBooks.forEach(function(filteredBooks){
    console.log(filteredBooks.Title);
});


// 5. Креирајте функција која се вика LargestNumber.
// Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.

let brojVoNiza = prompt ("Vnesi broj vo niza")
let broevi = []

if(isNaN(brojVoNiza)){
    console.log("Vnesovte input koj ne e broj")
}
else{
    while(!isNaN(brojVoNiza)){
        broevi.push(Number(brojVoNiza));
        brojVoNiza = prompt("Vnesi broj vo Niza");
    }
}
console.log(broevi);

function LargestNumber(broevi){
    let largestNumber = 0
    for (let i=0; i < broevi.length; i++){
        if(broevi[i]>largestNumber){
            largestNumber=broevi[i];
        }
    } return largestNumber;
}
console.log(LargestNumber(broevi));
