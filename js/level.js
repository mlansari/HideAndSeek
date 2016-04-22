/**
 * Created by mohamed on 3/17/16.
 *
 * This is an object which is repetitively created by the gamestate, with the ever increasing difficulty level.
 * It holds the player, the map, and everything which is created per iteration of the entire game, and check whether
 * the level has been won or the time has run out or the player needs to be respawned each tick
 */

// *** Declarations ***
var newLevel;
var levelConstants;

// *** Initializations ***
levelConstants = {
    BASE_LEVEL_LIFE: 120 * 1000,     // SECONDS * MILLISECOND multiplier
};

newLevel = function() {
    // This flag indicates whether the player has finished the level or not: 0 = not, 1 = won, 2 = lost
    this.levelComplete = 0;

    // This stores the difficulty level of this map
    this.difficulty;

    // The level's map and player
    this.levelMap;
    this.levelPlayer;

    // The level's end time
    this.levelEndTime = -1;

    // Information about distance between player and the goal
    // The last distance between the player and the goal
    this.lastDistToGoal;

};

newLevel.prototype = {

    // This method defines what to do when a new level is created
    // The diffLevel argument is used to store what level this is and help with generating the new map
    create: function(diffLevel) {
        this.difficulty = diffLevel;

        // Create and generate a map for the level
        this.levelMap = new gameMap();
        this.levelMap.generate(this.difficulty);

        // Generate a max time for the level, based on the difficult level
        this.levelEndTime = game.time.now + (levelConstants.BASE_LEVEL_LIFE - diffLevel * 1000);


        // Create a player for the game
        // Randomly choose from the bottom three rows to generate in
        var row = game.rnd.between(this.levelMap.height - 3, this.levelMap.height - 1);
        var column = game.rnd.between(0, this.levelMap.width - 1);
        this.levelPlayer = new Player(column, row, this.levelMap.width, this.levelMap.height);

        // Save the initial distance between the player and the goal
        this.lastDistToGoal = calcDistance(this.levelMap.goal.x, this.levelMap.goal.y, this.levelPlayer.x,
                                            this.levelPlayer.y);
    },

    // This is what is called each gameLoop iteration,in order to update the game
    update: function() {
        // Check whether or not level is already over and we're already waiting for cleanup
        if (this.levelComplete > 0) {
            // Debug print
            console.log("This level is over");

            // If it is, exit the loop
            return;
        }

        // TODO: debug print the amount of time remaining
        console.log(this.levelEndTime - game.time.now);

        // Check whether or not the time has run out
        if (game.time.now > this.levelEndTime) {

            // Debug print
            console.log("You ran out of time!");

            this.levelEnd(0);
            return;
        }

        // Check collisions with the player
        var distToGoal = calcDistance(this.levelMap.goal.x, this.levelMap.goal.y, this.levelPlayer.x, this.levelPlayer.y);

        // Debug print
        //console.log("Distance to Goal: " + distToGoal);

        // If the distance between the player and goal is zero, the goal has been collected
        if (distToGoal == 0) {
            // Play the goal acquired sound
            soundHandler.playSound(soundHandler.soundInfo[audioFiles.goalAcquired.name]);

            // End the level with the success code
            this.levelEnd(1);
            return;
        }


        // If the game level hasn't ended, check the new distance between the player and the goal
        if (distToGoal < this.lastDistToGoal) {
            // Play the "warmer" sound byte
            soundHandler.playSound(soundHandler.soundInfo[audioFiles.warmer.name]);
            // Log to console that warmer sound was played
            console.log("Warmer sound played");

        } else if (distToGoal > this.lastDistToGoal) {
            // Play the "colder" sound byte
            soundHandler.playSound(soundHandler.soundInfo[audioFiles.colder.name]);
            // Log to console that colder sound was played
            console.log("Colder sound played");
        }



        // Finishing up things
        // Save the new distance to the goal
        this.lastDistToGoal = distToGoal;

    },

    // This is what is called when the level is over, with an argument to say how the level ended
    // End code key:
    // 0: failure, time ran out
    // 1: success, player reached goal, move on to next level
    levelEnd: function(endType) {
        // Check how the level ended
        if (endType == 0) {
            // Set the level over flag for the level as a whole
            this.levelComplete = 2;

            // Debug print about how you failed
            console.log("You ran out of time... Oops");

            // TODO: hook to sound call for failure sound clip
        } else if (endType == 1) {
            // Set the level over flag for the level as whole
            this.levelComplete = 1;

            // TODO: hook to sound call for success clip
        }
    },

};

