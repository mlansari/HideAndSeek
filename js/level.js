/**
 * Created by mohamed on 3/17/16.
 *
 * This is an object which is repetitively created by the gamestate, with the ever increasing difficulty level.
 * It holds the player, the map, and everything which is created per iteration of the entire game, and check whether
 * the level has been won or the time has run out or the player needs to be respawned each tick
 */

// *** Declarations ***
var newLevel;


// *** Initializations ***
newLevel = function() {
    // This flag indicates whether the player has finished the level or not: 0 = not, 1 = won, 2 = lost
    this.levelComplete = 0;

    // This stores the difficulty level of this map
    this.difficulty;

    // The level's map
    this.map;
};

newLevel.prototype = {

    // This method defines what to do when a new level is created
    // The diffLevel argument is used to store what level this is and help with generating the new map
    create: function(diffLevel) {
        this.difficulty = diffLevel;

        // Create and generate a map for the level
        this.map = new gameMap();
        this.map.generate(this.difficulty);


    },

    // This is what is called each gameLoop iteration,in order to update the game
    update: function() {

    },

};

