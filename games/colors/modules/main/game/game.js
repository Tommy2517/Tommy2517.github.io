import {styleWriter} from "../../styles/styleWriter.js";
import {gameStyle, btnStyle, fieldStyle} from "../../styles/styles.js";
import {menu} from "/games/colors/modules/main/menu/menu.js";

class Game {
    startGame = () => {
        const game = this.div()
        styleWriter.write([game], fieldStyle)
        document.body.append(game)

        const btnMenu = this.div()
        styleWriter.write([btnMenu], btnStyle)
        game.append(btnMenu)


        btnMenu.addEventListener('click',(eo) => {
            document.body.innerHTML = ''
            menu.menuGenerate()
        })

    }

    div = () => {
        return document.createElement('div')
    }
}

export const newGame = new Game()