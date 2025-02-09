class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key, frame, direction) {
        super(scene, x, y, key, frame, direction)

        scene.add.existing(this)
    }

    reset() {
        this.y = game.config.height
    }
}