// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "gilli",
  actors: "vijay",
  directors: "dharani"
};

function displayMovieInfo(movie){
console.log("Movie information for " + movie.title);
console.log("------------------------------");
console.log("Actors: " + movie.actors);
console.log("Directors: " + movie.directors);
console.log("------------------------------");

}

displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

var event1 = {
  title: "Meeting with Bob",
  date: "2024-07-12",
  location: "Conference Room A"
};

var event2 = {
  title: "Dentist Appointment",
  date: "2024-07-13",
  location: "Downtown Dental Clinic"
};

var event3 = {
  title: "Grocery Shopping",
  date: "2024-07-14",
  location: "SuperMart"
};

function displayEventInfo(event) {
  console.log("Event: " + event.title);
  console.log("Date: " + event.date);
  console.log("Location: " + event.location);
  console.log("------------------------------\n");
}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);






/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */