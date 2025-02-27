// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index: " + goIndex);


var chooseIndex = message.indexOf("choose");
var chooseWord = message.substr(chooseIndex, 6);
console.log("The word 'choose' is: " + chooseWord);


var lastOoIndex = message.lastIndexOf("oo");
console.log("The index of 'oo' in the word 'Moon' is: " + lastOoIndex);


/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */