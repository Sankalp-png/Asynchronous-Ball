var myGameState = 0;
var myPlayerCount = 0;
var db;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(displayWidth - 10, displayHeight - 10);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightyellow");

    if(myPlayerCount === 2 ) {
        game.update(1);
    }

    if(myGameState === 1) {
        clear();
        game.spriteCreation();
        game.play();
    }

    drawSprites();
}