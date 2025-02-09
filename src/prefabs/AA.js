class AA extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
    }

    
    reset() {
        this.y = game.config.height
    }
}