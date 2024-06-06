import {move} from "../other/move.js";

class Object2 {
    constructor() {
        this.countObj = 0
        this.object2 = this.createObject()
        this.coordinates = 0;
        this.interval = null
        this.step = 0
        this.distance = 10
        this.x = 0
        this.y = 0
    }
    clearInter = () => {
        clearInterval(this.interval)
    }

    createObject = () => {
        this.countObj ++
        const object = document.createElement('div')
        object.style.width = '140px'
        object.style.height = '150px'
        object.style.backgroundColor = 'white'
        object.id = `object2`
        object.style.position = 'absolute'
        object.style.transition = '.5s'
        object.style.left = '10px'
        object.style.top = '10px'
        // this.countObj.push(object.id)
        console.log(object.id)
            // this.countObj.length + ' - count obj');
        return object
    }
    object22 = (x,y) => {
        if (x&&y){
            this.object2.style.left = `${x}px`
            this.object2.style.top = `${y}px`
        }
// document.getElementById('map').append(this.object2)
        this.moveObj()
        console.log(this.object2.id)
        return this.object2
    }
    moveObj = () => {
        this.interval = setInterval(() => {
        this.stepObj()
            console.log(this.interval)
            // document.getElementById('map').append(this.object2)
        }, 100)
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
                move.moveObject(this.object2,this.distance,'w')
                // this.top()
                break
            case 1:
                move.moveObject(this.object2,this.distance,'d')
                // this.right()
                break
            case 2:
                move.moveObject(this.object2,this.distance,'s')
                // this.down()
                break
            case 3:
                move.moveObject(this.object2,this.distance,'a')
                // this.left()
                break
            default:
                break
        }
    }
}

export const object2 = new Object2()
