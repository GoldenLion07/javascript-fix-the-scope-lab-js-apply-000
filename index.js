var animal = 'dog'
//animal is a global variable. 
function myAnimal() {
  return animal
}
//first function returns just 'dog'
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}
//local scope,\ 
function add2(n) {
  

  // Feel free to move things around!
  const two = 2
  return n + two
}
//const is th
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();

//Relationship between both the outer function and inner function. The first funkyFunction calls the outer function, to call the inner vunction a 2nd parenthesis returns the value "FUNKY!"

