// How many times snake moves per second
export const SNAKE_SPEED = 1;
// An array of x, y positions
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
];

export function update() {

}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}