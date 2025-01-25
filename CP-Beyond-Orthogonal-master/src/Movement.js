class Movement extends Phaser.Scene {
    constructor(){
        super('movementScene');
    }
    init(){
        this.PLAYER_VELOCITY = 350;
    }
    preload(){
        this.load.spritesheet('character','./assets/spritesheets/Character_002.png',{
            frameWidth:48
        })
    }
    create(){
        this.cameras.main.setBackgroundColor(0xDDDDDD);
        this.player = this.physics.add.sprite(width / 2, height / 2,'character',1).setScale(2)
        
        this.player.body.setCollideWorldBounds(true)
        this.player.body.setSize(32,32).setOffset(8,16)


        this.anims.create({
            key:'idel-down',
            frameRate:0,
            repeat:-1,
            frames:this.anims.generateFrameNumbers('character',{
                start:1,
                end:1
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
            key:'walk-down',
            frameRate:5,
            repeat:-1,
            frames:this.anims.generateFrameNumbers('character',{
                start:0,
                end:2
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
        let playerVector =new Phaser.Math.Vector2(0,0)
        let playerDirection = 'down'
        if(cursors.left.isDown){
            this.player.x -= 2;
            playerDirection = 'left'
        }else if(cursors.right.isDown){
            this.player.x += 2
             playerDirection = 'right'
        }

        if(cursors.up.isDown){
            this.player.y -= 2
             playerDirection = 'up'
        }else if(cursors.down.isDown){
            this.player.y += 2
             playerDirection = 'down'
        }
        playerVector.normalize()
       // this.player.x += playerVector.x * this.PLAYER_VELOCITY
       // this.player.y += 


       this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x,this.PLAYER_VELOCITY * playerVector.y)
        let playerMovement 
        playerVector.length() ? playerMovement = 'walk':
        playerMovement = 'idle'
        this.player.play(playerMovement + '-'+ playerDirection,true)
        
    }
}