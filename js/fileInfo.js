/**
 * Created by mohamed on 3/15/16.
 *
 * This holds all of the locational information for audio and image resources of the game.
 * If it's gonna be hardcoded it's gonna damn well still be neat about it.
 */

// *** Declarations ***
var spriteFiles;
var audioFiles;
var loadSprites;        // Function used to load all of the sprites in the objects used to store their properties
var loadAudio;          // Function used to load all of the audio files in the objects used to store their properties

// **** Initializations ***
spriteFiles = {
    // Temporary sprites
    floor: {URL:'assets/TempFloor.png', name:'floor'},
    player: {URL:'assets/TempPlayer.png', name:'player'},
    goal: {URL:'assets/TempGoal', name:'goal'},

    // Permanent Sprites

};

audioFiles = {
    // Temporary audio



    // Permanent audio

};

loadSprites = function() {
    // Temporary sprite loads
    game.load.image(spriteFiles.floor.name, spriteFiles.floor.URL);
    game.load.image(spriteFiles.player.name, spriteFiles.player.URL);
    game.load.image(spriteFiles.goal.name, spriteFiles.goal.URL);

    // Permanent sprite loads

};

loadAudio = function() {
    // Temporary audio loads


    // Permanent audio loads

};
