class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame)

        scene.add.existing(this)
        this.moving = false
        this.moveSpeed = 2
    }

    update() {

        //l/r movement 


        if(!this.moving) {
            if(keyLEFT.isDown && this.x >= game.config.height/15 + this.width - 60) {
                this.x -= this.moveSpeed
                this.setFrame(0)
            } else if(keyRIGHT.isDown && this.x <= game.config.width - this.width - 30) {
                this.x += this.moveSpeed
                this.setFrame(2)
            } else {
                this.setFrame(1)
            }
        }
    }

    reset() {
        this.y = game.config.height/2 + 250
    }
}