// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

book3 = {
	title : "think straight",
    author : "darius foroux",
    published : 2000
}
console.log(book1.title + " by " + book1.author + ", published in " + book1.published);
console.log(book2.title + " by " + book2.author + ", published in " + book2.published);
console.log(book3.title + " by " + book3.author + ", published in " + book3.published);




/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */