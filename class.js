class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }

    bazmanal() {
        var empty = random(this.chooseCell(0))
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



class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 6;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
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



class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.energy = 7;

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }

    bazmanal() {
        var empty = random(this.chooseCell(2))
        this.multiply++;
        if (empty && this.multiply > 5) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            var newGish = new Gishatich(newX, newY)
            gishatichArr.push(newGish)
            
        }
    }

    move(){
        var empty = random(this.chooseCell(0)) || random(this.chooseCell(1))
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
        var gishatich = random(this.chooseCell(2))
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



class Human {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 1;
        this.energy = 9;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y    ],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x    , this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y    ],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x    , this.y - 2],
            [this.x - 1, this.y - 2],
            // [this.x - 3, this.y - 3],
            // [this.x - 3, this.y - 2],
            // [this.x - 3, this.y - 1],
            // [this.x - 3, this.y    ],
            // [this.x - 3, this.y + 1],
            // [this.x - 3, this.y + 2],
            // [this.x - 3, this.y + 3],
            // [this.x - 2, this.y + 3],
            // [this.x - 1, this.y + 3],
            // [this.x    , this.y + 3],
            // [this.x + 1, this.y + 3],
            // [this.x + 2, this.y + 3],
            // [this.x + 3, this.y + 3],
            // [this.x + 3, this.y + 2],
            // [this.x + 3, this.y + 1],
            // [this.x + 3, this.y    ],
            // [this.x + 3, this.y - 1],
            // [this.x + 3, this.y - 2],
            // [this.x + 3, this.y - 3],
            // [this.x + 2, this.y - 3],
            // [this.x + 1, this.y - 3],
            // [this.x    , this.y - 3],
            // [this.x - 1, this.y - 3],
            // [this.x -2 , this.y - 3],
        ];
    }

    getNewDirection(){
       this.directions = [
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y    ],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x    , this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y    ],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x    , this.y - 2],
            [this.x - 1, this.y - 2],
            // [this.x - 3, this.y - 3],
            // [this.x - 3, this.y - 2],
            // [this.x - 3, this.y - 1],
            // [this.x - 3, this.y    ],
            // [this.x - 3, this.y + 1],
            // [this.x - 3, this.y + 2],
            // [this.x - 3, this.y + 3],
            // [this.x - 2, this.y + 3],
            // [this.x - 1, this.y + 3],
            // [this.x    , this.y + 3],
            // [this.x + 1, this.y + 3],
            // [this.x + 2, this.y + 3],
            // [this.x + 3, this.y + 3],
            // [this.x + 3, this.y + 2],
            // [this.x + 3, this.y + 1],
            // [this.x + 3, this.y    ],
            // [this.x + 3, this.y - 1],
            // [this.x + 3, this.y - 2],
            // [this.x + 3, this.y - 3],
            // [this.x + 2, this.y - 3],
            // [this.x + 1, this.y - 3],
            // [this.x    , this.y - 3],
            // [this.x - 1, this.y - 3],
            // [this.x -2 , this.y - 3],
        ];
    }

    chooseCell(character) {
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }

    bazmanal() {
        var empty = random(this.chooseCell(0))
        this.multiply++;
        if (empty && this.multiply > 15) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            var newHuman = new Human(newX, newY)
            humanArr.push(newHuman)
        }
    }

    move(){
        var empty = random(this.chooseCell(0)) || random(this.chooseCell(1))
        this.energy-=2
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat(){
        var human = random(this.chooseCell(2)) || random(this.chooseCell(3))
        if(human){
            this.energy+=6
            var newX = human[0]
            var newY = human[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
     
            for(var i in gishatichArr){
                        if(gishatichArr[i].x == newX && gishatichArr[i].y ==newY){
                        gishatichArr.splice(i,1) 
                    }
            }
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
        if(this.energy<=0){
            matrix[this.y][this.x] = 0;
            for(var i in humanArr){
                if(humanArr[i].x == this.x && humanArr[i].y == this.y){
                    humanArr.splice(i,1)
                 }
            }
        }
    }

}


class Oj {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        

        this.directions = [
            [this.x + 1, this.y    ],
            [this.x    , this.y + 1],
            [this.x - 1, this.y    ],
            [this.x    , this.y - 1]
        ];
    }

    getNewDirection(){
       this.directions = [
            [this.x + 1, this.y],
            [this.x    , this.y + 1],
            [this.x - 1, this.y    ],
            [this.x    , this.y - 1],
        ];
    }

    chooseCell(character) {
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    

    move(){

        var empty =  random(this.chooseCell(0)) || random(this.chooseCell(1)) || random(this.chooseCell(2)) || random(this.chooseCell(3)) || random(this.chooseCell(4))
        
        if(empty){
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 6;
            this.x = newX;
            this.y = newY;
            var poch = this.chooseCell(6)
            if(poch.length >= 3){
                console.log("merav")
                for (var y = 0; y < matrix.length; y++) {
                    for (var x = 0; x < matrix[y].length; x++) {
                
                        if (matrix[y][x] == 6) {

                            matrix[y][x]=0
                            
                            
                            for(var i in ojArr){
                                ojArr.splice(i,1)
                            }

                        }
            
                        
                    }
                }
                matrix[this.y][this.x]=0
            }

            
        }
    }
        eat(){
            for(var i in grassArr){
                if(grassArr[i].x == this.x && grassArr[i].y == this.y){
                    grassArr.splice(i,1)
                 }
            }

            for(var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
                    xotakerArr.splice(i,1)
                 }
            }

            for(var i in gishatichArr){
                if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){
                    gishatichArr.splice(i,1)
                 }
            }

            for(var i in humanArr){
                if(humanArr[i].x == this.x && humanArr[i].y == this.y){
                    humanArr.splice(i,1)
                 }
            }
        }
    }
