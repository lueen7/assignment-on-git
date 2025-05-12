// let name ="john"
// {
//   // var age = 15
// console.log (name)
// }

// console.log (age)

// let age = prompt("Enter your age")
// console.log (age)

// if (age >= 18) {
//   console.log ("You are an adult")
// } 
// else if (age >= 13) {
//   console.log ("You are a teenager")
// } else {
//   console.log ("You are a child")
// } 

 let age = 45
 let newage = age%2
console.log(newage)

let id = 2+5+"5"
console.log(id)
console.log(5)
console.log(typeof id)

// function logFuction () {
//   console.log ("Good Morning to you all")
// }

// logFuction()
// function logFuction (name) {
//   console.log ("Good Morning to you all" + name)
// }

function john(greeting, name) {
  console.log ("greeting " + name)
}
function johnFuntion() {
  console.log ("Good Morning to you all " )
}
johnFuntion()
john("hello","John")

function multiply (a, b, c) {
  let result = a** b + c
  console.log (result)
}
multiply(10, 2, 5)

console.log (multiply)


function bmi(weight, height){
  let result = weight / (height * height)
  console.log (result)
}
  bmi(480, 30)
  console.log (bmi)

  function greeting (name) {
    return ("Hello " + name)
  }
  
  let userGreeting = greeting("John")
  console.log (userGreeting)

  function discount (price, discount) {
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;
    return finalPrice;
  }

  let finalPrice = discount(2000,8);
  console.log("Final price after discount: " + finalPrice);