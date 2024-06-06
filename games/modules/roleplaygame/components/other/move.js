class Move {
    constructor() {
        this.positionX = 0
        this.positionY = 0
    }

    moveObject = (obj, step, e) => {
        console.log(e)
        switch(e) {
            case 'w':
                this.positionY = parseInt(obj.style.top);
                this.positionY -= step;
                break;
            case 's':
                this.positionY = parseInt(obj.style.top);
                this.positionY += step;
                break;
            case 'a':
                this.positionX = parseInt(obj.style.left);
                this.positionX -= step;
                break;
            case 'd':
                this.positionX = parseInt(obj.style.left);
                this.positionX += step;
                break;
            default:
                return;
        }
        console.log('+++')
        obj.style.left = this.positionX + 'px'
        obj.style.top = this.positionY + 'px'
    }

}

// const obj = {}
// const speed = 20
export const move = new Move()