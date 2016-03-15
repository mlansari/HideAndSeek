/**
 * Created by mohamed on 3/15/16.
 *
 * This file contains all of the definitions and information about the game map, including grid dimensions and
 * locations of things such as obstacles
 */

// *** Declarations ***
// Holder of the properties of the map
var mapProperties;
// Definition of the actual map
var gameMap;


// *** Initializations ***

// Set up the map properties
mapProperties = {
    // Tile dimensions TODO: Load from file
    tWidth: 32,
    tHeight: 32,

    // Base 0 level difficulty width and height of map  TODO: refine these values
    baseWidth: 24,
    baseHeight: 18,

    // Important map property constants
    MIN_OBSTACLE_DIFF: 6,

};

// Set up the gameMap definitions
gameMap  = function() {
    // The array of grid cells for the map
    this.mapGrid;

    // The various groups for objects on the map
    this.lethalObstacles;
    this.nonLethalObstacles;
};

// Prototype the aspects of the gameMap
gameMap.prototype = {

    /*
     * This function is used to generate the map
     * It takes in an integer value to determine dimensions of the map and the array of obstacles placed
     */
    generate: function(diffLevel) {
        var genObstacles = false;

        // Check if obstacles need to be generated
        if (diffLevel >= mapProperties.MIN_OBSTACLE_DIFF) {
            genObstacles = true;
        }

        // This is where we calculate the width and height of the map based on the difficulty level and base values

    },

    // This function generates and returns a row of specified width, including whether or not it has obstacles
    genRow: function(hasObs, width, diffLevel) {

    }



}



