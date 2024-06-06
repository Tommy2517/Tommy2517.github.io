import {object2} from "../objects/objects.js";

class Spawner {
    constructor() {
    }
    btnSpawn = () => {
        const btn = document.createElement('button')
        btn.innerText = 'Spawn'
        btn.onclick = () => {
            document.getElementById('map').append(object2.object22())
            const obj = document.getElementById('object2')
            obj.style.top = '0px'
            obj.style.left = '0px'
            // object2.clearInter()
        }
        return btn
    }

}
export const spawner = new Spawner()