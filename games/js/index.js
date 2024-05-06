import {game} from "../modules/colors";

const snakeBtn = document.getElementById('snake')
const colorsBtn = document.getElementById('colors')
const rpgBtn = document.getElementById('rpg')

colorsBtn.onclick = () => {
    // const colors = document.createElement('script')
    // colors.type = 'module'
    // colors.src = 'modules/colors/index.js'
    // colors.id = 'tagColors'
    // document.body.append(colors)
    game.start()
}