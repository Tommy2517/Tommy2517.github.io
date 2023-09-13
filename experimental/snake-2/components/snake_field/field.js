function field(){
    let main = document.querySelector('.main')

    for (let i = 0; i < 45; i++) {
        let y = document.createElement('div');
        y.classList.add('column')
        main.append(y)

        for (let j = 0; j < 45; j++) {
            let x = document.createElement('div');
            x.classList.add('square')
            y.append(x)
        }

    }
}
field()

