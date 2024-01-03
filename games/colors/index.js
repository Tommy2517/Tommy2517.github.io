import { field } from '/games/colors/modules/main/field/field.js'
import {fieldStyle} from "/games/colors/modules/styles/styles.js";

const index = document.getElementById('index.js')
index.type = 'module'
console.log(index)

class Game {
    start = () => {
        // this.addModule('/colors/modules/main/menu/menu.js')
        console.log('Start game')
        field.fieldGenerate()
        this.stop()
        // console.log(menu.btn1);
        // menu.menuGenerate()
    }

    stop = () => {
        console.log('End game')
    }

    // addModule = (src) => {
    //     const script=document.createElement('script');
    //     script.type = 'module';
    //     script.src=src
    //     document.head.appendChild(script)
    // }
}

const game = new Game()

game.start()

