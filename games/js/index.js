import {gameColors} from "../modules/colors/index.js";
import {App} from "../modules/roleplaygame";

const snakeBtn = document.getElementById('snake')
const colorsBtn = document.getElementById('colors')
const rpgBtn = document.getElementById('rpg')

colorsBtn.onclick = () => {
    // const colors = document.createElement('script')
    // colors.type = 'module'
    // colors.src = 'modules/colors/index.js'
    // colors.id = 'tagColors'
    // document.body.append(colors)
    gameColors.start()
}

rpgBtn.onclick = () => {
    console.log('111')
    App()
}