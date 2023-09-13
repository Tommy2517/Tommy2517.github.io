(function createSnake() {
    let snake_head = document.createElement('div');
    snake_head.classList.add('snake_head');
    let main = document.querySelector('.main')





    let newSection = {
    section: document.createElement('div')

    }

    newSection.section.classList.add('snake_head');
    newSection.section.style.background = 'red';
    newSection.section.style.position = 'absolute'



    let move_interval = null

    let snake_body = {
        head: snake_head,
        speed: {move: 100, step: 10,},
        chest: [snake_head],
        position: {x: 1, y: 1}
    }




    let food = document.createElement('div');
    let foodX = ()=> Math.floor(Math.random()*45)*10;
    let foodY = ()=> Math.floor(Math.random() * 45) * 10;
    food.classList.add('snake_head');
    food.style.background = 'yellow';
    food.style.top = `${foodY()}px`
    food.style.left = `${foodX()}px`
    let foodPosX = parseInt(food.style.left)
    let foodPosy = parseInt(food.style.top)
    main.append(food)



setInterval(()=>{
    if (parseInt(snake_body.head.style.left) === foodPosX &&
        parseInt(snake_body.head.style.top) === foodPosy) {
        snake_body.chest.push(newSection.section)
        food.style.top = `${foodY()}px`
        food.style.left = `${foodX()}px`
        foodPosX = parseInt(food.style.left)
        foodPosy = parseInt(food.style.top)
        main.append(snake_body.chest[snake_body.chest.length-1])
        console.log(snake_body.chest)
        for (let item of snake_body.chest) {
            console.log(item.style.background)
        }
    }
},100);





let moveHead = {
    left:( )=>{
        snake_body.position.x -= snake_body.speed.step
        snake_body.head.style.left = `${snake_body.position.x - 1}px`
    },
    right:()=>{
        snake_body.position.x += snake_body.speed.step
        snake_body.head.style.left = `${snake_body.position.x - 1}px`
    },
    up:()=>{
        snake_body.position.y -= snake_body.speed.step
        snake_body.head.style.top = `${snake_body.position.y - 1}px`
    },
    down:()=>{
        snake_body.position.y += snake_body.speed.step
        snake_body.head.style.top = `${snake_body.position.y - 1}px`
    }
}

    let turn = {
        left: () => {
            if (snake_body.position.x < 10) {
                snake_body.position.x = 451
            }

            //move head
            moveHead.left()

            //move body
            // item.style.left = `${snake_body.chest[snake_body.chest.length-2].style.left}`
            // item.style.top = `${snake_body.chest[snake_body.chest.length-2]}`
            for (let i=0; i < snake_body.chest.length; i++) {
                if (i > 0){
                    snake_body.chest[i].style.left = `${parseInt(snake_body.chest[i-1].style.left)+10}px`
                    snake_body.chest[i].style.top = `${parseInt(snake_body.chest[i-1].style.top)}px`
                }}
        },

        right: () => {
            if (snake_body.position.x > 440) {
                snake_body.position.x = -9
            }

            //move head
            moveHead.right()

            //move body
            // newSection.section.style.left =`${ snake_body.position.x-10}px`
            // newSection.section.style.top =`${ snake_body.position.y}px`
            for (let i=0; i < snake_body.chest.length; i++) {
                if (i > 0){
                    snake_body.chest[i].style.left = `${parseInt(snake_body.chest[i-1].style.left)-10}px`
                    snake_body.chest[i].style.top = `${parseInt(snake_body.chest[i-1].style.top)}px`
                }}
        },

        up: () => {
            if (snake_body.position.y < 10) {
                snake_body.position.y = 451
            }

            //move head
            moveHead.up()

            //move body
            // newSection.section.style.top =`${ snake_body.position.y+10}px`
            // newSection.section.style.left =`${ snake_body.position.x}px`
            for (let i=0; i < snake_body.chest.length; i++) {
                if (i > 0){
                    snake_body.chest[i].style.left = `${parseInt(snake_body.chest[i-1].style.left)}px`
                    snake_body.chest[i].style.top = `${parseInt(snake_body.chest[i-1].style.top)+10}px`
                }}
        },

        down: () => {
            if (snake_body.position.y > 440) {
                snake_body.position.y = -9
            }

            //move head
            moveHead.down()
            
            //move body
            // newSection.section.style.top =`${ snake_body.position.y-10}px`
            // newSection.section.style.left =`${ snake_body.position.x}px`
            for (let i=0; i < snake_body.chest.length; i++) {
                if (i > 0){
                    snake_body.chest[i].style.left = `${parseInt(snake_body.chest[i-1].style.left)}px`
                    snake_body.chest[i].style.top = `${parseInt(snake_body.chest[i-1].style.top)-10}px`
                }}
        },
    }


    document.onkeydown = function (eo) {
        if (move_interval) {
            clearInterval(move_interval)
        }
        if (eo.key === 'a') {
            move_interval = setInterval(turn.left, snake_body.speed.move)
        }
        if (eo.key === 's') {
            move_interval = setInterval(turn.down, snake_body.speed.move)
        }
        if (eo.key === 'w') {
            move_interval = setInterval(turn.up, snake_body.speed.move)
        }
        if (eo.key === 'd') {
            move_interval = setInterval(turn.right, snake_body.speed.move)
        }


    }


    main.append(snake_body.head)


})()
