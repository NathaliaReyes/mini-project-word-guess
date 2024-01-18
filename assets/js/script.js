var wins = 0;
var losses = 0;
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var startButton = document.getElementById("btn-start");
var timer;
var timeLeft = 10;

function startGame() {
    if (arrayWords.length > 0) {
        clearInterval(timer);
        timeLeft = 10;

        var index = Math.floor(Math.random()*arrayWords.length);
        aleat = arrayWords[index];
        arrayWords.splice(index, 1);
        underscoreArray = new Array(aleat.length).fill('_');
        document.getElementById('main').innerHTML = underscoreArray.join(' ');

        timer = setInterval(function() {
            timeLeft--;
            var timeElement = document.querySelector('.time');
            if (timeElement) {
                timeElement.innerHTML = timeLeft;
            }

            if (timeLeft <= 0 || !underscoreArray.includes('_')) {
                clearInterval(timer);
                if (!underscoreArray.includes('_')) {
                    wins++;
                    winsEl.innerHTML = wins;
                } else {
                    losses++;
                    lossesEl.innerHTML = losses;
                }
                startGame(); // Automatically start a new round
            }
        }, 1000);
    } else {
        document.getElementById('main').innerHTML = "GAME OVER";
    }
}

var arrayWords = ["algorithm", "programming", "database", "ai", "networks", "programming", "code", "system", "cryptography", "compiler", "computer", "cybersecurity", "data", "software", "interface", "cloud"];
var aleat = arrayWords[Math.floor(Math.random()*arrayWords.length)];
console.log(aleat);

var underscoreArray = new Array(aleat.length).fill('_');



function keyupHandler(e) {
    var inputLetter = e.key.toLowerCase();

    for (var i = 0; i < aleat.length; i++) {
        if (aleat[i] === inputLetter) {
            underscoreArray[i] = inputLetter;
        }
    }

    document.getElementById('main').innerHTML = underscoreArray.join(' ');

    if (!underscoreArray.includes('_')) {
        wins++;
        winsEl.innerHTML = wins;
    }
}

window.addEventListener('keyup', keyupHandler);

startButton.addEventListener('click', function() {
    startButton.removeEventListener('click', arguments.callee); // Remove the event listener
    startGame(); // Start the game
});

var btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", function() {
    wins = 0;
    losses = 0;
    winsEl.innerHTML = wins;
    lossesEl.innerHTML = losses;
});