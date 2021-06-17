class Form {
    constructor() {
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    display() {
        //h2, h3 - heading instruction from html.
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 20, 20);
    
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);

        this.button.position(displayWidth/2 - 40, displayHeight/2);

        this.button.mousePressed(() => {
            
            this.input.hide();                 
            this.button.hide();
            
            player.name = this.input.value();
            myPlayerCount = myPlayerCount + 1;
            
            player.index = myPlayerCount;

            player.update();

            player.updateCount(myPlayerCount);
            this.greeting.html("Hello! " + player.name);
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        })
    }
}