import {styleWriter} from "../../styles/styleWriter.js";
import {gameStyle, btnStyle, fieldStyle} from "../../styles/styles.js";
import {menu} from "../menu/menu.js";
import {field} from '../field/field.js'

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
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score++
            document.body.innerHTML = colors.score
            document.body.append(menu.menuGenerate())




            localStorage.setItem('colors', JSON.stringify(colors))
            console.log(colors);
        })

    }

    div = () => {
        return document.createElement('div')
    }
}

export const newGame = new Game()