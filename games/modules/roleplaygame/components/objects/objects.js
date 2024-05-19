class Object2 {
    constructor() {
        this.object2 = document.createElement('div')
        this.object2.style.width = '140px'
        this.object2.style.height = '150px'
        this.object2.style.backgroundColor = 'white'
        this.object2.id = 'object2'
        this.object2.style.position = 'absolute'
        this.coordinates = 0;
        this.interval = null
        this.step = 0
    }

    object22 = () => {
        this.interval = setInterval(this.moveObj, 100)
        return this.object2
    }
    moveObj = () => {
        // if (this.object2 && this.coordinates < 10) {
        //     this.object2.style.top = `${this.coordinates * 100}px`
        //     this.coordinates++
        //
        //     if (this.coordinates === 10) {
        //         this.coordinates = 0
        //     }
        // }
        // if (!this.object2) {
        //     clearInterval(this.moveObj)
        //     console.log(this.object2)
        // }
        this.stepObj()
        console.log(this.object2.style.top)
    }

    top = () => {
        let x = parseInt(this.object2.style.top)
        console.log(x)

            this.object2.style.top = `${x - 100}px`
    }
    right = () => {
        this.object2.style.left = `${+100}px`
    }
    down = () => {
        this.object2.style.top = `${+100}px`
    }
    left = () => {
        this.object2.style.left = `${-100}px`
    }
    stepObj = () => {
        switch (this.step) {
            case 0:
                this.top()
                break
            case 1:
                this.right()
                break
            case 2:
                this.down()
                break
            case 3:
                this.left()
                break
            default:
                break
        }
    }
}

export const object2 = new Object2()
