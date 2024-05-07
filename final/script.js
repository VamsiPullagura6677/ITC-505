document.addEventListener("DOMContentLoaded", function() {
    const gridSize = 5;
    let choicesArray = [];
    let gameArray = initializeGame();
    let gameWon = false;
    let moves = 0;
    let seconds = 0;
    let timer;

    function initializeGame() {
        const gameArray = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

        for (let i = 0; i < gridSize; i++) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);
            choicesArray.push({ row, col });
            toggleCell(gameArray, row, col);
            toggleCell(gameArray, row - 1, col);
            toggleCell(gameArray, row + 1, col);
            toggleCell(gameArray, row, col - 1);
            toggleCell(gameArray, row, col + 1);
        }

        return gameArray;
    }

    function toggleCell(array, row, col) {
        if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
            array[row][col] = 1 - array[row][col];
        }
    }

    function renderGame() {
        const board = document.getElementById("board");
        board.innerHTML = '';

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.toggle('is-off', gameArray[i][j] === 1);
                square.addEventListener('click', () => toggleSquareOnClick(i, j));
                board.appendChild(square);
            }
        }
    }

    function toggleSquareOnClick(row, col) {
        toggleCell(gameArray, row, col);
        toggleCell(gameArray, row - 1, col);
        toggleCell(gameArray, row + 1, col);
        toggleCell(gameArray, row, col - 1);
        toggleCell(gameArray, row, col + 1);

        moves++;
        document.getElementById('moveCount').textContent = moves;

        renderGame();

        if (checkWin()) {
            gameWon = true;
            clearInterval(timer);
            alert('You win!');
            renderGame();
        }
    }

    function checkWin() {
        return gameArray.every(row => row.every(cell => cell === 0));
    }

    function showSolution() {
        const solutionText = choicesArray.map(choice => `{ ${choice.row + 1}, ${choice.col + 1} }`).join(', ');
        alert(`Solution: ${solutionText}`);
    }

    renderGame();

    // Remove any existing "Show Solution" button
    const existingShowSolutionBtn = document.getElementById("showSolutionBtn");
    if (existingShowSolutionBtn) {
        existingShowSolutionBtn.parentNode.removeChild(existingShowSolutionBtn);
    }

    // Create and add the "Show Solution" button
    const showSolutionBtn = document.createElement("button");
    showSolutionBtn.textContent = "Show Solution";
    showSolutionBtn.id = "showSolutionBtn";
    showSolutionBtn.addEventListener("click", showSolution);
    document.body.appendChild(showSolutionBtn);

    // Start the timer
    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            document.getElementById('time').textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        }, 1000);
    }

    startTimer();
});
