let body_snake = document.createElement('div');
body_snake.tabIndex = 0;
body_snake.classList.add('snake_body')
body_snake.setAttribute('id', '1')
let x_position = 0;
let y_position = 0;
let top_turn = 0;
let bot_turn = 0;
let left_turn = 0;
let right_turn = 0;
let intervalID = null;
let step = 10;
let head_position = [0,0];

let interval_eat = null;
let intervalSpeed = 100;
let timeoutSpeed = 10;

document.body.onkeydown = function (eo) {

    if (eo.key === 'd' && right_turn === 0) {
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 0;
        left_turn = 0;
        right_turn = 1;

        intervalID = setInterval(function() {
            if (x_position > 180) {
                body_snake.style.transition = 'none'
                x_position = -20;
            }
            x_position += step;
            body_snake.style.left = `${x_position}px`;
            head_position[0] = x_position
        }, intervalSpeed)
    }

    if (eo.key === 'a' && left_turn === 0) {
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 0;
        left_turn = 1;
        right_turn = 0;

        intervalID = setInterval(function() {
            if (x_position < 0) {
                x_position = 200;
            }
            x_position -= step;
            body_snake.style.left = `${x_position}px`;
            head_position[0] = x_position
        }, intervalSpeed)
    }

    if (eo.key === 'w' && top_turn === 0) {
        clearInterval(intervalID);
        top_turn = 1;
        bot_turn = 0;
        left_turn = 0;
        right_turn = 0;

        if (top_turn === 1){
            intervalID = setInterval(function() {
                if (y_position < 0) {
                    y_position = 100;
                }
                y_position -= step;
                body_snake.style.top = `${y_position}px`;
                head_position[1] = y_position

            }, intervalSpeed)
        }
    }
    if (eo.key === 's' && bot_turn === 0) {
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 1;
        left_turn = 0;
        right_turn = 0;

        if (bot_turn === 1){
            intervalID = setInterval(function() {
                if (y_position > 70) {
                    y_position = -10;
                }
                y_position += step;
                body_snake.style.top = `${y_position}px`;
                head_position[1] = y_position
            }, intervalSpeed)
        }
    }



    if (!interval_eat){
        interval_eat = setInterval(function () {
            if (head_position[1] === position_food[0] &&
                head_position[0] === position_food[1]) {
                position_food_change()
            }
            console.log(head_position, '|', position_food)
        }, 50)
    }
    if (eo.key === ' '&& interval_eat){
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 0;
        left_turn = 0;
        right_turn = 0;
        clearInterval(interval_eat)
        interval_eat = null
        console.log(position_food)
        console.log(head_position);
    }
}
