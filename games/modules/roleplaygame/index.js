import {newMap} from "./components/map/map.js";

const App = () => {
    const game = document.createElement('div')
    game.id = 'gameId'
    game.style.position = 'absolute'
    game.append(newMap.mapGenerate())
    // document.body.append(game)

    const qqq = document.createElement('div')
    qqq.style.width = '578px'
    qqq.style.height = '364px'
    qqq.style.background = 'red'
    qqq.style.position = 'absolute'
    qqq.style.top = '0px'
    qqq.style.left = '0px'
    document.body.append(game)
}
export {App}