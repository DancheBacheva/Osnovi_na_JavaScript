// 1. ispecatete hello world vo konzola
console.log("Hello World")

// 2. ispecatete go zbirot na 5+5 vo konzola
console.log(5+5)

// 3. vnesete go vasheto ime preku promt i ispechatete go
var myName = prompt ("Enter your name") 
console.log(myName)

// 4. preku promt vnesete dva broja i presmetajte go proizvodot
var firstNumber = prompt ("Enter first number")
var secondNumber = prompt ("Enter second number")
console.log(firstNumber, secondNumber)
console.log(firstNumber*secondNumber)

// 5. od prethodno vnesenite broevi prikazete koj e pogolem
if (firstNumber > secondNumber) {
    console.log("The first number entered is bigger than the second number entered");
} else if (firstNumber < secondNumber) {
    console.log("The second number entered is bigger than the first number entered");
} else {
    console.log("Both numbers entered are equal");
  }

// 6. vnesete poeni preku prompt od 0-100 i ispecatete koja e ocenkata

let points = prompt ("Enter your points")
    console.log(points)
if(points>=91 && points<=100){
    console.log("Congratulations! You have passed the exam with a 10")
}else if(points>=81 && points<=90){
    console.log("You successfully passed the exam with a 9")
}else if(points>=71 && points<=80){
    console.log("You have passed the exam with an 8")
}else if(points>=61 && points<=70){
    console.log("You have passed the exam with a 7")
}else if(points>=51 && points<=60){
    console.log("You have passed the exam with a 6")
}else if(points>=0 && points<=50){
    console.log("You have failed the exam.")
}else{
    console.log("Invalid input")
}


