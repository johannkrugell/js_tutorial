// let a = ["ant", "bat", "cat", 42];

// a.forEach(function(element){
//   console.log(element);
// });

// let sol = "To be, or not to be, that is the question:";

// Array.from(sol).forEach(function(character) {
//   console.log(character)
// });

// Exercise 5.4.1.1 
// let a = ["ant", "bat", "cat", 42];

// a.forEach = (element) => {
//   return console.log(element);
//  };

 // Exercise 5.4.1.2
// let c = [8, 17, 42, 99];
// c.sort(function(a, b) { return a - b; });

// Exercise 5.4.1.3
let c = [8, 17, 42, 99];
console.log(c);

console.log(c.sort());

c.forEach(function(element){
  console.log(element);
})