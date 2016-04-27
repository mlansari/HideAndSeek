/**
 * Created by mohamed on 3/31/16.
 *
 * The goal of this class and file is to ensure that sounds don't loop, overlap each other, and are generally
 * well-behaved
 */

// *** Declarations ***
var SoundHandler;


// *** Initializations ***
SoundHandler = function() {
    // This is the container for the sounds
    this.sounds = [];
    // This is mapping between sound names and indices
    this.soundInfo = {};
    // This saves the indices of sounds which are foreground, and which are background
    this.fgdSounds = [];
    this.bkgSounds = [];

    // These are the sound layers which are playable
    this.foreground = false;
    this.background = false;


};

SoundHandler.prototype = {

    // The basic initialization of the handler
    create: function() {
        // Initialize the sound holder
        //this.sounds = [];
    },

    addSound: function(soundProperties) {
        var i = this.sounds.push(new Howl(soundProperties)) - 1;
        // Save the sound information to this.soundInfo
        this.soundInfo[soundProperties.name] = i;

        // 1 maps to foreground, 2 maps to background
        if (soundProperties.layer == 1) {
            this.sounds[i].on('play', function() {
                this.foreground = true;
                //console.log("fgd active");
            });
            this.sounds[i].on('end', function() {
                this.foreground = false;
                //console.log("fgd inactive");
            });
            this.fgdSounds.push(i);
        } else if (soundProperties.layer == 2) {
            this.sounds[i].onplay = this.bkgActivate;
            this.sounds[i].onend = this.bkgDeactivate;
            this.bkgSounds.push(i);
        }
    },

    playSound: function(id) {
        console.log(id + " is being played.");

        if (this.fgdSounds.indexOf(id) > -1) {
            //console.log("Foreground playing: " + this.foreground);
            if (this.foreground == false) {
                this.sounds[id].play();
            }
        } else if (this.bkgSounds.indexOf(id) > -1) {
            if (this.background == false) {
                this.sounds[id].play();
            }
        }
    },

    fgdActivate: function() {
        this.foreground = true;
    },

    fgdDeactivate: function() {
        this.foreground = false;
    },

    bkgActivate: function() {
        this.background = true;
    },

    bkgDeactivate: function() {
        this.background = false;
    },

};