import {} from "/games/colors/modules/main/game/sections/sections.js";
import {mainMenu} from "/games/colors/modules/main/menu/mainMenu.js";
import {} from "/games/colors/modules/main/game/btns/gameBtns.js"
import {} from "/games/colors/modules/main/menu/btns/menuBtns.js"
import {colors} from "/games/colors/modules/constants/const.js";
import {} from "/games/colors/modules/styles/styleWriter.js";
import {} from '/games/colors/modules/main/field/field.js'
import {} from "/games/colors/modules/main/game/game.js";
import {} from "/games/colors/modules/styles/styles.js";
import {} from "/games/colors/modules/tools/tools.js"

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