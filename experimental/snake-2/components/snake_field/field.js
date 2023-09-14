(function field() {
    let main = document.querySelector('.main')
    let fieldSize = 45;
    function pcPhone() {
        for (let i = 0; i < fieldSize; i++) {
            let y = document.createElement('div');
            y.classList.add('column')
            main.append(y)

            for (let j = 0; j < fieldSize; j++) {
                let x = document.createElement('div');
                x.classList.add('square')
                y.append(x)
            }

        }
    }

    document.getElementById('pc_phone').onclick = () => {
        if (fieldSize === 45){
            fieldSize = 37
        }else   {
            fieldSize = 45
        }
        pcPhone()
    }
})()

let randomFieldSpot = () => Math.floor(Math.random() * 45) * 10;
