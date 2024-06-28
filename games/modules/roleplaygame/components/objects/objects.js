import {move} from "../other/move.js";

class Object2 {
    constructor() {
        this.countObj = 0
        this.object2 = this.createObject()
        this.coordinates = 0;
        this.interval = null
        this.step = 0
        this.distance = 250
        this.x = 0
        this.y = 0
        this.mover = move.moveObject.bind(this)
    }
    clearInter = () => {
        clearInterval(this.interval)
    }

    createObject = () => {
        this.countObj ++
        const object = document.createElement('div')
        object.style.width = '40px'
        object.style.height = '50px'
        object.style.backgroundColor = 'white'
        object.id = `${this.countObj}`
        object.style.position = 'absolute'
        object.style.transition = '.5s'
        object.style.left = '10px'
        object.style.top = '10px'

        return object
    }

    //приводим объект в движение
    object22 = () => {
        this.moveObj()
        return this.object2
    }


    //постоянное движение объекта
    moveObj = () => {
        this.interval = setInterval(() => {
        this.stepObj()
        }, 1000)
    }
    //выбор стороны для шага
    stepObj = () => {
        this.step = Math.floor(Math.random() * 4)
        switch (this.step) {
            case 0:
                this.mover(this.object2,this.distance,'w')
                break
            case 1:
                this.mover(this.object2,this.distance,'d')
                break
            case 2:
                this.mover(this.object2,this.distance,'s')
                break
            case 3:
                this.mover(this.object2,this.distance,'a')
                break
            default:
                break
        }
    }
}

export const object2 = new Object2()
