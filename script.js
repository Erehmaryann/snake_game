import { SNAKE_SPEED } from './snake';

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    // If snake needs to move
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    // console.log(currentTime);
    // Game logic
    update();
    // Draws everything on the screen
    draw();
}

window.requestAnimationFrame(main);

function update() {

}

function draw() {

}