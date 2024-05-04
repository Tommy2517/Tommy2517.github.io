import {mainMenu} from "../modules/colors/modules/main/menu/mainMenu.js";
import {} from "../modules/colors/index.js";

const snakeBtn = document.getElementById('snake')
const colorsBtn = document.getElementById('colors')
const rpgBtn = document.getElementById('rpg')

colorsBtn.onclick = () => {
    const colors = document.createElement('script')
    mainMenu.menuGenerate()
    colors.type = 'module'
    colors.src = 'modules/colors/index.js'
    document.body.append(colors)
}