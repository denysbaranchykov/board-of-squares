const colors = ['rgba(255,0,0,0.78)', '#0f0', 'blue', 'orange', 'yellow', 'purple'];
const SQUARE_NUMBERS = 400;
const board = document.querySelector('#board');


for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', () => {
        console.log('mouseover');
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        console.log('mouseleave');
        removeColor(square);
    });
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 9px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    element.style.boxShadow = `0 0 5px #008`;
}

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
   return colors[index];
}

