// Write your solution here!
let array = ["Milo", "Otis", "Garfield"];
array.push("Odie");
const append = array;
let array1 = ["Milo", "Otis", "Garfield"];
array1.unshift("Odie");
const prepend = array1;
let array2 = ["Milo", "Otis", "Garfield"];
const removeLast = array2.slice(0,array2.length - 1);
const removeFirst = array2.slice(1,array2.length);