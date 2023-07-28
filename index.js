// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
console.log(destructivelyAppendCat('Ralph'));

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
console.log(destructivelyPrependCat('Bob'));

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}



cats = destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}



cats = destructivelyRemoveFirstCat();

function appendCat(name) {
  // Create a copy of the 'cats' array and modify the copy
  let newArray = [...cats, name];
  return newArray;
}
console.log(appendCat("Broom"));

function prependCat(name) {
  // Create a copy of the 'cats' array and modify the copy
  let newArray = [name, ...cats];
  return newArray;
}
console.log(prependCat("Arnold"));
console.log(cats);

function removeLastCat() {
  // Create a copy of the 'cats' array and modify the copy
  let newArray = [...cats];
  newArray.pop();
  return newArray;
}

function removeFirstCat() {
  // Create a copy of the 'cats' array and modify the copy
  let newArray = [...cats];
  newArray.shift();
  return newArray;
}


