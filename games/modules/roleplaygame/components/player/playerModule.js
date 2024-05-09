let posX = 0
let posY = 0
// class PlayerModule {
//     player = () => {
//         const player = document.createElement('div')
//             player.style.width = '20px'
//             player.style.height = '20px'
//             player.style.backgroundColor = 'yellow'
//             player.style.zIndex = '222'
//             player.style.position = 'absolute'
//             player.style.left = '0px'
//         player.style.transition = '.3s'
//         document.addEventListener('keydown',e => {
//             // if (e.key === 'd') {
//             //     posX += 10
//             // player.style.left = `${posX}px`
//             //     console.log(player.style.left)
//             // }
//             // if (e.key === 'a') {
//             //     posX -= 10
//             // player.style.left = `${posX}px`
//             //     console.log(player.style.left)
//             // }
//             // if (e.key === 'w') {
//             //     posY -= 10
//             // player.style.top = `${posY}px`
//             //     console.log(player.style.top)
//             // }
//             // if (e.key === 's') {
//             //     posY += 10
//             // player.style.top = `${posY}px`
//             //     console.log(player.style.top)
//             // }
//             switch (e.key) {
//                 case 'd':
//                     posX += 10
//                 player.style.left = `${posX}px`
//                     break
//                 case 'a':
//                     posX -= 10
//                 player.style.left = `${posX}px`
//                     break
//                 case 'w':
//                     posY -= 10
//                 player.style.top = `${posY}px`
//                     break
//                 case 's':
//                     posY += 10
//                 player.style.top = `${posY}px`
//                 break
//             }
//         })
//
//         return player
//     }
// }
//
// export const playerModule = new PlayerModule();
class PlayerModule {
    constructor() {
        this.player = this.createPlayer();
        this.positionX = 538;
        this.positionY = 450;
        this.stepSize = 5;
        this.movePlayer = this.movePlayer.bind(this);
        this.rotatePlayer = this.rotatePlayer.bind(this);
        document.addEventListener('keydown', this.movePlayer);
        document.addEventListener('mousemove', this.rotatePlayer);
        document.addEventListener('mousedown', e => {
            const arrow = document.createElement('div')
            arrow.style.width = '5px'
            arrow.style.height = '10px'
            arrow.style.backgroundColor = 'red'
            arrow.style.position = 'absolute'
            arrow.style.left = `${this.positionX}`
            arrow.style.right = `${this.positionY}`
            document.getElementById('map').append(arrow)
                let time = 0
            const timer = setInterval(e => {
                time ++

                arrow.style.top = `${this.positionX + (time*10)}px`
                arrow.style.left = `${this.positionY + (time*10)}px`
                arrow.style.transform = `rotate(${this.player.style}deg)`
                if (time === 50) {
                    clearTimeout(timer)
                    arrow.remove()
                }
                console.log(time,timer)

            },20)
        });
    }

    createPlayer() {
        const player = document.createElement('div');
        player.style.width = '20px';
        player.style.height = '20px';
        player.style.backgroundColor = 'yellow';
        player.style.zIndex = '222';
        player.style.position = 'absolute';
        document.body.appendChild(player);
        // document.addEventListener('keydown',e => this.movePlayer(e))
//
        return player;
    }

    movePlayer(e) {
        switch(e.key) {
            case 'w':
                this.positionY -= this.stepSize;
                break;
            case 's':
                this.positionY += this.stepSize;
                break;
            case 'a':
                this.positionX -= this.stepSize;
                break;
            case 'd':
                this.positionX += this.stepSize;
                break;
            default:
                return;
        }
        this.player.style.left = this.positionX + 'px';
        this.player.style.top = this.positionY + 'px';
        console.log(this.player.style.top);
    }

    rotatePlayer(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const playerX = this.positionX + this.player.offsetWidth / 2;
        const playerY = this.positionY + this.player.offsetHeight / 2;

        const angle = Math.atan2(mouseY - playerY, mouseX - playerX);
        const angleDeg = angle * (180 / Math.PI);
        console.log(angleDeg);

        this.player.style.transform = `rotate(${angleDeg}deg)`;
    }
}

export const playerModule = new PlayerModule();