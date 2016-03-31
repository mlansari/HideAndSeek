/**
 * Created by mlans13 on 3/13/2016.
 */

// *** Declarations ***
var gameState;


// *** Initializations ***
gameState = function(game) {
    // In here put all of the basic aspects of the gameState, things which need to be accessed locally and not globally

    // Create the containers for basic game level aspects here
    this.currentLevel;

    // Create containers for control codes here
    this.keyUp;
    this.keyDown;
    this.keyLeft;
    this.keyRight;

    // Holds amount of time since last movement
    this.nextMovement = 0;

    // Holds the current difficulty level, which starts at zero and is incremented upwards
    this.difficulty = 0;
};

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
        loadAudio();        // Set up the sound system of the game, no longer does this load sounds
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
        // Generate a new level whenever a new level is needed
        this.currentLevel = new newLevel();
        this.currentLevel.create(this.difficulty);
    },

    update: function() {
        // This does all of the game loop operations.  Bulk of game logic is handled here, movement, etc.

        // Temporary debug output
        //console.log(" Game State updated ");

        // Update the level
        this.currentLevel.update();

        // Check for level states
        if (this.currentLevel.levelComplete == 1) {
            // TODO: add a pause timer between levels through scheduling event with Phaser event system

            // Start the next level
            this.nextLevel();
        }


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

    nextLevel: function() {
        // This is a utility used to cover up and handle the regeneration of the level with an incremented difficulty
        this.difficulty++;
        this.initLevel();
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
            this.currentLevel.levelPlayer.moveUp();
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
            this.currentLevel.levelPlayer.moveDown();
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
            this.currentLevel.levelPlayer.moveLeft();
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
            this.currentLevel.levelPlayer.moveRight();
            // Reset the movement timer
            this.nextMovement = game.time.now + gameProperties.MIN_MOVE_TIME;
        }
    },


    shutdown: function() {
        // This is what happened when the state ends.  It can be doing closing and saving operations, or difficulty
        // increase, or anything like that

    }

};