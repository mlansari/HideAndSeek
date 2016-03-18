/**
 * Created by mohamed on 3/16/16.
 *
 * This creates the various kinds of entity the game will need, the goal, the lethal and non-lethal obstacles.
 * All of them will be prototyped by a default "entity"
 */

// *** Declarations ***
var entity;


// *** Initializations ***
entity = function() {
    // The position of the entity (set to -1 by default to indicate unset position)
    this.x = -1;
    this.y = -1;

    // The name of the sound
    this.sound = "";
};

entity.prototype = {
    // Behaviours of all entities

    // A basic placeholder on-collision event
    onCollision: function() {

    },

    // The setter and getter for the name of the ambient sound that it has
    setSound: function(soundName) {
        this.sound = soundName;
    },

    getSound: function() {
        return this.sound;
    },

};