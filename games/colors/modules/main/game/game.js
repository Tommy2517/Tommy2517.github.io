import {styleWriter} from "../../styles/styleWriter.js";
import {gameStyle} from "../../styles/styles.js";

class Game {
    startGame = () => {
        const game = document.createElement('div')
        game.style

        styleWriter.write(
            [game],
            gameStyle
        )

        return game
    }
}

export const newGame = new Game()