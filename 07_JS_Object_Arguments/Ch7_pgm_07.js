// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// Function to convert a string to upper case
var getBig = function (str) {
    return str.toUpperCase();
};

// Function to convert a string to lower case
var getSmall = function (str) {
    return str.toLowerCase();
};

// Test the functions
var testString1 = "Earth";
var testString2 = "NePtUnE";

console.log(testString1 + " becomes " + getBig(testString1));
console.log(testString2 + " becomes " + getBig(testString2));

console.log(testString1 + " becomes " + getSmall(testString1));
console.log(testString2 + " becomes " + getSmall(testString2));




/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */