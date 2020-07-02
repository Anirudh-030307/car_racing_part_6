class Form {
    constructor(){
        this.input = createInput("NAME");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
        this.reset = createButton('RESET');
    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-50,displayHeight/4);

        this.button.position(displayWidth/2-20,displayHeight/2);
        this.button.mousePressed( ()=> {
        this.input.hide();
        this. button.hide();

        player.name=this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateplayerCount(playerCount);

        this.greeting.html("HELLO "+player.name);
        this. greeting.position(displayWidth/2-50,displayHeight/2);

        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed( ()=> {
            game. updateState(0);
            player.updateplayerCount(0);
            player.distance = 0 ;
            player.update();
            player.name = null ;
            player.update();
            Player.updatePlayerRank(0);
        })

        })
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

}