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

var levelUpAnimation = function() {
    // Create the div for the sliding level up
    var absoluteDiv = document.createElement('div');
    absoluteDiv.setAttribute('id', 'levelUp');
    absoluteDiv.classList.add('absoluteWrapper')

    var div = document.createElement('div');
    div.classList.add('ani-levelUp')
    div.innerText = 'Level Up!'

    document.body.appendChild(absoluteDiv);
    absoluteDiv.appendChild(div)

    absoluteDiv.addEventListener('animationend', function handler(e) {
        absoluteDiv.removeEventListener(e.type, handler);
        absoluteDiv.remove()
    })
}

var plusScoreAnimation = function() {
    var div = document.createElement('div');
    div.classList.add('ani-plusScore');
    div.classList.add('plusScore');
    div.innerText = '+5'

    // append Div
    var absoluteDiv = document.createElement('div');
    absoluteDiv.classList.add('absoluteWrapper');
    document.body.appendChild(absoluteDiv)

    var parentDiv = document.createElement('div');
    parentDiv.classList.add('relativeWrapper');
    absoluteDiv.appendChild(parentDiv);
    parentDiv.appendChild(div);

    // document.body.appendChild(div)
    // var parentDiv = document.querySelector('#score');
    // parentDiv.appendChild(div);

    document.body.addEventListener('animationend', function handler(e) {
        document.body.removeEventListener(e.type, handler);
        absoluteDiv.remove()
    })
}