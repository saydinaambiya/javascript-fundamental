// undefined
let var1; //the default value of variable is undefined
let var2;

// boolean
var1 = false;
var2 = true;

// number
var1 = 10;
var2 = 10.5;

//big int
var1 = 111111111111111111111111111111111n;

// string
var1 = "Josh";
var2 = "Esyeden";

// symbol
var1 = Symbol("this is symbol of VAR 1");

// null
var1 = null;

// object
let person = {
    name: "Josh",
    hobby: "Movies",
}
console.log(person.name);
console.log(typeof var1); //to check type of data type
console.log(`Hello ${person.name}`) // string interpolation