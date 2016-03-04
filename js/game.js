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


// Things to move to independent files
var gameState;          // Base state during game execution, most common state of the game state machine


/**
 * Initializations
 */
gameProperties = {
    screenWidth: 800,
    screenHeight: 600,
}

// Usage of this initialization = (width, height, rendermode (Let phaser choose), HTML5PageLocationOfGameScreen)
game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');

// Setup the various game states

// Choose which state the game starts on, and thus start the game

