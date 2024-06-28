import {gameColors} from "../modules/colors";
import {App} from "../modules/roleplaygame";
import {playerModule} from "../modules/roleplaygame/components/player/playerModule.js";

const snakeBtn = document.getElementById('snake')
const colorsBtn = document.getElementById('colors')
const rpgBtn = document.getElementById('rpg')

colorsBtn.onclick = () => {
    gameColors.start()
}

rpgBtn.onclick = () => {
    App()

}