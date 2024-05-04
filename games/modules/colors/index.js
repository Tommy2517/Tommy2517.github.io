import {} from "/games/modules/colors/modules/main/game/sections/sections.js";
import {} from "/games/modules/colors/modules/main/game/totalScore/totalScore.js";
import {} from "/games/modules/colors/modules/main/game/totalScore/totalInfo.js";
import {mainMenu} from "/games/modules/colors/modules/main/menu/mainMenu.js";
import {} from "/games/modules/colors/modules/main/game/btns/gameBtns.js"
import {} from "/games/modules/colors/modules/main/menu/btns/menuBtns.js"
import {colors} from "/games/modules/colors/modules/constants/const.js";
import {} from "/games/modules/colors/modules/styles/styleWriter.js";
import {field} from '/games/modules/colors/modules/main/field/field.js'
import {} from "/games/modules/colors/modules/main/game/game.js";
import {} from "/games/modules/colors/modules/styles/styles.js";
import {} from "/games/modules/colors/modules/tools/tools.js"

class Game {
    start = () => {
        console.log('Load menu')
        if (!localStorage.getItem('colors')) {
            localStorage.setItem('colors', JSON.stringify(colors))
        }

        mainMenu.menuGenerate()

        const mainDiv = document.getElementById('mainDiv')
        mainDiv.append(field)
    }

    stop = () => {
        console.log('End game')
    }
}

export const game = new Game()

// game.start()
