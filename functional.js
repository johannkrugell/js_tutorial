let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "South Africa"]

//convert Kansas => Kansas North Dakota => north-dakota to lower case

//imperative version
function imperativeUrls(elements) {
  let urls =[];
  elements.forEach(function(element){
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

// Functional version
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}
function functionalUrls(elements) {
  return elements.map(element => urlify(element))
}
console.log(functionalUrls(states))

//Exercise 6.1.1 
function exampleUrl(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(exampleUrl(states))

//Exercise 6.2.1
function stringIncl(elements){
  return elements.filter(element => element.includes("Dakota"))
}
console.log('String includes: '+stringIncl(states))

function arrayLength(elements){
  return elements.filter(element => element.split(/\s+/).length === 2)
}
console.log('String length: ' + arrayLength(states))

//Reduce total imperative solution

let numbers = [1,2,3,4,5,6,7,8,9,10]

function addNumbers(n){
  let numbersSum = 0;
   n.forEach(function(element){
    numbersSum += element;
  });
  return numbersSum;
}
console.log(addNumbers(numbers))

//Reduce total functional solution

function functionalSum(elements){
  return elements.reduce((total,n) => {return total += n})
}
console.log(functionalSum(numbers))

//Reduce values:keys imperative solution

function imperativeLength(elements){
  lengths = {}
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return lengths
}
console.log(imperativeLength(states))

//Reduce values:keys functional solution

function functionalLength(elements){
  return elements.reduce((lengths,element) => {lengths[element] = element.length;
                                              return lengths},{})
}
console.log(functionalLength(states))

// Exercise 6.3.4 
let prod = [1,2,3,4]

function functionalProduct(elements){
  return elements.reduce((product, n) => {return product *= n}); 
}
console.log(functionalProduct(prod))

//Exercise 6.3.4
// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log('test');
console.log(functionalLengths(states));