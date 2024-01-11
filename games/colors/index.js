import { field } from '/games/colors/modules/main/field/field.js'
import {fieldStyle} from "/games/colors/modules/styles/styles.js";
import {styleWriter} from "/games/colors/modules/styles/styleWriter.js";
import {newGame} from "/games/colors/modules/main/game/game.js";
import {menu} from "./modules/main/menu/menu.js";
import {colors} from "./modules/constants/const.js";

class Game {
    start = () => {
        console.log('Load menu')
        menu.menuGenerate()
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
        }
    }


    stop = () => {
        console.log('End game')
    }
}

const game = new Game()

game.start()

