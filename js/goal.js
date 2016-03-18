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
    // Save the name of the sprite for the object (debug aspect only)
    this.spriteName = "";
};

// Set the prototype of the goal (the goal is an entity)
goalObj.prototype = new entity();

