import {newMap} from "./components/map/map.js";

const App = () => {
    const game = document.createElement('div')
    game.id = 'gameId'
    game.style.position = 'absolute'
    game.append(newMap.mapGenerate())
    document.body.append(game)
}
export {App}