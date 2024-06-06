import {object2} from "../objects/objects.js";
import {move} from "../other/move.js";

let posX = 0
let posY = 0
class PlayerModule {
    constructor() {
        this.player = this.createPlayer();
        this.positionX = 0;
        this.positionY = 0;
        this.stepSize = 5;
        this.bullets = [];
        this.score = 0;
        this.rotateDeg = 0;
        this.movePlayer = this.movePlayer.bind(this);
        this.rotatePlayer = this.rotatePlayer.bind(this);
        this.shootBullet = this.shootBullet.bind(this);
        this.megaShot = () => {
            for (let i = 0; i < 50; i += 10){
                this.shootBullet(i)
            }
        }
        document.addEventListener('keydown', this.movePlayer);
        document.addEventListener('mousemove', this.rotatePlayer);
        document.addEventListener('mousedown', this.megaShot);
        requestAnimationFrame(this.updateBullets.bind(this));
    }
//TODO добавить пушку
    createPlayer() {
        const player = document.createElement('div');
        player.style.width = '200px';
        player.style.height = '200px';
        player.id = 'player';
        // player.style.backgroundColor = 'darkgreen';
        player.style.backgroundImage = 'url("/games/modules/roleplaygame/components/images/tt.png")';
        player.style.backgroundSize= '50% 50%';
        player.style.backgroundPosition= 'center';
        player.style.backgroundRepeat= 'no-repeat';
        player.style.zIndex = '10';
        player.style.position = 'absolute';
        player.style.right = '0px';
        player.style.left = '0px';
        console.log(this.player)
        console.log(player)
        return player;
    }

    movePlayer(e) {
        move.moveObject(this.player,this.stepSize,e)
        this.positionX = parseInt(this.player.style.left)
        this.positionY = parseInt(this.player.style.top)
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

        this.rotateDeg = angleDeg;
        this.player.style.transform = `rotate(${angleDeg-45}deg)`;
        this.shootAngle = angle;
    }

    shootBullet(add) {
        const bullet = document.createElement('div');
        bullet.style.width = '50px';
        bullet.style.height = '50px';
        bullet.style.transform = `rotate(${this.rotateDeg-280}deg)`;
        // bullet.style.backgroundColor = 'red';
        bullet.style.backgroundImage = 'url("modules/roleplaygame/components/images/—Pngtree—bronze sword cartoon illustration_4621258.png")';
        bullet.style.backgroundSize= '150% 150%';
        bullet.style.backgroundPosition= 'center';
        bullet.style.backgroundRepeat= 'no-repeat';
        bullet.style.zIndex = '5';
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
        const bulletSpeed = 50;
            const dx = Math.cos(bullet.angle) * bulletSpeed;
            const dy = Math.sin(bullet.angle) * bulletSpeed;
            // console.log('dx - ',dx,'; dy - ')

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
        // object2.object22()
        console.log(object2.interval)
        clearInterval(object2.interval)
    }
}

export const playerModule = new PlayerModule();