// A Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet1 = new Planet( "Jupiter", 5, "Gas Giant" );

planet1.showPlanet();

var planet2 = new Planet( "mars", 4, "Terrestrial" );

planet2.showPlanet();




/* Further Adventures
 *
 * 1) Use the Planet constructor function
 *    to create a second planet.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showPlanet method on your
 *    newly created planet.
 *
 */