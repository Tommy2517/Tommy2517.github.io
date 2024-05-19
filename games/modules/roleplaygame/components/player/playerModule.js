import {object2} from "../objects/objects.js";

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
// class PlayerModule {
//     constructor() {
//         this.player = this.createPlayer();
//         this.positionX = 538;
//         this.positionY = 450;
//         this.stepSize = 5;
//         this.movePlayer = this.movePlayer.bind(this);
//         this.rotatePlayer = this.rotatePlayer.bind(this);
//         document.addEventListener('keydown', this.movePlayer);
//         document.addEventListener('mousemove', this.rotatePlayer);
//         document.addEventListener('mousedown', e => {
//             const arrow = document.createElement('div')
//             arrow.style.width = '15px'
//             arrow.style.height = '30px'
//             arrow.style.backgroundColor = 'red'
//             arrow.style.position = 'absolute'
//             arrow.style.left = `${this.positionX}`
//             arrow.style.right = `${this.positionY}`
//             document.getElementById('map').append(arrow)
//                 let time = 0
//             const timer = setInterval(e => {
//                 time ++
//
//                 arrow.style.top = `${this.positionY + (time*10)}px`
//                 arrow.style.left = `${this.positionX + (time*10)}px`
//                 arrow.style.transform = `rotate(${this.player.style.transform}deg)`
//                 console.log(this.player.style.transform);
//                 if (time === 50) {
//                     clearTimeout(timer)
//                     arrow.remove()
//                 }
//                 console.log(time,timer)
//
//             },20)
//         });
//     }
//
//     createPlayer() {
//         const player = document.createElement('div');
//         player.style.width = '20px';
//         player.style.height = '20px';
//         player.style.backgroundColor = 'yellow';
//         player.style.zIndex = '222';
//         player.style.position = 'absolute';
//         document.body.appendChild(player);
//         // document.addEventListener('keydown',e => this.movePlayer(e))
// //
//         return player;
//     }
//
//     movePlayer(e) {
//         switch(e.key) {
//             case 'w':
//                 this.positionY -= this.stepSize;
//                 break;
//             case 's':
//                 this.positionY += this.stepSize;
//                 break;
//             case 'a':
//                 this.positionX -= this.stepSize;
//                 break;
//             case 'd':
//                 this.positionX += this.stepSize;
//                 break;
//             default:
//                 return;
//         }
//         this.player.style.left = this.positionX + 'px';
//         this.player.style.top = this.positionY + 'px';
//         console.log(this.player.style.top);
//     }
//
//     rotatePlayer(e) {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;
//         const playerX = this.positionX + this.player.offsetWidth / 2;
//         const playerY = this.positionY + this.player.offsetHeight / 2;
//
//         const angle = Math.atan2(mouseY - playerY, mouseX - playerX);
//         const angleDeg = angle * (180 / Math.PI);
//         console.log(angleDeg);
//
//         this.player.style.transform = `rotate(${angleDeg}deg)`;
//     }
// }
//
// export const playerModule = new PlayerModule();

class PlayerModule {
    constructor() {
        this.player = this.createPlayer();
        this.positionX = 0;
        this.positionY = 0;
        this.stepSize = 25;
        this.bullets = [];
        this.score = 0;
        this.movePlayer = this.movePlayer.bind(this);
        this.rotatePlayer = this.rotatePlayer.bind(this);
        this.shootBullet = this.shootBullet.bind(this);
        document.addEventListener('keydown', this.movePlayer);
        document.addEventListener('mousemove', this.rotatePlayer);
        document.addEventListener('mousedown', this.shootBullet);
        requestAnimationFrame(this.updateBullets.bind(this));
    }
//TODO добавить пушку
    createPlayer() {
        const player = document.createElement('div');
        player.style.width = '200px';
        player.style.height = '200px';
        // player.style.backgroundColor = 'yellow';
        player.style.backgroundImage = 'url("/games/modules/roleplaygame/components/images/tt.png")';
        player.style.backgroundSize= '100% 100%';
        player.style.backgroundPosition= 'center';
        player.style.backgroundRepeat= 'no-repeat';
        player.style.zIndex = '222';
        player.style.position = 'absolute';
        console.log(this.player)
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
    }

    rotatePlayer(e) {
        const map = document.getElementById('map');
        const rect = map.getBoundingClientRect();

        const mouseX = e.clientX -  rect.left;
        const mouseY = e.clientY -  rect.top;

        const playerX = this.positionX + this.player.offsetWidth / 2;
        const playerY = this.positionY + this.player.offsetHeight / 2;

        const angle = Math.atan2(mouseY - playerY, mouseX - playerX);
        const angleDeg = angle * (180 / Math.PI);

        this.player.style.transform = `rotate(${angleDeg-45}deg)`;
        this.shootAngle = angle;
    }

    shootBullet() {
        const bullet = document.createElement('div');
        bullet.style.width = '15px';
        bullet.style.height = '15px';
        bullet.style.backgroundColor = 'gold';
        bullet.style.zIndex = '221';
        bullet.style.position = 'absolute';
        // bullet.style.transition = '.5s';
        document.getElementById('gameId').append(bullet);
        const bulletPositionX = this.positionX + this.player.offsetWidth / 2;
        const bulletPositionY = this.positionY + this.player.offsetHeight / 2;
        bullet.style.left = bulletPositionX + 'px';
        bullet.style.top = bulletPositionY + 'px';

        this.bullets.push({
            element: bullet,
            angle: this.shootAngle,
            distance: 0
        });
    }

    updateBullets() {
        this.bullets.forEach(bullet => {
        const bulletSpeed = 20;
            const dx = Math.cos(bullet.angle) * bulletSpeed;
            const dy = Math.sin(bullet.angle) * bulletSpeed;

            bullet.element.style.left = parseFloat(bullet.element.style.left) + dx + 'px';
            bullet.element.style.top = parseFloat(bullet.element.style.top) + dy + 'px';

            bullet.distance += Math.sqrt(dx * dx + dy * dy);

            // Проверка столкновения с объектом
            if (this.checkCollision(bullet.element)) {
                this.trigger(); // Вызов функции тригера при попадании
                bullet.element.remove();
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }

            if (bullet.distance >= 1000) {
                bullet.element.remove();
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
        });

        requestAnimationFrame(this.updateBullets.bind(this));
    }
    // Функция для проверки столкновения с объектом
    checkCollision(bulletElement) {
        const objectElement = document.getElementById('object2'); // Замените 'object' на id вашего объекта
        const bulletRect = bulletElement.getBoundingClientRect();
        let objectRect = '';
        const dispetcher = (obj) =>{
            if (obj) {
                objectRect = objectElement.getBoundingClientRect();

            }
        }
        dispetcher(objectElement)

        return (
            bulletRect.left < objectRect.right &&
            bulletRect.right > objectRect.left &&
            bulletRect.top < objectRect.bottom &&
            bulletRect.bottom > objectRect.top
        );
    }

    // Функция тригера при попадании
    trigger() {
        this.score++; // Увеличение счетчика очков
        console.log('Попадание! Очки: ', this.score);
        document.getElementById('object2').remove()
        clearInterval(object2.interval)
    }
}

export const playerModule = new PlayerModule();