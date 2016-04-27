/**
 * Created by mohamed on 3/15/16.
 *
 * This is the basic definitions for the player and its position and a variety of other things as well
 */

// *** Declarations ***

var Player;

// *** Initializations ***
Player = function(startx, starty, xmapdim, ymapdim, theMap) {
    // Setup the initial position of the Player
    this.x = startx;
    this.y = starty;

    // The x and y values at which the Player can no longer move to
    this.xwall = xmapdim;
    this.ywall = ymapdim;

    // The Player sprite
    this.playerSprite = game.add.sprite(this.x * mapProperties.tWidth, this.y * mapProperties.tHeight,
        spriteFiles.player.name);

    // Save the collision detection function
    this.map = theMap;

};

// Functional declarations of the Player
Player.prototype = {

    /*
     * Movement functions (up, down, left, right)
     *
     * TODO: implement wall checking, as well as less than zero indexing
     */
    moveUp: function() {
        // Change the Player's y position
        if (this.y - 1 >= 0 && !this.wallCheck(this.x, this.y - 1)) {
            this.y -= 1;
            this.playerSprite.y -= mapProperties.tHeight;
        } else {
            // If y position is at the map bound, call that Player was blocked by obstacle
            this.obstacleBlock(0);
        }
    },

    moveDown: function() {
        if (this.y + 1 < this.ywall && !this.wallCheck(this.x, this.y + 1)) {
            this.y += 1;
            this.playerSprite.y += mapProperties.tHeight;
        } else {
            // Y pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(2);
        }
    },

    moveLeft: function() {
        if (this.x - 1 >= 0 && !this.wallCheck(this.x - 1, this.y)) {
            this.x -= 1;
            this.playerSprite.x -= mapProperties.tWidth;
        } else {
            // X pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(1);
        }
    },

    moveRight: function() {
        if (this.x + 1 < this.xwall && !this.wallCheck(this.x + 1, this.y)) {
            this.x += 1;
            this.playerSprite.x += mapProperties.tWidth;
        } else {
            // X pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(3);
        }
    },

    // Function for what to do when blocking obstacle is hit
    // Directions are 0:up, 1:left, 2:down, 3:right
    obstacleBlock: function(direction) {
        // Play a wall hit sound
        soundHandler.playSound(soundHandler.soundInfo[audioFiles.wall.name]);
    },


    // A generic update function, used to perform any necessary per-cycle scheduling
    update: function() {

    },

    // Check the collision
    wallCheck: function(x, y) {
        // Print out what the map is
        console.log(this.map.mapGrid);
        if (this.map.mapGrid[y][x] == entityTypes.empty.index || this.map.mapGrid[y][x] == entityTypes.goal.index) {
            return false;
        }
        return true;
    },
};