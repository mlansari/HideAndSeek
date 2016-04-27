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
    baseWidth: 12,
    baseHeight: 9,

    // Important map property constants
    MIN_OBSTACLE_DIFF: 1,
    MIN_NONLETHAL_OBSTACLE_AMOUNT:.07,

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

        // Print the width and the height  TODO: this is debug
        console.log("Width: " + this.width + ", Height: " + this.height);

        // Create the mapGrid
        this.mapGrid = new Array(this.height);
        for (var i = 0; i < this.mapGrid.length; i++) {
            // TODO: debug
            console.log("Generating mapGrid row " + i + " of width " + this.width);
            this.mapGrid[i] = this.genRow(genObstacles, this.width, diffLevel);
        }

        // This is all of the operations that only need to be done if the map is being generated with obstacles
        if (genObstacles) {
            // Create the groups which are going to contain the obstacles on the map, of both types
            // TODO: Update, as of now, only implement nonlethal obstacles
            this.lethalObstacles = [];
            this.nonLethalObstacles = [];

            //this.genLethalObstacles();
            this.genNonLethalObstacles(diffLevel);
        }

        // Build a tilemap from the mapGrid      TODO: switch to permanent render scheme
        //this.tempRenderSet();

        // Semi-randomly generate the position of the goal on the map
        // Create the goal object
        this.goal = new goalObj();

        // TODO: Choose random area in the map to generate in, increase directional variety
        // Choose a row in the top three to generate in
        var row = game.rnd.between(0, 2);
        // Choose a column position here
        var column = game.rnd.between(0, this.width - 1);
        this.goal.setPosition(column, row);

        // Set the goal in the mapGrid
        this.mapGrid[row][column] = entityTypes.goal.index;

        // TODO: debug print the map grid
        for (var i = 0; i < this.height; i++) {
            var temp  = "";
            for (var j = 0; j < this.width; j++) {
                temp += "" + this.mapGrid[i][j] + " ";
            }
            console.log(temp);
        }


        // Set up for render
        this.tempRenderSet();
    },

    // This function generates and returns a row of specified width, including whether or not it has obstacles
    genRow: function(hasObs, width, diffLevel) {
        // What to generate if the row is not going to have obstacles
        //if (!hasObs) {
        //    var row = new Array(width);
        //    row.fill(entityTypes.empty.index);
        //    return row;
        //} else {
        //    // TODO: implement generation of row with random obstacles included
        //    var row
        //}

        var row = new Array(width);
        row.fill(entityTypes.empty.index);
        return row;
    },

    // Generate the nonlethal obstacles
    genNonLethalObstacles: function(diffLevel) {
        // Choose an amount of nonlethal obstacles to generate based on the difficulty level
        // Or perhaps calculate as a percentage of the map area off of base value
        var obstacles = Math.floor((this.width * this.height) *
            ((mapProperties.MIN_NONLETHAL_OBSTACLE_AMOUNT) + (diffLevel *.01)));

        var obsGened = 0;
        while (obsGened < obstacles) {
            // Generate a random possible width and height for the obstacle
            var w = game.rnd.between(1, 2 + (0));      // TODO: implement increased size possibilities with diff ++
            var h = game.rnd.between(1, 2 + (0));

            // Create containers for the x and y to use
            var x, y;

            // Generate a random x and y for an obstacle which is empty
            var done = false;
            while (!done) {
                // Generate an x and a y
                // TODO: debug print
                //x = game.rnd.between(0, (this.height - 1));
                //y = game.rnd.between(0, (this.width - 1));

                x = Math.floor(Math.random() * (this.height - 1));
                y = Math.floor(Math.random() * (this.width - 1));

                // Try to assume success
                done = true;

                // Check that x and y through the w and h are sane (eg: empty and not out of bounds)
                console.log("Width and height of the mapGrid: " + this.mapGrid.length + ", " + this.mapGrid[0].length);
                for (var i = 0; i < w; i++) {
                    for (var j = 0; j < h; j++) {
                        console.log("Checking (" + (x + i) + ", " + (y + j) + ")");
                        //console.log("It is " + this.mapGrid[x + i]);

                        if ((x + i) >= this.width || (y + j) >= this.height) {
                            done = false;
                        } else if (this.mapGrid[x + i][y + j] != entityTypes.empty.index) {
                            console.log("Not empty");
                            done = false;
                        }
                    }
                }
            }

            console.log("Generating at " + x + ", " + y + " with a width and height of " + w + " and " + h);

            // Check for staying below max obstacle tile amount
            if (obsGened + (w * h) > obstacles) {
                continue;
            }

            // TODO: debug print
            console.log(obsGened + " out of " + obstacles);

            // Set them up as obstacles, because it's now safe to do so
            for (var i = 0; i < w; i++) {
                for (var j = 0; j < h; j++) {
                    this.mapGrid[x + i][y + j] = entityTypes.obstacle.index;
                }
            }

            // Iterate by amount of tiles made
            obsGened += (w * h);
        }
    },

    // Temporary render setup function, just to enable visualization of data
    tempRenderSet: function() {
        this.renderMap = new Array(this.mapGrid.length);
        this.renderMap.fill(new Array(this.mapGrid[0].length));

        // Iterate through the x and y rows of the mapGrid
        for (var i = 0; i < this.mapGrid.length; i++) {
            for (var j = 0; j < this.mapGrid[i].length; j++) {
                if (this.mapGrid[i][j] == entityTypes.empty.index) {
                    this.renderMap[i][j] = game.add.sprite(j * mapProperties.tWidth, i * mapProperties.tHeight, spriteFiles.floor.name);
                } else if (this.mapGrid[i][j] == entityTypes.goal.index) {
                    // Do nothing, rendering that is handled separately
                } else {
                    this.renderMap[i][j] = game.add.sprite(j * mapProperties.tWidth, i * mapProperties.tHeight, spriteFiles.obstacle.name);
                }
            }
        }

        // Add the goal sprite to rendering
        this.goal.initSprite();
    },

    // This is a utility function used to check for entities on a tile
    checkCollision: function(x, y) {
        // Check if the tile is not equal to empty
        if (this.mapGrid[x][y] == entityTypes.empty.index || this.mapGrid[x][y] == entityTypes.goal.index) {
            return false;
        }
        return true;
    },

};



