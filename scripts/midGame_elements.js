var createTimer = function () {

    // Creates the timer div in javascript
    var timerDiv = document.createElement('div');
    timerDiv.setAttribute('id','timer');

    // Appends the timer div into the DOM
    document.body.appendChild(timerDiv)

    // Toggle Slide-in Animation when Game starts
    toggleAnimation(timerDiv, 'timerSlide', 'no');
};

var countdown = function() {
    var startCounting = setInterval(function() {
        var timerDiv = document.getElementById('timer');
            gamePlay.time--;
            timerDiv.innerText = gamePlay.time;

        if (gamePlay.time === 0) {
            clearInterval(startCounting);
            results();
            timerDiv.setAttribute('style','font-size: 10vh; top: 9%')
            timerDiv.innerText = 'Time Out!'
        }

    }, 1000);
}


var scoreBoard = function() {

    //  Create the score div in javascript
    var playerScore = document.createElement('div');
    playerScore.setAttribute('id','score');
    playerScore.classList.toggle('scoreBoardslide');
    playerScore.innerText = gamePlay.score;

    var currentLevel = document.createElement('div')
    currentLevel.setAttribute('id','level');
    currentLevel.classList.toggle('scoreSlide');
    currentLevel.innerText = 'Level '+ gamePlay.level;
    document.body.appendChild(playerScore);
    document.body.appendChild(currentLevel);
}



function infoTab() {

    // Create the Information Div
    let infoTab = document.createElement('div');
    infoTab.setAttribute('id', 'information');

    // Append Information Div
    document.body.appendChild(infoTab)
}