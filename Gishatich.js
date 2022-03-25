let LivingCrature = require("./LivingCreature")

module.exports = class Gishatich {
    constructor(x, y, index) {
        super(x,y,index)
    }

    bazmanal() {
        // var empty = random(this.chooseCell(2))
        var empty = super.chooseCell(2);
        var newCell = empty[Math.floor(Math.random() * empty.length)]
        
        this.multiply++;
        if (newCell && this.multiply > 5) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            var newGish = new Gishatich(newX, newY)
            gishatichArr.push(newGish)
        }
    }

    move(){
        // var empty = random(this.chooseCell(0)) || random(this.chooseCell(1))
        
        var empty = super.chooseCell(0);
        // var newCell = empty[Math.floor(Math.random() * empty.length)]

        this.energy--
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat(){
        // var gishatich = random(this.chooseCell(2))
        var gishatich = super.chooseCell(2);
        // var newCell = empty[Math.floor(Math.random() * empty.length)]
        
        if(gishatich){
            this.energy+=5
            var newX = gishatich[0]
            var newY = gishatich[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr){
                if(xotakerArr[i].x == newX && xotakerArr[i].y ==newY){
                   xotakerArr.splice(i,1) 
                }
            }
            this.y = newY
            this.x = newX
        }
    }

    die(){
        if(this.energy<0){
            matrix[this.y][this.x] = 0;
            for(var i in gishatichArr){
                if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){
                    gishatichArr.splice(i,1)
                 }
            }
        }
    }


}