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
    // Set the parent (prototype) of the goal, the goal is an entity
    this.prototype = new entity();
};

// Set the default properties of the goal object
goalObj.spriteName = "goal";
goalObj.spriteRef = game.add.sprite(goalObj.x * mapProperties.tWidth, goalObj.y * mapProperties.tHeight,
    goalObj.spriteName);

// Override the collision with player functionality
goalObj.prototype.onCollision = function() {
    // Tell the player that he ran into the goal, and has won
    return 3;
}

