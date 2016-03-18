/**
 * Created by mlans13 on 3/2/2016.
 *
 * The purpose of this file is to create the main handle from which the game is accessed on the index page for the game.
 */

/**
 * Declarations
 */
var game;               // The main game object
var gameProperties;     // The various primary important unchanging properties of the game TODO: load from file
var states;


/**
 * Initializations
 */
// Initialize the various properties of the game, things which should be loaded from something like json
gameProperties = {
    // Screen size properties       TODO: use to scale the size of individual map rendering (Not super important)
    screenWidth: 1280,
    screenHeight: 720,

    // Timing constants (in milliseconds)
    MIN_MOVE_TIME: 300,         // Currently half a second
};

// Define the various states available to the game
states = {
    game: 'game',
};


// Usage of this initialization = (width, height, rendermode (Let phaser choose), HTML5PageLocationOfGameScreen)
game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

// Setup the various game states
game.state.add(states.game, gameState);

// Choose which state the game starts on, and thus start the game
game.state.start(states.game);
