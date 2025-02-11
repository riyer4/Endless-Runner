class Slipper2 extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key, pointValue) {
        super(scene, x, y, key)

        scene.add.existing(this)
        this.points = pointValue // to store point value
        this.moveSpeed = 5 //speed
    }

    
    reset() {
        this.y = game.config.height

        //to wrap around the screen

        if (this.y <= 0 - this.height) {
            this.y = game.config.height
        }
    }
}