let Timer = 60;
let score = 0;
let hitrn = Math.floor(Math.random() * 10); // Initialize hitrn once at the start.

function ScoreIncrease() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function gethit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
    let Clutter = "";
    for (let i = 0; i <= 307; i++) {
        let ran = Math.floor(Math.random() * 10);
        Clutter += `<div class="bubble" data-number="${ran}">${ran}</div>`; // Add a custom data attribute to store the bubble number
    }
    document.querySelector("#pbottom").innerHTML = Clutter;
}

function runTimer() {
    let timerInt = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#timerVal").textContent = Timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function restartGame() {
    Timer = 60;
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#timerVal").textContent = Timer;
    makeBubble();
    gethit();
    runTimer();
}

document.querySelector("#pbottom").addEventListener("click", function (details) {
    let clickedN = Number(details.target.dataset.number); // Access the custom data attribute
    if (clickedN === hitrn) {  // Check if clicked number matches current hitrn.
        ScoreIncrease();
        makeBubble();
        gethit();  // Generate a new hit number for next match.
    }
});

document.querySelector("#restartBtn").addEventListener("click", restartGame);

document.querySelector("#howToPlayBtn").addEventListener("click", function () {
    document.querySelector("#instructions").classList.toggle("hidden");
});

runTimer();
makeBubble();
gethit();
