class Move {
    moveObject = (obj, step, e) => {
        switch(e) {
            case 'w':
                obj.style.top = (parseInt(obj.style.top)-step) +'px'
                break;
            case 's':
                obj.style.top = (parseInt(obj.style.top)+step) +'px'
                break;
            case 'a':
                obj.style.left = (parseInt(obj.style.left)-step) +'px'
                break;
            case 'd':
                obj.style.left = (parseInt(obj.style.left)+step) +'px'
                break;
            default:
                return;
        }
    }
}
export const move = new Move()