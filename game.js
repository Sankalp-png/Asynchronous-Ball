//ref: refers database's specific column which we are trying to access.
//on: on is to set a listener function on the reffered column.
//set: *hindi/ taki database mein value update karne ke liye.
//val: *hindi/ value column(realtime database (firebase) ke column ki) ki.

class Game {
    constructor() {

    }
    getState() {
        var gameStateRef = db.ref("gameState");
        gameStateRef.on("value", function(data) {
            myGameState = data.val();  
        })
    }

    update(state) {
        db.ref("/").update({
            gameState : state
        }) 
    }

    spriteCreation(){
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        cars = [car1, car2, car3, car4]
    }

    start() {
        if(myGameState === 0) {
             player = new Player();
             player.getCount();
             form = new Form();
             form.display();
        }
    }

    play() {
        textSize(30);
        fill("darkblue");
        text("Game Start", 200, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined) {
            var y = 0;
            var x = 0;
            var index = 0;
            for(var plr in allPlayers) {
               index = index + 1;
               x = x+200;
               y = displayHeight - allPlayers[plr].distance
               cars[index-1].x = x;
               cars[index-1].y = y;
               
               if(index === player.index){
                   cars[index-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y = cars[index - 1].y;               }
                //if(plr === "player" + player.index) {
                //    fill("red");
                //} else {
                //    fill("black");
                //}

                //textSize(15);
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 30, y);
            }
        }

        if(keyDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 5; 
            player.update();
        }
    }
}