
(function createSnake() {
    let move_interval = null;
    let main = document.querySelector('.main');
    // let food_apple = document.getElementById('food_apple');

    let snake_head = document.createElement('div');
    snake_head.classList.add('snake_head');

    let chest = [snake_head];
    main.append(snake_head);

    let scoreDiv = document.getElementById('score')
    let scoreCounter = 0;
    scoreDiv.innerText = `Score - ${scoreCounter}`;

    let snake_body = {
        speed: {move: 100, step: 10},
        position: {x: 1, y: 1},
    };


    let food = document.createElement('i');
    // let food = food_apple
    food.classList.add('snake_head',);
    // food.classList.add('fa-solid',' fa-apple-whole',);
    food.style.background = 'yellow';
    food.style.transition = 'none';

    let foodPosX = 0;
    let foodPosy = 0;
    foodPosition()
    main.append(food);

    function foodPosition (){
        food.style.top = `${randomFieldSpot()}px`;
        food.style.left = `${randomFieldSpot()}px`;
        foodPosX = parseInt(food.style.left)//+3;
        foodPosy = parseInt(food.style.top)//+5;
    }
    let newSection = ()=>{
        let newSection = document.createElement('div');
        newSection.classList.add('snake_head');
        newSection.style.background = 'blue';
        chest.push(newSection);
        main.append(newSection);
    }

    setInterval(() => {
        if (
            parseInt(snake_head.style.left) === foodPosX &&
            parseInt(snake_head.style.top) === foodPosy
        ) {
            scoreCounter++
            scoreDiv.innerText = `Score - ${scoreCounter}`;
            foodPosition()
            newSection()

        }

    }, 100);

    let moveHead = {
        left: () => {
            snake_body.position.x -= snake_body.speed.step;
            snake_head.style.left = `${snake_body.position.x - 1}px`;
        },
        right: () => {
            snake_body.position.x += snake_body.speed.step;
            snake_head.style.left = `${snake_body.position.x - 1}px`;
        },
        up: () => {
            snake_body.position.y -= snake_body.speed.step;
            snake_head.style.top = `${snake_body.position.y - 1}px`;
        },
        down: () => {
            snake_body.position.y += snake_body.speed.step;
            snake_head.style.top = `${snake_body.position.y - 1}px`;
        },
    };

    let moveBody = () => {
        for (let i = chest.length - 1; i > 0; i--) {
            chest[i].style.left = `${parseInt(chest[i - 1].style.left)}px`
            chest[i].style.top = `${parseInt(chest[i - 1].style.top)}px`

        }
    }


    let turn = {
        left: () => {

            if (snake_body.position.x < 10) {
                snake_body.position.x = enterWall
            }
            for (let i = 0; i < chest.length; i++) {
                if (parseInt(chest[i].style.left) < 10){
                    chest[i].style.transition = 'none'
                    setTimeout(()=>{chest[i].style.transition = '0.1s'},50)
                }
            }
            moveHead.left()
            moveBody()
        },

        right: () => {
            if (snake_body.position.x > exitWall) {
                snake_body.position.x = -9
            }
            for (let i = 0; i < chest.length; i++) {
                if (parseInt(chest[i].style.left) > exitWall-10){
                    chest[i].style.transition = 'none'
                    setTimeout(()=>{chest[i].style.transition = '0.1s'},100)
                }
            }
            moveHead.right()
            moveBody()
        },

        up: () => {
            if (snake_body.position.y < 10) {
                snake_body.position.y = enterWall
            }
            for (let i = 0; i < chest.length; i++) {
                if (parseInt(chest[i].style.top) < 10){
                    chest[i].style.transition = 'none'
                    setTimeout(()=>{chest[i].style.transition = '0.1s'},50)
                }
            }
            moveHead.up()
            moveBody()
        },

        down: () => {
            if (snake_body.position.y > exitWall) {
                snake_body.position.y = -9
            }
            for (let i = 0; i < chest.length; i++) {
                if (parseInt(chest[i].style.top) > enterWall-20){
                    chest[i].style.transition = 'none'
                    setTimeout(()=>{chest[i].style.transition = '0.1s'},50)
                }
            }
            moveHead.down()
            moveBody()
        },
    }
//KEYBOARD CONTROLS
    document.onkeydown = function (eo) {
        if (move_interval) {
            clearInterval(move_interval);
        }
        if (eo.key === 'a') {
            move_interval = setInterval(turn.left, snake_body.speed.move);
        }
        if (eo.key === 's') {
            move_interval = setInterval(turn.down, snake_body.speed.move);
        }
        if (eo.key === 'w') {
            move_interval = setInterval(turn.up, snake_body.speed.move);
        }
        if (eo.key === 'd') {
            move_interval = setInterval(turn.right, snake_body.speed.move);
        }
    };
//BUTTONS CONTROL
//     document.getElementById('btn_up').onclick = (eo)=>{
//             clearInterval(move_interval);
//             move_interval = setInterval(turn.up, snake_body.speed.move);
//     }
//     document.getElementById('btn_down').onclick = (eo)=>{
//             clearInterval(move_interval);
//             move_interval = setInterval(turn.down, snake_body.speed.move);
//     }
//     document.getElementById('btn_left').onclick = (eo)=>{
//             clearInterval(move_interval);
//             move_interval = setInterval(turn.left, snake_body.speed.move);
//     }
//     document.getElementById('btn_right').onclick = (eo)=>{
//             clearInterval(move_interval);
//             move_interval = setInterval(turn.right, snake_body.speed.move);
//     }
//SWIPES CONTROL
    let startX, startY, endX, endY;
    document.addEventListener('touchstart', function(eo) {
        startX = eo.touches[0].clientX;
        startY = eo.touches[0].clientY;
        // eo.preventDefault()
    });

    document.addEventListener('touchmove', function(eo) {
        // Если нужно обработать движение пальца во время свайпа, это можно сделать здесь
        // eo.preventDefault();
    });

    document.addEventListener('touchend', function(eo) {
        endX = eo.changedTouches[0].clientX;
        endY = eo.changedTouches[0].clientY;

        // Вычислите направление свайпа и выполните нужные действия
        let deltaX = startX - endX;
        let deltaY = startY - endY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                // Свайп влево
                clearInterval(move_interval);
                move_interval = setInterval(turn.left, snake_body.speed.move);
            } else {
                // Свайп вправо
                clearInterval(move_interval);
                move_interval = setInterval(turn.right, snake_body.speed.move);
            }
        } else {
            if (deltaY > 0) {
                // Свайп вверх
                clearInterval(move_interval);
                move_interval = setInterval(turn.up, snake_body.speed.move);
            } else {
                // Свайп вниз
                clearInterval(move_interval);
                move_interval = setInterval(turn.down, snake_body.speed.move);
            }
        }
        // eo.preventDefault();

    });
addEventListener('click', ()=>{
    clearInterval(move_interval)
})






//reload field items
    function reset(){
    clearInterval(move_interval)
    snake_body.position.y = 1;
    snake_body.position.x = 1;
    snake_head.style.left = '1px'
    snake_head.style.top = '1px'
    chest=[snake_head];
    main.append(chest[0]);
    scoreCounter = 0;
    scoreDiv.innerText = `Score - ${scoreCounter}`;

    }
//
    document.getElementById('pc_phone').onclick = () => {
        main.innerHTML = ''
        reset()
        if (fieldSize === 45){
            fieldSize = 37
            enterWall = 371
            exitWall = 360
            main.style.width = '370px'
            main.style.height = '370px'
        }else   {
            fieldSize = 45
            enterWall = 451
            exitWall = 440
            main.style.width = '450px'
            main.style.height = '450px'
        }
        main.append(food);
        foodPosition()
        field()
    }

})();
// document.documentElement.addEventListener('touchstart', function(eo) {
//     eo.preventDefault();
// });
//
// document.documentElement.addEventListener('touchmove', function(eo) {
//     eo.preventDefault();
// });