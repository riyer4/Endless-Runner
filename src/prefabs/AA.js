class AA extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key, pointValue) {
        super(scene, x, y, key)

        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.AAspeed // speedd
    }

    
    update() {
        this.y += this.moveSpeed

        //to wrap around the screen

        if (this.y >= 640) {
            this.y = 0
            this.x = Phaser.Math.Between(30, 380)
        }
    }

    reset() {
        this.y = 0
        this.x = Phaser.Math.Between(30, 380)
    }
}