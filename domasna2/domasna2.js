// 1. Vnesete koordinati na edna tochka i kazete vo koj kvadrant se naoga
var x = prompt ("Vnesi eden broj")
var y = prompt ("Vnesi vtor broj")
console.log(x)
console.log(y)

switch(true){
    case x>0 && y>0:
        console.log("Tockata se naogja vo prviot kvadrant");
        break;
    case x<0 && y>0:
        console.log("Tockata se naogja vo vtoriot kvadrant");
        break;
    case x<0 && y<0:
        console.log("Tockata se naogja vo tretiot kvadrant");
        break;
    case x>0 && y<0:
        console.log("Tockata se naogja vo cetvrtiot kvadrant");
        break;
    case x==0 && y!=0:
        console.log("Tockata se naogja na y-oskata");
        break;
    case x!=0 && y==0:
        console.log("Tockata se naogja na x-oskata");
        break;
    case x==0 && y==0:
        console.log("Tockata se naogja vo centarot");
        break;
    default:
        console.log("Invalid input");
}



// // 2. Napravete lista od omileni knigi
let omileniKnigi = ["Atomski naviki", "Ti si dzver", "Kletnici", "Chekaj me", "Sapiens"]
console.log(omileniKnigi)