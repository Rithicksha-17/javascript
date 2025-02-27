// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log(sum);

var sum1 = add(10, 15);
console.log(sum1); 


var number1 = 50;
var number2 = 23;
var sum2 = add(number1, number2);
console.log('The sum of ' + number1 + ' and ' + number2 + ' is ' + sum2);

var sum3 = add(add(5, 10), 20);
console.log(sum3);


var addThreeNumbers = function (number1, number2, number3) {
    return number1 + number2 + number3;
};

var sum4 = addThreeNumbers(5, 10, 15);
console.log(sum4);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */