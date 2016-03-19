/**
 * Created by mohamed on 3/18/16.
 *
 * This holds the goal object for the map.  The player needs to get to inside the time limit in order to win.
 */

// *** Declarations ***
var goalObj;


// *** Initializations ***
// Initialize the goal Object
goalObj = function() {
    this.spriteName = "goal";
    this.initSprite();
};

// Set the parent (prototype) of the goal, the goal is an entity
goalObj.prototype = new entity();

// Override the collision with player functionality
goalObj.prototype.onCollision = function() {
    // Tell the player that he ran into the goal, and has won
    return entityTypes.goal.index;
};

goalObj.prototype.initSprite = function() {
    this.spriteRef = game.add.sprite(this.x * mapProperties.tWidth, this.y * mapProperties.tHeight, this.spriteName);
};

