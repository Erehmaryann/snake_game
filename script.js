let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
    console.log(currentTime);
}

window.requestAnimationFrame(main);