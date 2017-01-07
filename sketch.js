var SCORE_EAT = 10;
var SCORE_TIME = 0.05;

var scl = 20;
var snake;
var food;
var score = 0;

function setup() {
    var canvas = createCanvas(800,400);
    canvas.parent("sketch-holder");
    canvas.class("canvas");
    frameRate(15);
    snake = new Snake();
    food = new Food();
    food.pickLocation();
}

function draw() {
    background(0);
    snake.edges();
    snake.update();
    snake.show();
    if(snake.eat(food.pos)) {
        food.pickLocation();
        score += SCORE_EAT;
    }
    food.show();
    score += SCORE_TIME;
    if(snake.death()) {
        score = 0;
    }
    document.getElementById("score").innerHTML = floor(score);
}

function keyPressed() {
    if(keyCode === UP_ARROW && snake.yspeed !== 1) {
        snake.dir(0, -1);
    } else if(keyCode === DOWN_ARROW && snake.yspeed !== -1) {
        snake.dir(0, 1);
    } else if(keyCode === LEFT_ARROW && snake.xspeed !== 1) {
        snake.dir(-1, 0);
    } else if(keyCode === RIGHT_ARROW && snake.xspeed !== -1) {
        snake.dir(1, 0);
    }
}
