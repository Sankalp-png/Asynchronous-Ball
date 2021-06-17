class Player {
    constructor(){
        //distance refers to the no. that is why we give its value 0;
        //name and index are strings which don't take numbers this is why we give their value null;
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    //this method is used for reading the playerCount from the database;
    getCount() {
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value", function(data) {
            myPlayerCount = data.val();  
        })
    }

    //this method is used for writing the playerCount value into the database;
    updateCount(count) {
        db.ref("/").update({
            playerCount : count
        }) 
    }

    //this method is used for writing the value of player name and player distance into the database;
    update() {
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = db.ref("players");
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}