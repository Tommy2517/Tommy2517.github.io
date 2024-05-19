import {playerModule} from "../player/playerModule.js";
import {object2} from "../objects/objects.js";

const map = document.createElement('div')
map.style.width = '1000px'
map.style.height = '700px'
map.style.backgroundColor = 'darkgreen'
map.style.position = 'relative'
map.style.zIndex = '0'
map.id = 'map'



class Map {
    mapGenerate = () => {
        map.append(playerModule.player, object2.object22())

        return map
    }
}
export const newMap = new Map()