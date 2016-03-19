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
    this.goal;

    // The current dimensions for this map based on the difficulty level
    this.width;
    this.height;
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
        this.width = mapProperties.baseWidth + (2 * diffLevel);
        this.height = mapProperties.baseHeight + (2 * diffLevel);

        // This is all of the operations that only need to be done if the map is being generated with obstacles
        if (genObstacles) {
            // Create the groups which are going to contain the obstacles on the map, of both types
            this.lethalObstacles = [];
            this.nonLethalObstacles = [];
        }

        // Create the mapGrid
        this.mapGrid = new Array(this.height);
        for (var i = 0; i < this.mapGrid.length; i++) {
            this.mapGrid[i] = this.genRow(genObstacles, this.width, diffLevel);
        }

        // Build a tilemap from the mapGrid      TODO: switch to permanent render scheme
        //this.tempRenderSet();

        // Semi-randomly generate the position of the goal on the map
        // Create the goal object
        this.goal = new goalObj();
        // Choose a row in the top three to generate in
        var row = game.rnd.between(0, 2);
        this.goal.setPosition(0, row);



        // Set up for render
        this.tempRenderSet();
    },

    // This function generates and returns a row of specified width, including whether or not it has obstacles
    genRow: function(hasObs, width, diffLevel) {
        // What to generate if the row is not going to have obstacles
        if (!hasObs) {
            var row = new Array(width);
            row.fill(entityTypes.empty.index);
            return row;
        } else {
            // TODO: implement generation of row with random obstacles included
            // diffLevel used here to decide probability of obstacle creation
        }
    },

    // Temporary render setup function, just to enable visualization of data
    tempRenderSet: function() {
        this.renderMap = new Array(this.mapGrid.length);
        this.renderMap.fill(new Array(this.mapGrid[0].length));

        // Iterate through the x and y rows of the mapGrid
        for (var i = 0; i < this.mapGrid.length; i++) {
            for (var j = 0; j < this.mapGrid[i].length; j++) {
                this.renderMap[i][j] = game.add.sprite(j * mapProperties.tWidth, i * mapProperties.tHeight, spriteFiles.floor.name);
            }
        }

        // Add the goal sprite to rendering
        this.goal.initSprite();
    },

    // This is a utility function used to check for entities on a tile
    checkCollision: function(x, y) {

    },

}



