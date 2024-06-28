import {object2} from "../objects/objects.js";

class Spawner {
    constructor() {
    }

    btnSpawn = () => {
        const btn = document.createElement('button')
        btn.innerText = 'Spawn'
        btn.onclick = () => {
            for (let i = 0; i < 5; i++) {
                document.getElementById('map').append(object2.object22(i))
                const obj = document.getElementById(object2.countObj)
                obj.style.top = '330px'
                obj.style.left = '330px'
                object2.clearInter()
            }
        }
        return btn
    }

}

export const spawner = new Spawner()