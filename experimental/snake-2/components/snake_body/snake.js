(function createSnake() {
    let snake_head = document.createElement('div');
    snake_head.classList.add('snake_head');
    let main = document.querySelector('.main')



 let generate = function(){

    snake_body.chest.push(newSection)
 }


    let newSection = document.createElement('div');
    newSection.classList.add('snake_head');
    newSection.style.background = 'red';
    newSection.style.position = 'absolute'

    let move_interval = null

    let snake_body = {
        head: snake_head,
        speed: {move: 100, step: 10,},
        chest: [],
        eat: function () {
            if (this.position.x === food.position.x &&
                this.position.y === food.position.y) {
                this.chest.push(snake_body.head)
            }
        },
        position: {x: 1, y: 1}
    }


// if (snake_body.chest[0]) {
//     for(let i = 0; i < snake_body.chest.length; i++ ){
//         console.log(snake_body.chest[i])
//         snake_body.chest[i].style.left =`${ snake_body.position.x+(10*(i+1))}px`
//         snake_body.chest[i].style.top =`${ snake_body.position.y}px`
//     }
// }

// if (snake_body.chest[0]) {
//     for(let i = 0; i < snake_body.chest.length; i++ ){
//         console.log(snake_body.chest[i])
//         snake_body.chest[i].style.left =`${ snake_body.position.x+(10*(i+1))}px`
//         snake_body.chest[i].style.top =`${ snake_body.position.y}px`
//     }
// }

// if (snake_body.chest[0]) {
//     for(let i = 0; i < snake_body.chest.length; i++ ){
//         console.log(snake_body.chest[i])
//         snake_body.chest[i].style.left =`${ snake_body.position.x+(10*(i+1))}px`
//         snake_body.chest[i].style.top =`${ snake_body.position.y}px`
//     }
// }

// if (snake_body.chest[0]) {
//     for(let i = 0; i < snake_body.chest.length; i++ ){
//         console.log(snake_body.chest[i])
//         snake_body.chest[i].style.left =`${ snake_body.position.x+(10*(i+1))}px`
//         snake_body.chest[i].style.top =`${ snake_body.position.y}px`
//     }
// }



let moveHead{
    left:( )=>{
        snake_body.position.x -= snake_body.speed.step
        snake_body.head.style.left = `${snake_body.position.x - 1}px`
    },
    right:()=>{},
    up:()=>{},
    down:()=>{}
}


// TODO: position>>
    let draw = {
        left: () => {
            if (snake_body.position.x < 10) {
                snake_body.position.x = 451
                generate()
                for(item of snake_body.chest)
                main.append(item)
            }

            //move head
            moveHead.left
            // snake_body.position.x -= snake_body.speed.step
            // snake_body.head.style.left = `${snake_body.position.x - 1}px`

            //move body
            newSection.style.left =`${ snake_body.position.x+10}px`
            newSection.style.top =`${ snake_body.position.y}px`
        },

        right: () => {
            if (snake_body.position.x > 440) {
                snake_body.position.x = -9
            }

            //move head
            snake_body.position.x += snake_body.speed.step
            snake_body.head.style.left = `${snake_body.position.x - 1}px`

            //move body
            newSection.style.left =`${ snake_body.position.x-10}px`
            newSection.style.top =`${ snake_body.position.y}px`
        },

        up: () => {
            if (snake_body.position.y < 10) {
                snake_body.position.y = 451
            }

            //move head
            snake_body.position.y -= snake_body.speed.step
            snake_body.head.style.top = `${snake_body.position.y - 1}px`

            //move body
            newSection.style.top =`${ snake_body.position.y+10}px`
            newSection.style.left =`${ snake_body.position.x}px`
        },

        down: () => {
            if (snake_body.position.y > 440) {
                snake_body.position.y = -9
            }

            //move head
            snake_body.position.y += snake_body.speed.step
            snake_body.head.style.top = `${snake_body.position.y - 1}px`
            
            //move body
            newSection.style.top =`${ snake_body.position.y-10}px`
            newSection.style.left =`${ snake_body.position.x}px`
        },
    }
    document.onkeydown = function (eo) {
        if (move_interval) {
            clearInterval(move_interval)
        }
        if (eo.key === 'a') {
            move_interval = setInterval(draw.left, snake_body.speed.move)
            console.log(draw.left)
        }
        if (eo.key === 's') {
            move_interval = setInterval(draw.down, snake_body.speed.move)
        }
        if (eo.key === 'w') {
            move_interval = setInterval(draw.up, snake_body.speed.move)
        }
        if (eo.key === 'd') {
            move_interval = setInterval(draw.right, snake_body.speed.move)
        }

    }

    // let main = document.querySelector('.main')
    main.append(snake_body.head)
})()
