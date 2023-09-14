
(function createSnake() {
    let move_interval = null;
    let main = document.querySelector('.main');

    let snake_head = document.createElement('div');
    snake_head.classList.add('snake_head');

    let chest = [snake_head];
    main.append(chest[0]);


    let snake_body = {
        speed: {move: 100, step: 10},
        position: {x: 1, y: 1},
    };

    // let randomFieldSpot = () => Math.floor(Math.random() * 45) * 10;

    let food = document.createElement('div');
    food.classList.add('snake_head');
    food.style.background = 'yellow';

    let foodPosX = 0;
    let foodPosy = 0;
    foodPosition()
    main.append(food);

    function foodPosition (){
        food.style.top = `${randomFieldSpot()}px`;
        food.style.left = `${randomFieldSpot()}px`;
        foodPosX = parseInt(food.style.left);
        foodPosy = parseInt(food.style.top);
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
        for (let i = chest.length - 1; i > 0; --i) {
            chest[i].style.left = `${parseInt(chest[i - 1].style.left)}px`
            chest[i].style.top = `${parseInt(chest[i - 1].style.top)}px`
            console.log(chest[i - 1].style.left, '||',
                chest[i - 1].style.top)
        }
    }

    let turn = {
        left: () => {
            if (snake_body.position.x < 10) {
                snake_body.position.x = 451
            }

            moveHead.left()
            moveBody()
        },

        right: () => {
            if (snake_body.position.x > 440) {
                snake_body.position.x = -9
            }
            moveHead.right()
            moveBody()
        },

        up: () => {
            if (snake_body.position.y < 10) {
                snake_body.position.y = 451
            }
            moveHead.up()
            moveBody()
        },

        down: () => {
            if (snake_body.position.y > 440) {
                snake_body.position.y = -9
            }
            moveHead.down()
            moveBody()
        },
    }

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

    document.getElementById('btn_up').onclick = (eo)=>{
            clearInterval(move_interval);
            move_interval = setInterval(turn.up, snake_body.speed.move);
    }
    document.getElementById('btn_down').onclick = (eo)=>{
            clearInterval(move_interval);
        move_interval = setInterval(turn.down, snake_body.speed.move);
    }
    document.getElementById('btn_left').onclick = (eo)=>{
            clearInterval(move_interval);
            move_interval = setInterval(turn.left, snake_body.speed.move);
    }
    document.getElementById('btn_right').onclick = (eo)=>{
            clearInterval(move_interval);
            move_interval = setInterval(turn.right, snake_body.speed.move);
    }

})();