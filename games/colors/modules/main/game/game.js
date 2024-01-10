import {styleWriter} from "../../styles/styleWriter.js";
import {gameStyle, btnStyle, fieldStyle} from "../../styles/styles.js";
import {menu} from "/games/colors/modules/main/menu/menu.js";

class Game {
    startGame = () => {
        const game = this.div()
        styleWriter.write([game], fieldStyle)
        document.body.append(game)

        const btnMenu = this.div()
        btnMenu.innerText='Menu'
        styleWriter.write([btnMenu], btnStyle)
        game.append(btnMenu)


        btnMenu.addEventListener('click',(eo) => {
            document.body.innerHTML = ''
            menu.menuGenerate()

            let score = localStorage.getItem('score')
            score++
            localStorage.setItem('score', `${score}`)
        })

    }

    div = () => {
        return document.createElement('div')
    }
}

export const newGame = new Game()