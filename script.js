// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 2, 1, 0],
//     [0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 2, 1, 1, 2, 3, 2, 3, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 1, 0],
//     [0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 1, 0],
//     [0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 2, 3, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 0],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 1, 3, 1, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 2, 0, 1, 1, 2, 1, 2, 0, 2, 2, 0, 3, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 2, 0, 1, 2, 1, 1, 2, 1, 0, 2, 0, 0, 0, 1, 2, 2, 3, 1, 1, 0],
//     [0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 2, 0, 1, 1, 1, 3, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 1, 3, 1, 0],
//     [0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 2, 0, 1, 2, 2, 1, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0, 0, 2, 0, 2, 4, 0, 0, 2, 0, 1, 2, 1, 2, 1, 2, 0, 2, 0, 0, 0, 1, 2, 2, 3, 1, 1, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0 ,1, 3, 1, 2, 0, 2, 2, 2, 1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2 ,0, 0, 0, 0, 2, 2, 1, 2, 1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 2, 1, 2, 3, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1 ,2, 2, 4, 1, 2, 0, 1, 2, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 2, 3, 2, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 0, 2, 0, 1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 3, 0, 2, 0, 0, 2, 0, 0, 0, 2, 1, 1, 2, 1, 0, 0, 0, 1, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 2, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 2, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 1, 2, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0 ,1, 0, 0, 0, 2, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0 ,0, 0, 0, 0, 2, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 2, 1, 0],
//     [0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 2, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2, 1, 2, 1, 0]
// ];



var matrix = [];
matrix = fillMatrix(50, 50);
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(0)

        }
    }
    return matrix
}

for (var a = 0; a < 450; a++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 1
}

for (var b = 0; b < 550; b++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 2
}

for (var c = 0; c < 50; c++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 3
}

for (var d = 0; d < 50; d++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 4
}


    var xy = Math.floor(Math.random() * 50)
    var yx = Math.floor(Math.random() * 50)
    matrix[y][x] = 5




var grassArr = [];
var xotakerArr = [];
var gishatichArr = []
var humanArr = []
var ojArr = []

var side = 18;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }

            else if (matrix[y][x] == 2) {
                var Xt = new Xotaker(x, y, 2)
                xotakerArr.push(Xt)
            }

            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3)
                gishatichArr.push(gishatich)
            }

            else if (matrix[y][x] == 4) {
                var human = new Human(x, y, 4)
                humanArr.push(human)
            }

            else if (matrix[y][x] == 5) {
                var oj = new Oj(x, y, 5)
                ojArr.push(oj)
            }
        }
    }

    console.log(grassArr)

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            else if (matrix[y][x] == 2) {
                fill("yellow")
            }

            else if (matrix[y][x] == 3) {
                fill("red")
            }

            else if (matrix[y][x] == 4) {
                fill("black")
            }

            else if (matrix[y][x] == 5) {
                fill("blue")
            }

            else if (matrix[y][x] == 6) {
                fill("purple")
            }

            rect(x * side, y * side, side, side);



        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal()
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }

    for (var i in humanArr) {
        humanArr[i].bazmanal()
        humanArr[i].move()
        humanArr[i].eat()
        humanArr[i].die()
    }

    for (var i in ojArr) {
        ojArr[i].eat()
        ojArr[i].move()

    }
}
