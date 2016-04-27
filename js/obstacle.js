/**
 * Created by mohamed on 4/22/16.
 *
 * This is a child of the entity superclass, which is used in order to create obstacles for the player to run into
 * and need to circumnavigate, adding to the difficulty of the game
 */

// *** Declarations ***
var obstacleObj;


// *** Initializations ***

// Initialize the object
obstacleObj = function(_x, _y) {
    this.spritename = "obstacle";
    this.initSprite();

    // Set the dimensions of obtacles (obstacles can take up more than one square)
    this.xDim = _x;
    this.yDim = _y;

};

// Set the parent of this obstacle as an entity
obstacleObj.prototype = new entity();

// Override the collision functionality of the parent
obstacleObj.prototype.onCollision = function() {
    // Return that this is an entity of the type obstacle
    return entityTypes.obstacle.index;
};

obstacleObj.prototype.initSprite = function() {
   this.spriteRef = game.add.sprite(this.x * mapProperties.tWidth, this.y * mapProperties.tHeight, this.spritename);
};

obstacleObj.prototype.getIndices = function(_top, _left) {
    // This function is used in order to generate the indices of the obstacle based on the top left corner location

    // Create the array containing the indices
    var indices = [];

    // Iterate through the width and height
    for (var i = 0; i < this._xDim; i++) {
        for (var j = 0; j < this._yDim; j++) {
            // Generate and add the new index
            indices.add([_left + i, _top + j]);
        }
    }

    return indices;
};