const map = document.createElement('div')
map.style.width = '1000px'
map.style.height = '700px'
map.style.backgroundColor = 'darkgreen'
map.style.position = 'absolute'

class GameRpg {
    start = () => {
        document.body.append(map)
    }
}
export const gameRpg = new GameRpg()