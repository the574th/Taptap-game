var restartGame = function() {
    document.removeEventListener('keydown',yesOrNo);

//      Remove the result box
    var endResultLocation = document.querySelector('#resultText');
    var endResult = document.querySelector('#result');
    endResultLocation.remove();
    endResult.remove();

    Object.keys(familyOfBoxes).forEach(function(key) {
        var myNode = document.querySelector(familyOfBoxes[key].containerId);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        familyOfBoxes[key].numOfClicks = 0;
        familyOfBoxes[key].array = [];
    });

    gamePlay.colorsInvolvedInPattern = [];
    gamePlay.totalDiv = 0;
    gamePlay.score = 0;
    gamePlay.level = 1;
    gamePlay.time = 60;

    var timerDiv = document.getElementById('timer')
    timerDiv.style.fontSize = "8em";
    timerDiv.innerText = gamePlay.time;

    var removeScore = document.querySelector('#score')
    removeScore.innerText = gamePlay.score;

    var removeLevel = document.querySelector('#level')
    removeLevel.innerText = 'Level ' + gamePlay.level;

    // var backgroundColor = document.querySelector('.bodyClass');
    // backgroundColor.classList.toggle("bodyClass","redToYellowBG")

    setTimeout(countdown, 100)
    setTimeout(givePattern, 100)

}

var results = function () {

    var endResult = document.createElement('div');
    endResult.setAttribute('id', 'result');


    var endResultText = document.createElement('div');
    endResultText.setAttribute('id', 'resultText');
    endResultText.innerText = `Try again? \n (Y)Yes (N)No`


    var endResultLocation = document.querySelector('#endResult');
    document.body.appendChild(endResult);
    endResult.appendChild(endResultText);



    document.addEventListener('keydown',yesOrNo);
}

var yesOrNo = function (e) {
     if (e.keyCode === 89) {
        restartGame();
    }

     if (e.keyCode === 78) {
        party()
    }
}



var createTimer = function () {

//      Creates the timer div in javascript
    var timerDiv = document.createElement('div');
    timerDiv.setAttribute('id','timer');
    timerDiv.innerText = gamePlay.time;

//      Appends the timer div into the DOM
    var main = document.querySelector('#bapak');
    var first = main.children[0];
    main.insertBefore(timerDiv, first);
};


var countdown = function() {
    var startCounting = setInterval(function() {
        var timerDiv = document.getElementById('timer');
            gamePlay.time--;
            timerDiv.innerText = gamePlay.time;

        if (gamePlay.time === 0) {
            clearInterval(startCounting);
            results();
            timerDiv.style.fontSize = "5em";
            timerDiv.innerText = 'Time Out!'
        }

    }, 1000);
}

var scoreBoard = function () {

//      Create the score div in javascript
    var playerScore = document.createElement('div');
    playerScore.setAttribute('id','score');
    playerScore.innerText = gamePlay.score;

    var currentLevel = document.createElement('div')
    currentLevel.setAttribute('id','level');
    currentLevel.innerText = 'Level '+ gamePlay.level;
    document.body.appendChild(playerScore);
    document.body.appendChild(currentLevel);
}