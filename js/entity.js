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

    // The name of the sound and sprite of the object
    this.soundName = "";
    this.spriteName = "";

    // This contains the actual reference to the Phaser sprite which is created by entity children
    this.spriteRef;

    // This property indicates whether or not the obj
};

entity.prototype = {
    // Behaviours of all entities

    // A basic placeholder on-collision event
    // On collision always returns a number for the reaction the player needs to have
    // 0: ran into placeholder, no interaction
    // 1: player can't move, entity is solid
    // 2: player can move, however entity kills player
    // 3: player can move and pick up entity, entity is therefore the goal
    onCollision: function() {
        // The default behaviour in the placeholder is to do nothing on collision, they can simply overlap
        return 0;
    },

    // The setter and getter for the name of the ambient sounds that it has
    setSound: function(sound) {
        this.soundName = sound;
    },

    getSound: function() {
        return this.soundName;
    },

    // The setter for the position of the entity
    setPosition: function(nx, ny) {
        this.x = nx;
        this.y = ny;
    },

};