class Xotaker extends LivingCreature {
    super(x,y,index);

    getNewDirection(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewDirection()
        super.chooseCell(character);
    }

    bazmanal() {
        var empty = random(this.chooseCell(0))
        this.multiply++;
        if (empty && this.multiply > 6) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2;
            var newXt = new Xotaker(newX, newY)
            xotakerArr.push(newXt)

        }
    }


    move(){
        var empty = random(this.chooseCell(0))
        this.energy--
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }


    eat(){
        var gr = random(this.chooseCell(1))
        if(gr){
            this.energy++
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            for(var i in grassArr){
                if(grassArr[i].x == newX && grassArr[i].y ==newY){
                   grassArr.splice(i,1) 
                }
            }
            this.y = newY
            this.x = newX
        }
    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y ==this.y){
                    xotakerArr.splice(i,1) 
                 }
            }
        }
    }
}