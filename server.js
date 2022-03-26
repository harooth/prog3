var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);




let Grass = require("./Grass")
let Xotaker = require("./GrassEater")
let Gishatich = require("./Gishatich")
let Human = require("./Human")


grassArr = [];
var xotakerArr = [];
var gishatichArr = []
var humanArr = []
var ojArr = []

// for (var i in grassArr) {
//     grassArr[i].bazmanal();
// }

// for (var i in xotakerArr) {
//     xotakerArr[i].bazmanal()
//     xotakerArr[i].eat()
//     xotakerArr[i].move()
//     xotakerArr[i].die()
// }

// for (var i in gishatichArr) {
//     gishatichArr[i].bazmanal()
//     gishatichArr[i].move()
//     gishatichArr[i].eat()
//     gishatichArr[i].die()
// }

// for (var i in humanArr) {
//     humanArr[i].bazmanal()
//     humanArr[i].move()
//     humanArr[i].eat()
//     humanArr[i].die()
// }

// for (var i in ojArr) {
//     ojArr[i].eat()
//     ojArr[i].move()
// }
function generateMatrix(n, m) {

    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(0)
        }
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
    matrix[xy][yx] = 5
    return matrix
}

generateMatrix(50,50)

function createObject() {
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
}

io.on('connection', function (socket) {
    for (var i in grassArr) {
        socket.emit("grass", grassArr[i]);
    }

    for (var i in xotakerArr) {
        socket.emit("xotaker", xotakerArr[i]);
    }

    for (var i in gishatichArr) {
        socket.emit("gishatich", gishatichArr[i]);
    }

    for (var i in humanArr) {
        socket.emit("human", humanArr[i]);
    }


});
