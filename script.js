const container = document.getElementById('container');
let rows = 16;
let cols = 16;

const button = document.createElement('button');
button.textContent = 'Expand Grid';
button.id = 'expand';
container.appendChild(button)
button.addEventListener('click', () => {
    let userInput = prompt("Enter new grid dimensions");
    let newGrid = parseInt(userInput);

    if(!isNaN(newGrid) && newGrid > 0) {
        updateGrid(newGrid);
    } else {
        alert("Invalid input. Please enter a valid positive number.")
    }
});

function updateGrid(newGrid) {
    container.textContent = '';

    rows = newGrid;
    cols = newGrid;


    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100vw / ${newGrid} - 4px)`;
        square.style.height = `calc(100vh / ${newGrid} - 4px)`;
        container.appendChild(square)
    }
}

for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square)
}