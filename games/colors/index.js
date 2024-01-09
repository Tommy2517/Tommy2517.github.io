import { field } from '/games/colors/modules/main/field/field.js'
import {fieldStyle} from "/games/colors/modules/styles/styles.js";
import {styleWriter} from "/games/colors/modules/styles/styleWriter.js";
import {newGame} from "/games/colors/modules/main/game/game.js";
import {menu} from "./modules/main/menu/menu.js";


const index = document.getElementById('index.js')

class Game {
    start = () => {
        console.log('Load menu')
        // field.fieldGenerate()
        // newGame.startGame()
        menu.menuGenerate()
    }


    stop = () => {
        console.log('End game')
    }
}

const game = new Game()

game.start()

