class Object2 {
    constructor() {
        this.object2 = document.createElement('div')
        this.object2.style.width = '140px'
        this.object2.style.height = '150px'
        this.object2.style.backgroundColor = 'blue'
        this.object2.id = 'object2'
        this.object2.style.position = 'absolute'
        this.coordinates = 0;
    }
    object22 = () =>{
        // if (this.object2.style.top === '0px'){
        //     this.down()
        // }
        // else if (this.object2.style.top === '100px'){
        //     this.up()
        // }
            this.foo2()

            console.log(this.coordinates)
        return this.object2
    }
    foo2 = ()=> setInterval(()=>{
        if (this.coordinates < 10) {
            this.object2.style.top = `${this.coordinates * 100}px`
            this.coordinates++
            // this.object2.style.transition = '.1s'

            if (this.coordinates === 10) {
                // this.object2.style.transition = '0s'
                this.coordinates = 0
            }
        }
        },200)

    down = () => {
            this.object2.style.top = `${+100}px`
    }
    up = () => {
            for (let i = 10; i > 1; i--){
                this.object2.style.top = `${i*10}px`
            }
            this.down()
    }
}
export const object2 = new Object2()
