/**
 * Created by mohamed on 3/15/16.
 *
 * This is the basic definitions for the player and its position and a variety of other things as well
 */

// *** Declarations ***

var Player;

// *** Initializations ***
Player = function(startx, starty, xmapdim, ymapdim) {
    // Setup the initial position of the Player
    this.x = startx;
    this.y = starty;

    // The x and y values at which the Player can no longer move to
    this.xwall;
    this.ywall;

    // The Player sprite
    this.playerSprite;


};

// Functional declarations of the Player
Player.prototype = {

    // Function called for Player creation
    createPlayer: function(xmapdim, ymapdim) {
        this.xwall = xmapdim;
        this.ywall = ymapdim;
    },

    /*
     * Movement functions (up, down, left, right)
     *
     * TODO: implement wall checking, as well as less than zero indexing
     */
    moveUp: function() {
        // Change the Player's y position
        if (this.y - 1 >= 0) {          // TODO: check that next position is clear as well, prior to allowing movement
            this.y -= 1;
        } else {
            // If y position is at the map bound, call that Player was blocked by obstacle
            this.obstacleBlock(0);
        }
    },

    moveDown: function() {
        if (this.y + 1 < this.ywall) {
            this.y += 1;
        } else {
            // Y pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(2);
        }
    },

    moveLeft: function() {
        if (this.x - 1 >= 0) {
            this.x -= 1;
        } else {
            // X pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(1);
        }
    },

    moveRight: function() {
        if (this.x + 1 < this.xwall) {
            this.x += 1;
        } else {
            // X pos map bound, call for Player blocked by obstacle
            this.obstacleBlock(3);
        }
    },

    // Function for what to do when blocking obstacle is hit
    // Directions are 0:up, 1:left, 2:down, 3:right
    obstacleBlock: function(direction) {
        // TODO: play a sound, with sound position depending on the direction of the encounter
    },


};