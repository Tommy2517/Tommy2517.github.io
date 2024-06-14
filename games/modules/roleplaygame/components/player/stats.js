class Stats {
    constructor() {
        this.level = 0
        this.exp = 0

        this.moveSpeed = 0
        this.attackSpeed = 0

        this.free = 0
        this.str = 0
        this.agi = 50
        this.ene = 0

        this.hp = 0
        this.mp = 0

        this.dmg = 0
        this.def = 0

        this.btn = document.createElement('button')
    }

    btnStats = () => {
        return this.btn
    }
}

export const stats = new Stats()

for (let i=0;i<5;i++){
    stats.free += 1
    const q = new Stats()
    document.body.append(q.btnStats())
}
