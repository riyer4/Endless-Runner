class Play extends Phaser.Scene {
    constructor () {
        super('playScene')
    }

    create() {


        //borders maybe
        this.add.rectange(0, 0, game.config.width, game.config.width / 15, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectange(0, 0, game.config.width - game.config.width / 15, game.config.width, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectange(0, 0, game.config.width / 15, game.config.width, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectange(0, 0, game.config.width, game.config.width / 15, 0xFFFFFF).setOrigin(0, 0)

        // add all characters / sprites

        //main player (change the measurements later)

        this.player = new Player(this.game.config.width/4, this.game.config.height, 'player').setOrigin(0, 0)

        // slippers

        this.blue = new Slipper(this.game.config.width/4, this.game.config.height, 'blue').setOrigin(0, 0)

        this.purple = new Slipper(this.game.config.width/4, this.game.config.height, 'purple').setOrigin(0, 0)

        // A plus's 

        this.AA = new AA(this.game.config.width/4, this.game.config.height, 'AA').setOrigin(0, 0)

        //define the keys

        //keyFIRE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        //keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        // score stuff

        this.p1Score = 0 // score initialization

        // add the same stuff as the menu config layout

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '35px',
            backgroundColor: '#add8e6',
            color: '#000',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }

        // check for if the game is over or not

        this.gameOver = false

        //clock stuff

        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', scoreConfig).setOrigin(0.5)
            this.gameOver = true

        }, null, this)

    }

    update() {


        //check input for restarting

        // update bg tile position

        // update all sprites and characters

        // do a collision check

        if(this.checkCollision(this.player, this.blue)) {
            //this.player.??? do animation of getting hit or flashing red who knows
            this.playerHit(this.blue)
        }

        
        if(this.checkCollision(this.player, this.purple)) {
            //this.player.??? do animation of getting hit or flashing red who knows
            this.playerHit(this.purple)
        }

        if(this.checkCollision(this.player, this.AA)) {
            //this.player.??? do animation of getting hit or flashing red who knows
            this.playerGain(this.AA)
        }


        if (!this.gameOver) {
            //update everything under here
            this.player.reset()
            this.blue.reset()
            this.purple.reset()
            this.AA.reset()
        }

    }

    checkCollision(player, item) {
        // copy from prev assignment
        // or take inspo from golf in class assignment

        if (player.x < item.x + item.width &&
            player.x + player.width > item.x &&
            player.y < item.y + item.height &&
            player.height + player.y > item.y) {
                return true
            } else {
                return false
            }
    }


}