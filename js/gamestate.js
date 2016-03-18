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

    // Create the containers for basic game level aspects here
    this.player;
    this.myMap;

    // Create containers for control codes here
    this.keyUp;
    this.keyDown;
    this.keyLeft;
    this.keyRight;

    // Holds amount of time since last movement
    this.nextMovement = 0;
}

gameState.prototype = {
    // Place all of the functions necessary for a Phaser state here

    init: function() {
        // This is all of the initial operations as soon as the state begins
        // Create things which need to be used throughout the state here...
        // This is called BEFORE preload

    },

    preload: function() {
        // Load all of the assets and contents necessary for the game here
        loadSprites();      // Load all of the sprites saved in the fileinfo.js file
    },

    create: function() {
        // Perform all of the one-time operations necessary on recreating the gameState
        // All of the initialization of various aspects of the state, like controls, physic, and resetting and
        // object generation

        // Temporary debug output TODO: remove/comment when no longer necessary
        console.log("Game State created");

        // Do all of the game information initialization
        this.initKeyboard();
        this.initLevel();           // TODO: change when this is called to make it work per level iteration
    },

    // This is a function used to initialize the keyboard
    initKeyboard: function() {
        this.keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },

    initLevel: function() {
        // Create a map object for the game
        this.myMap = new gameMap();

        // Generate the gameMap
        this.myMap.generate(0);         // TODO: move this to where it can execute per level

        // Create a new player for the level    TODO:  move to where this is done per level (maybe?)
        this.player = new Player(0, 0, mapProperties.baseWidth, mapProperties.baseHeight);          // TODO: pass parameters that aren't placeholder
    },

    update: function() {
        // This does all of the game loop operations.  Bulk of game logic is handled here, movement, etc.

        // Temporary debug output
        console.log(" Game State updated ");

        // Check for keys which are pressed down
        if (this.keyUp.isDown) {
            // Input response function call
            this.upPressed();
        }
        if (this.keyDown.isDown) {
            // Input response function call
            this.downPressed();
        }
        if (this.keyLeft.isDown) {
            // Input response function call
            this.leftPressed();
        }
        if (this.keyRight.isDown) {
            // Input response function call
            this.rightPressed();
        }
    },

    /*
     * Set of functions defining what to do when various keys are pressed on the keyboard
     */
    upPressed: function() {
        // Debug line to indicate button pressed, uncomment when needed
        console.log("Up pressed");

        // Check if there has been enough time since previous movement
        if (game.time.now > this.nextMovement) {
            // Move the player up
            this.player.moveUp();
            // Reset the movement timer
            this.nextMovement = game.time.now + gameProperties.MIN_MOVE_TIME;
        }
    },

    downPressed: function() {
        // Debug line to indicate button pressed, uncomment when needed
        console.log("Down pressed");

        // Check if there has been enough time since previous movement
        if (game.time.now > this.nextMovement) {
            // Move the player down
            this.player.moveDown();
            // Reset the movement timer
            this.nextMovement = game.time.now + gameProperties.MIN_MOVE_TIME;
        }
    },

    leftPressed: function() {
        // Debug line to indicate button pressed, uncomment when needed
        console.log("Left pressed");

        // Check if there has been enough time since previous movement
        if (game.time.now > this.nextMovement) {
            // Move the player left
            this.player.moveLeft();
            // Reset the movement timer
            this.nextMovement = game.time.now + gameProperties.MIN_MOVE_TIME;
        }
    },

    rightPressed: function() {
        // Debug line to indicate button pressed, uncomment when needed
        console.log("Right pressed");

        // Check if there has been enough time since previous movement
        if (game.time.now > this.nextMovement) {
            // Move the player right
            this.player.moveRight();
            // Reset the movement timer
            this.nextMovement = game.time.now + gameProperties.MIN_MOVE_TIME;
        }
    },


    shutdown: function() {
        // This is what happened when the state ends.  It can be doing closing and saving operations, or difficulty
        // increase, or anything like that

    }

}