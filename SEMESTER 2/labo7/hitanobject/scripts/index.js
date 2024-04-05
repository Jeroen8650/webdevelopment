let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    GAME_DURATION: 10, // Duur van het spel in seconden
    score: 0,
    timeoutId: 0,
    timeLeft: 10 // Aantal seconden over
};

function getRandomPosition() {
    let playField = document.getElementById('playField');
    let maxX = playField.clientWidth - global.IMAGE_SIZE;
    let maxY = playField.clientHeight - global.IMAGE_SIZE;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    return [randomX, randomY];
}

function createImage() {
    let img = document.createElement('img');
    let randomPos = getRandomPosition();
    img.src = global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX;
    img.style.left = randomPos[0] + 'px';
    img.style.top = randomPos[1] + 'px';
    img.style.width = global.IMAGE_SIZE + 'px';
    img.style.height = global.IMAGE_SIZE + 'px';
    img.addEventListener('click', function() {
        global.score++;
        document.getElementById('score').textContent = 'Score: ' + global.score;
        this.remove();
    });
    document.getElementById('playField').appendChild(img);
}

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    global.timeoutId = setInterval(createImage, global.MOVE_DELAY);

    // Start de timer
    let timerId = setInterval(function() {
        global.timeLeft--;
        document.getElementById('timer').textContent = 'Time left: ' + global.timeLeft + 's';

        if (global.timeLeft <= 0) {
            clearInterval(timerId); // Stop de timer
            clearInterval(global.timeoutId); // Stop het spel
            alert('Game over! Your score: ' + global.score);
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', startGame);
