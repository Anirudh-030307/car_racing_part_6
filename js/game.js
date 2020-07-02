class Game{
    constructor(){}

    getState(){
        var toread = database.ref('gameState');
        toread.on("value",function (data) {
            gameState = data.val();
        })
    }

    updateState(State){
        database.ref('/').update({'gameState' : State});
    }

    start(){
        if (gameState === 0) {
            form = new Form();
            form.display();
            player = new Player();
            player.getplayerCount();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];

        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
    }

    play () {
        player.getplayerRank();
        form.hide();
        text("GAME STARTS", 120 , 100 );
        Player.getplayerInfo();
        if (allPlayers!==undefined) {
            background("white");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var displayPosition=130;
            var index = 0;
            var x = 200;
            var y;
            for (var plr in allPlayers){
                index += 1;
                x += 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if (plr==="player"+player.index) {
                    fill("red");
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                /*else {
                    fill("black");
                    cars[index-1].shapeColor = "grey";
                }*/
                displayPosition=displayPosition+20;
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,displayPosition)
                if (index === player.index) {
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                }
            } 
        
        }
        if ( keyDown(UP_ARROW) && player.index !== null ) {
            player.distance += 10;
            player.update();
        }
        drawSprites();

        if (player.distance>3760) {
            gameState = 2 ;
            player.rank += 1;
            Player.updatePlayerRank(player.rank);
            textSize(40);
            fill("red");
            text("Player rank : " + player.rank,displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
            console.log(player.rank); 
        }

    }

}