import { field } from '/games/colors/modules/main/field/field.js'
import {fieldStyle} from "/games/colors/modules/styles/styles.js";
import {styleWriter} from "/games/colors/modules/styles/styleWriter.js";
import {newGame} from "/games/colors/modules/main/game/game.js";
import {tools} from "/games/colors/modules/tools/tools.js"
import {gameButton} from "/games/colors/modules/main/game/btns/gameBtns.js"
import {menuButton} from "/games/colors/modules/main/menu/btns/menuBtns.js"
import {sections} from "./modules/main/game/sections/sections.js";
import {mainMenu} from "./modules/main/menu/mainMenu.js";
import {colors} from "./modules/constants/const.js";

class Game {
    start = () => {
        console.log('Load menu')
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
        }

        mainMenu.menuGenerate()
    }


    stop = () => {
        console.log('End game')
    }
}

const game = new Game()

game.start()

