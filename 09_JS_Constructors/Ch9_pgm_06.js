var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();
    };

    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    this.showMoons = function () {
        if (this.moons.length > 0) {
            console.log("Moons:");
            this.moons.forEach(function (moon, index) {
                console.log("(" + index + ") " + moon);
            });
        } else {
            console.log("Moons: None.");
        }
    };

    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Invalid index.";
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

// Add a new moon to planet1
planet1.addMoon("Ganymede");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

// Add a new moon to planet2
planet2.addMoon("Nereid");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

// Add a new moon to planet3 (even though Mercury has no moons, for the sake of the example)
planet3.addMoon("Hypothetical");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});

// Test getMoon method
console.log(planet1.getMoon(1)); // Output: Europa
console.log(planet2.getMoon(0)); // Output: Nereid
console.log(planet3.getMoon(2)); // Output: Invalid index.



/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */