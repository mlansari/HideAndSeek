/**
 * Created by mlans13 on 3/13/2016.
 */

/**
 *  Declare aspects of the gameState necessary for global access here
 */

var gameState;


/**
 * Initialize everything for the gameState here
 */
gameState = function(game) {
    // In here put all of the basic aspects of the gameState, things which need to be accessed locally and not globally
}

gameState.prototype = {
    // Place all of the functions necessary for a Phaser state here

    init: function() {
        // This is all of the initial operations as soon as the state begins
        // Create things which need to be used throughout the state here...
    },

    preload: function() {
        // Load all of the assets and contents necessary for the game here
    },

    create: function() {
        // Perform all of the one-time operations necessary on recreating the gameState
        // All of the initialization of various aspects of the state, like controls, physic, and resetting and
        // object generation

        // Temporary debug output
        console.log("Game State created");
    },

    update: function() {
        // This does all of the game loop operations.  Bulk of game logic is handled here, movement, etc.

        // Temporary debug output
        console.log(" Game State updated ");
    },

    shutdown: function() {
        // This is what happened when the state ends.  It can be doing closing and saving operations, or difficulty
        // increase, or anything like that

    }

}