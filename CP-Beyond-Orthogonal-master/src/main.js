// Code Practice: Beyond Orthogonal
// Name:
// Date: 

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    render:{
        PixelArt:true
    },
    physics:{
        default:'arcade',
        arcade:{
            debut:true
        }
    },
    scene: [Movement]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config