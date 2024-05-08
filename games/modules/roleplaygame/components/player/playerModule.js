let posX = 0
let posY = 0
class PlayerModule {
    player = () => {
        const player = document.createElement('div')
            player.style.width = '20px'
            player.style.height = '20px'
            player.style.backgroundColor = 'yellow'
            player.style.zIndex = '222'
            player.style.position = 'absolute'
            player.style.left = '0px'
        player.style.transition = '.3s'
        document.addEventListener('keydown',e => {
            // if (e.key === 'd') {
            //     posX += 10
            // player.style.left = `${posX}px`
            //     console.log(player.style.left)
            // }
            // if (e.key === 'a') {
            //     posX -= 10
            // player.style.left = `${posX}px`
            //     console.log(player.style.left)
            // }
            // if (e.key === 'w') {
            //     posY -= 10
            // player.style.top = `${posY}px`
            //     console.log(player.style.top)
            // }
            // if (e.key === 's') {
            //     posY += 10
            // player.style.top = `${posY}px`
            //     console.log(player.style.top)
            // }
            switch (e.key) {
                case 'd':
                    posX += 10
                player.style.left = `${posX}px`
                    break
                case 'a':
                    posX -= 10
                player.style.left = `${posX}px`
                    break
                case 'w':
                    posY -= 10
                player.style.top = `${posY}px`
                    break
                case 's':
                    posY += 10
                player.style.top = `${posY}px`
                break
            }
        })

        return player
    }
}

export const playerModule = new PlayerModule();