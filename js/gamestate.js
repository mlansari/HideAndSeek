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

    // Create the containers for basic player aspects here
    this.playerSprite;

    // Create containers for control codes here
    this.keyUp;
    this.keyDown;
    this.keyLeft;
    this.keyRight;


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

        // Temporary debug output TODO: remove/comment when no longer necessary
        console.log("Game State created");

        // Do all of the game information initialization
        this.initKeyboard();
    },

    // This is a function used to initialize the keyboard
    initKeyboard: function() {
        this.keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },

    update: function() {
        // This does all of the game loop operations.  Bulk of game logic is handled here, movement, etc.

        // Temporary debug output
        console.log(" Game State updated ");

        // Check for keys which are pressed down
        if (this.keyUp.isDown) {
            console.log("Up is pressed");           // Temporary debug output TODO: remove

            // Input response function call
            this.upPressed();
        }
        if (this.keyDown.isDown) {
            console.log("Down is pressed");         // Temporary debug output TODO: remove

            // Input response function call
            this.downPressed();
        }
        if (this.keyLeft.isDown) {
            console.log("Left is pressed");         // Temporary debug output TODO: remove

            // Input response function call
            this.leftPressed();
        }
        if (this.keyRight.isDown) {
            console.log("Right is pressed");        // Temporary debug output TODO: remove

            // Input response function call
            this.rightPressed();
        }
    },

    /*
     * Set of functions defining what to do when various keys are pressed on the keyboard
     */
    upPressed: function() {

    },

    downPressed: function() {

    },

    leftPressed: function() {

    },

    rightPressed: function() {

    },


    shutdown: function() {
        // This is what happened when the state ends.  It can be doing closing and saving operations, or difficulty
        // increase, or anything like that

    }

}