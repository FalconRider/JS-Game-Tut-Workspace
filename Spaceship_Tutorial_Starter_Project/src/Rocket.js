/*****************************************************

                    Rocket.js

*****************************************************/
class Rocket
{
    constructor(x, y)
    {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources["assets/rocket.png"].texture);

        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(x + 40, y);

        stage.addChild(this.sprite);
    }
}

/  ------------------------------------------------

let _list = new Array();

class Rocket
{
    static get list() { return _list; }
    static set list(value) { _list = value; }
-----------------
this.speed = 20;
Rocket.list.push(this);