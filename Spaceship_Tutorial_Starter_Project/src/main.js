/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
var cloudManager;
var player;

function init()
{
    renderer.backgroundColor = 0x22A7F0;
    renderer.render(stage);
    loop();
}

function loop()
{
    requestAnimationFrame(loop);
    renderer.render(stage);
}

//  ------------------------------------------------
PIXI.loader.add([
    "assets/cloud_1.png",
    "assets/cloud_2.png"
 "assets/spaceship.png" 
"assets/rocket.png"
]).load(init);


//--------------------------------
player = new Player();

//-------------------
player.update();