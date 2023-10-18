const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './fighting-game-assets/pixelart-1654315846202-8920.jpg'
})


const player = new Fighter({
  position: {
    x: 100,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
  framesMax: 10,
  scale: 2.5,
  offset: {
    x: 200,
    y: -10
  },
  sprites: {
    idle: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
      framesMax: 10
    },
    idle_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle-Left.png',
      framesMax: 10
    },
    run: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png',
      framesMax: 10
    },
    run_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run-Left.png',
      framesMax: 10
    },
    jump: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png',
      framesMax: 3
    },
    jump_left: {
      imageSrc: "./fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump-Left.png",
      framesMax: 3
    },
    fall: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png',
      framesMax: 3
    },
    fall_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall-Left.png',
      framesMax: 3
    },

    attack1: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png',
      framesMax: 4
    },

    attack2: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack-Left.png',
      framesMax: 4
    },
    
    takeHit: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Death.png',
      framesMax: 10
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 170,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  directionLeft: true,
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
  framesMax: 10,
  scale: 2.5,
  offset: {
    x: 200,
    y: -10
  },
  sprites: {
    idle: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
      framesMax: 10
    },
    idle_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle-Left.png',
      framesMax: 10
    },
    run: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png',
      framesMax: 10
    },
    run_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run-Left.png',
      framesMax: 10
    },
    jump: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png',
      framesMax: 3
    },
    jump_left: {
      imageSrc: "./fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump-Left.png",
      framesMax: 3
    },
    fall: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png',
      framesMax: 3
    },
    fall_left: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall-Left.png',
      framesMax: 3
    },

    attack1: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png',
      framesMax: 4
    },

    attack2: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack-Left.png',
      framesMax: 4
    },
    
    takeHit: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './fighting-game-assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Death.png',
      framesMax: 10
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.directionLeft) {
    player.velocity.x = -5
    player.switchSprite('run_left')
    player.attackBox.offset.x = -50
  } else if (keys.d.pressed && !player.directionLeft) {
    player.velocity.x = 5
    player.switchSprite('run')
    player.attackBox.offset.x = 0
  } else if (player.directionLeft){
    player.switchSprite('idle_left')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    if(!player.directionLeft) {
      player.switchSprite('jump')
    } else {player.switchSprite('jump_left')}
  } else if (player.velocity.y > 0) {
    if(!player.directionLeft) {
      player.switchSprite('fall')
    } else {player.switchSprite('fall_left')}
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.directionLeft) {
    enemy.velocity.x = -5
    enemy.switchSprite('run_left')
    enemy.attackBox.offset.x = -50
  } else if (keys.ArrowRight.pressed && !enemy.directionLeft) {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
    enemy.attackBox.offset.x = 0
  } else if (enemy.directionLeft){
    enemy.switchSprite('idle_left')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    if(!enemy.directionLeft) {
      enemy.switchSprite('jump')
    } else {enemy.switchSprite('jump_left')}
  } else if (enemy.velocity.y > 0) {
    if(!enemy.directionLeft) {
      enemy.switchSprite('fall')
    } else {enemy.switchSprite('fall_left')}
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 2
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 2) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({player, enemy, timerId})
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        player.directionLeft = false
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        player.directionLeft = true
        break
     
      case 'w':
        player.velocity.y = -20
        break
     
      case ' ':
        if (!player.directionLeft){
          player.attack()
        } else {player.attackLeft()}
        break
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        enemy.directionLeft = false
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        enemy.directionLeft = true
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        if (!enemy.directionLeft){
          enemy.attack()
        } else {enemy.attackLeft()}

        break
    }
  }
}})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})