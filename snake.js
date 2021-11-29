import { expandSnake } from './food.js';
import { getInputDirection } from './input.js';

// How many times snake moves per second
export const SNAKE_SPEED = 5;
// An array of x, y positions
const snakeBody = [
    { x: 11, y: 11 },
];
let newSegments = 0;

export function update() {
    const inputDirection = getInputDirection();
    // Move the snake
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount) {
    newSegments = amount;
}

export function onSnake(position) {
    return snakeBody.some((segment) => {
        return equalPositions(segment, position);
    });
}