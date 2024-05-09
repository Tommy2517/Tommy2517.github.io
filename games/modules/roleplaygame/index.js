import {newMap} from "./components/map/map.js";
import {playerModule} from "./components/player/playerModule.js";

const App = () => {
    const game = document.createElement('div')
    game.style.position = 'absolute'
    game.append(newMap.mapGenerate(playerModule.createPlayer()))
    document.body.append(game)
}
export {App}