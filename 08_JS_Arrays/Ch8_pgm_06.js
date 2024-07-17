// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); // Output: [ 'The Pyramids', 'The Grand Canyon', 'Bondi Beach' ]

removed = items.pop();

console.log(removed + " was removed"); // Output: "Bondi Beach was removed"
console.log(items.join(" and ")); // Output: "The Pyramids and The Grand Canyon"

// Further Adventures

// 1) Push another item onto the array.
items.push("Machu Picchu");

// 2) Log the joined items.
console.log(items.join(" and ")); // Output: "The Pyramids and The Grand Canyon and Machu Picchu"

// 3) Set one of the items using square brackets.
items[1] = "The Great Wall of China";
console.log(items.join(" and ")); // Output: "The Pyramids and The Great Wall of China and Machu Picchu"

// 4) Push more than one item at a time.
items.push("The Colosseum", "Stonehenge");
console.log(items.join(" and ")); // Output: "The Pyramids and The Great Wall of China and Machu Picchu and The Colosseum and Stonehenge"



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */