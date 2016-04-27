/**
 * Created by mohamed on 3/15/16.
 *
 * This holds all of the locational information for audio and image resources of the game.
 * If it's gonna be hardcoded it's gonna damn well still be neat about it.
 */

// *** Declarations ***
var spriteFiles;
var audioFiles;
var fontInfo;
var loadSprites;        // Function used to load all of the sprites in the objects used to store their properties
var loadAudio;          // Function loads all of the sound files in the audioFiles object into the soundHandler

var soundHandler;       // This object handles all of the sound usage needed in the game

// **** Initializations ***
spriteFiles = {
    // Temporary sprites
    floor: {URL:'assets/TempFloor.png', name:'floor'},
    player: {URL:'assets/TempPlayer.png', name:'player'},
    goal: {URL:'assets/TempGoal.png', name:'goal'},
    obstacle: {URL:'assets/TempObstacle.png', name:'obstacle'},

    // Permanent Sprites

};

audioFiles = {
    // Temporary audio
    goalAcquired:   {urls:['assets/snd/TempGoalGot.wav'], name:'goalAcquired', layer: 1},
    warmer:         {urls:['assets/snd/TempWinSound.wav'], name:'warmer', layer: 1},
    colder:         {urls:['assets/snd/TempLoseSound.wav'], name:'colder',  layer: 1},
    wall:           {urls:['assets/snd/TempWallHit.wav', 'assets/snd/TempWallHit.mp3'], name:'wall', layer: 1},
    end:            {urls:['assets/snd/TempEndSound.wav'], name:'end', layer: 1},

    // Permanent audio

};

fontInfo = {
    fontStyle:{font: '20px Arial', fill: '#FFFFFF', align: 'center'},
};

loadSprites = function() {
    // Temporary sprite loads
    game.load.image(spriteFiles.floor.name, spriteFiles.floor.URL);
    game.load.image(spriteFiles.player.name, spriteFiles.player.URL);
    game.load.image(spriteFiles.goal.name, spriteFiles.goal.URL);
    game.load.image(spriteFiles.obstacle.name, spriteFiles.obstacle.URL);

    // Permanent sprite loads

};

loadAudio = function() {
    // Iterate through all of the audio in the audioFiles object (this doesn't work, whyyyyyyy?)
    for (var soundProp in audioFiles) {
        if (audioFiles.hasOwnProperty(soundProp)) {
            console.log("Loading: " + soundProp.name);
            //soundHandler.addSound(soundProp);
        }
    }

    soundHandler.addSound(audioFiles.goalAcquired);
    soundHandler.addSound(audioFiles.warmer);
    soundHandler.addSound(audioFiles.colder);
    soundHandler.addSound(audioFiles.wall);
    soundHandler.addSound(audioFiles.end);
};

// Sound handler
soundHandler = new SoundHandler();

