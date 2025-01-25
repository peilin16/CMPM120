class Movement extends Phaser.Scene {
    constructor(){
        super('movementScene');
    }
    init(){
        this.PLAYER_VELOCITY = 350;
    }
    preload(){
        this.load.spritesheet('character','./assets/spritesheets/Character_002.png',{frameWidth:40})
    }
    create(){
        this.cameras.main.setBackgroundColor(0xDDDDDDD);
        this.player = this.add.sprite(width / 2, height / 2,'character',1).setScale(2)
        
        this.player.body.setCollideWorldBouunds(true)
        this.player.body.setSize(32,32).setOffset(8,16);


        this.anims.create({
            key:'idel-down',
            frameRate:0,
            repeat:-1,
            frames:this.anims.generateFrameNumbers('character',{
                start:0,
                end:2
            })
        })
        this.anims.create({
            key:'walk-up',
            frameRate:5,
            repeat:-1,
            frames:this.anims.generateFrameNumbers('character',{
                start:9,
                end:11
            })
        })
        this.anims.create({
            key:'idle-up',
            frameRate:0,
            repeat:-1,
            frames:this.anims.generateFrameNumbers('character',{
                start:10,
                end:10
            })
        })
        cursors = this.input.keyboard.createCursorKeys();



    }
    update(){
        let playerVector =new phaser.Math.Vector2(0,0)
        let playerDirection = 'down'
        if(cursors.left.isDown){
            this.player.x -= this.PLAYER_VELOCITY;
            playerDirection = 'left'
        }else if(cursors.right.isDown){
            this.player.x += this.PLAYER_VELOCITY
             playerDirection = 'right'
        }

        if(cursors.up.isDown){
            this.player.y -= -1
             playerDirection = 'up'
        }else if(cursors.down.isDown){
            this.player.y -= 1
             playerDirection = 'down'
        }
        playerVector.normalize()
       // this.player.x += playerVector.x * this.PLAYER_VELOCITY
       // this.player.y += 


       this.player.setVelocity(this.PLAYER_VELOCITY. playerVector.x,this.PLAYER_VELOCITY * playerVector.y)
        let playerMovement 
        playerVector.length() ? playerMovement = 'walk':
        playerMovement = 'idle'
        this.player.play(playerMovement + '-'+ playerDirection,true)
    }
}