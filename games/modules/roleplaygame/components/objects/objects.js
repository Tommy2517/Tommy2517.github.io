class Object2 {
    constructor() {
        this.object2 = this.createObject()
        this.coordinates = 0;
        this.interval = null
        this.step = 0
        this.x = 0
        this.y = 0
        this.countObj = []
    }

    createObject = () => {
        const object = document.createElement('div')
        object.style.width = '140px'
        object.style.height = '150px'
        object.style.backgroundColor = 'white'
        object.id = `object-${this.countObj}`
        object.style.position = 'absolute'
        object.style.transition = '.5s'
        object.style.left = '10px'
        object.style.top = '10px'
        // this.countObj.push(`${object.id}`)
        console.log(this.countObj);
        return object
    }
    object22 = (x,y) => {
        if (x&&y){
            this.object2.style.left = `${x}px`
            this.object2.style.top = `${y}px`
        }
document.getElementById('map').append(this.object2)
        this.moveObj()
        return this.object2
    }
    moveObj = () => {
        this.interval = setInterval(() => {
        this.stepObj()
            // document.getElementById('map').append(this.object2)
        }, 1000)
    }

    top = () => {
        this.y = parseInt(this.object2.style.top)
        this.object2.style.top = `${this.y - 100}px`
    }
    right = () => {
        this.x = parseInt(this.object2.style.left)
        this.object2.style.left = `${this.x + 100}px`
    }
    down = () => {
        this.y = parseInt(this.object2.style.top)
        this.object2.style.top = `${this.y + 100}px`
    }
    left = () => {
        this.x = parseInt(this.object2.style.left)
        this.object2.style.left = `${this.x - 100}px`
    }
    stepObj = () => {
        this.step = Math.floor(Math.random() * 4)
        console.log(this.step)
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
