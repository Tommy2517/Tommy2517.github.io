let body_snake = document.createElement('div');
body_snake.tabIndex = 0;
body_snake.classList.add('qwe')
body_snake.setAttribute('id', '1')
let x_position = 0;
let y_position = 0;
let step = 1;
let top_turn = 0;
let bot_turn = 0;
let left_turn = 0;
let right_turn = 0;
let intervalID = null;
let animationIsRunning = false;

document.body.onkeydown = function (eo) {
    if (eo.key === 'd' && right_turn === 0) {
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 0;
        left_turn = 0;
        right_turn = 1;

        intervalID = setInterval(function() {
            if (x_position > 180) {
                x_position = 0;
            }
            x_position += 5;
            body_snake.style.left = `${x_position}px`;
        }, 90)
    }

    if (eo.key === 'a' && left_turn === 0) {
        clearInterval(intervalID);
        top_turn = 0;
        bot_turn = 0;
        left_turn = 1;
        right_turn = 0;

        intervalID = setInterval(function() {
            if (x_position < 0) {
                x_position = 180;
            }
            x_position -= 5;
            body_snake.style.left = `${x_position}px`;
        }, 90)
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
                    y_position = 80;
                }
                y_position -= 5;
                body_snake.style.top = `${y_position}px`;
            }, 90)
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
                if (y_position > 80) {
                    y_position = 0;
                }
                y_position += 5;
                body_snake.style.top = `${y_position}px`;
            }, 90)
        }
    }
}


// for (;x_position < 180; x_position+=10){
//     if (x_position >180){
//         x_position =0
//     }
// }

// document.body.onkeydown = function (eo) {
//     if (eo.key === 'd') {
//
//         x_position += step;
//         if (x_position > 180) {
//             x_position = 0;
//         }
//         body_snake.style.left = `${x_position}px`
//     }
//
//     if (eo.key === 'a') {
//         x_position -= step;
//         if (x_position < 0) {
//             x_position = 180;
//         }
//         body_snake.style.left = `${x_position}px`
//     }
//
//     if (eo.key === 's') {
//         y_position += step;
//         if (y_position > 80) {
//             y_position = 0;
//         }
//         body_snake.style.top = `${y_position}px`
//     }
//
//     if (eo.key === 'w') {
//         if (y_position < 1) {
//             y_position = 81;
//         }
//         y_position -= step;
//         body_snake.style.top = `${y_position}px`
//     }
//     console.log(eo.key)
// }
document.body.append(body_snake)