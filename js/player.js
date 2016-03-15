/**
 * Created by mohamed on 3/15/16.
 *
 * This is the basic definitions for the player and its position and a variety of other things as well
 */

// *** Declarations ***

var player;

// *** Initializations ***
player = function(startx, starty) {
    // Setup the initial position of the player
    this.x = startx;
    this.y = starty;
}