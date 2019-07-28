
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1")[0];
var resetBtn = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init() {
    //setting up mode buttons listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            console.log(this.textContent)
            if (this.textContent === "Easy") {
                numSquares = 3;
                reset();
            }
            else {
                numSquares = 6;
                reset();
            }
        })
    }
    //reset button event listener
    resetBtn.addEventListener("click", function () {
        reset();
    })

    //setting up square listerners
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (pickedColor === clickedColor) {
                message.textContent = "correct";
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
            }
            else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        })

    }
    reset();
}


function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    resetBtn.textContent = "New colors"
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return random;
}

function generateRandomColors(num) {
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors.push(generateRandom())
    }
    return colors;
}

function generateRandom() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
// easyBtn.addEventListener("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected")
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = colors[pickColor()];
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected")
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = colors[pickColor()];
//     colorDisplay.textContent = pickedColor;

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.display = "block";
//         squares[i].style.backgroundColor = colors[i];
//     }
// })
