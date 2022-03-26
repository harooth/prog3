let LivingCreature = require("./LivingCreature");

module.exports = class Grass extends LivingCreature {
    constructor(x,y, index) {
        super(x,y,index);
    }

    bazmanal() {
        var empty = random(this.chooseCell(0))
        // var empty = super.chooseCell(2);
        // var newCell = empty[Math.floor(Math.random() * empty.length)]
        this.multiply++;
        if (empty && this.multiply > 2) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY, 1)
            grassArr.push(newGr)

        }
    }
}