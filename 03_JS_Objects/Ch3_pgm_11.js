// Using a property in a calculation

var player1;

player1 = {
    name: "Max",
    score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.10;

console.log(player1.name + " has scored " + player1.score + " after a 10% increase");


var player2 = {
    name: "Alex",
    score: 75
};

console.log(player2.name + " has scored " + player2.score);


var totalScore = player1.score + player2.score;

console.log(player1.name + " and " + player2.name + " have a combined score of " + totalScore);




/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */