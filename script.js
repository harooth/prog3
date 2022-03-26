var matrix = [];
var side = 18;
let socket = io()

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    

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

    io.on('connection', function (socket) { 

        socket.on("grass", function (data) {
            data.bazmanal();
        });

        socket.on("xotaker", function (data) {
            data.bazmanal()
            data.eat()
            data.move()
            data.die()
        });

        socket.on("gishatich", function (data) {
            data.bazmanal()
            data.eat()
            data.move()
            data.die()
        });

        socket.on("human", function (data) {
            data.bazmanal()
            data.eat()
            data.move()
            data.die()
        });


     });
}
