import {newMap} from "./components/map/map.js";
import {spawner} from "./components/other/spawner.js";
import {} from "./components/player/stats.js";
import {playerModule} from "./components/player/playerModule.js";

const App = async () => {
    const game = document.createElement('div')
    game.id = 'gameId'
    game.style.position = 'absolute'
    await game.append(newMap.mapGenerate(), spawner.btnSpawn())

    document.body.append(game)
    return playerModule.init()
}
export {App}