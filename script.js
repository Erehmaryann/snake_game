let lastRenderTime = 0;

// How many times snake moves per second
const SNAKE_SPEED = 2;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    // If snake needs to move
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    // console.log(currentTime);
}

window.requestAnimationFrame(main);