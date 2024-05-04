import {game} from "../modules/colors";
import {mainMenu} from "../modules/colors/modules/main/menu/mainMenu.js";

const snakeBtn = document.getElementById('snake')
const colorsBtn = document.getElementById('colors')
const rpgBtn = document.getElementById('rpg')

colorsBtn.onclick = () => {
    const colors = document.createElement('script')
    colors.type = 'module'
    colors.src = 'modules/colors/index.js'
    document.body.append(colors)
    // mainMenu.menuGenerate()
    game.start()
}