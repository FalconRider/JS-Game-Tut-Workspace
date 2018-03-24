/*****************************************************

                    Player.js

*****************************************************/
class Player
{
    constructor()
    {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources["assets/spaceship.png"].texture);
        this.sprite.interactive = true;

        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
        this.sprite.scale.set(0.4, 0.4);

        stage.addChild(this.sprite);
    }
}

/  ------------------------------------------------
window.addEventListener('keydown', this.onKeyDown.bind(this));
window.addEventListener('keyup', this.onKeyUp.bind(this));
onKeyDown(key) = {};
onKeyUp(key) = {};

this.velocityX = 0;
this.velocityY = 0;
this.speed = 8;
this.keyCodes = {37: -1, 38: -1, 39: 1, 40: 1};
onKeyDown(key)
{
    if (key.keyCode == 37 || key.keyCode == 39)
        this.velocityX = this.keyCodes[key.keyCode];
    else if (key.keyCode == 38 || key.keyCode == 40)
        this.velocityY = this.keyCodes[key.keyCode];
}

update()
{
    this.sprite.position.x += this.directionX * this.speed;
    this.sprite.position.y += this.directionY * this.speed;
}

this.keyState = {37: false, 38: false, 39: false, 40: false};
this.keyState[key.keyCode] = true;
this.keyState[key.keyCode] = false;


if (!this.keyState[37] && this.keyState[39])
    this.directionX = this.keyCodes[39];
else if (this.keyState[37] && !this.keyState[39])
    this.directionX = this.keyCodes[37];
else this.directionX = 0;

if (!this.keyState[38] && this.keyState[40])
    this.directionY = this.keyCodes[40];
else if (this.keyState[38] && !this.keyState[40])
    this.directionY = this.keyCodes[38];
else this.directionY = 0;

--------------------------
updateFire()
    {
        if (this.fireCooldown < this.fireSpeed)
            this.fireCooldown++;

        if (this.keyState[32] && this.fireCooldown >= this.fireSpeed)
        {
            let rocket = new Rocket(this.sprite.position.x, this.sprite.position.y);
            this.fireCooldown = 0;
        }
    }
-------------
update()
{
    this.sprite.position.x += this.directionX * this.speed;
    this.sprite.position.y += this.directionY * this.speed;

    this.updateFire();
}

--------------------------------

onKeyDown(key)
{
    this.keyState[key.keyCode] = true;

    if (key.keyCode == 32) {
        let rocket = new Rocket(this.sprite.position.x,
        this.sprite.position.y);
    }

    if (key.keyCode == 37 || key.keyCode == 39)
        this.directionX = this.keyCodes[key.keyCode];
    else if (key.keyCode == 38 || key.keyCode == 40)
        this.directionY = this.keyCodes[key.keyCode];
}
---------------------
this.fireSpeed = 10;
this.fireCooldown = 0;

this.keyState = {32: false, 37: false, 38: false, 39: false, 40: false};
---------------------

