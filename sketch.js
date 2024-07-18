let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let myTop, myBottom, myRight, myLeft;
let enemyTop, enemyBottom, enemyRight, enemyLeft;

function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(0);

    // Draw enemy square
    fill(0, 0, 255);
    rect(enemyXPos, enemyYPos, 50, 50);

    // Draw player square
    fill(255, 0, 0);
    rect(myXPos, myYPos, 50, 50);

    // Move player square with arrow keys
    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }

    // Define edges of player square
    myTop = myYPos - 25;
    myBottom = myYPos + 25;
    myRight = myXPos + 25;
    myLeft = myXPos - 25;

    // Define edges of enemy square
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;
    enemyRight = enemyXPos + 25;
    enemyLeft = enemyXPos - 25;

    // Check for collision
    if (myRight < enemyLeft || myLeft > enemyRight || myBottom < enemyTop || myTop > enemyBottom) {
        console.log('NOT COLLIDING');
    } else {
        fill(random(255), random(255), random(255));
        textSize(22);
        text('Im colliding OUCH!', 200, 50); // specify the position for the text
    }
}
