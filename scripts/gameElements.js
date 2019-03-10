var restartGame = function() {
    document.removeEventListener('keydown',yesOrNo);

    //  Remove the result box
    var endResultLocation = document.querySelector('#resultText');
    var endResult = document.querySelector('#result');
    endResultLocation.remove();
    endResult.remove();

    // Remove all the child divs under #wrapper
    let masterDiv = document.querySelector('#wrapper');
    while(masterDiv.firstChild) {
        masterDiv.removeChild(masterDiv.firstChild);
    }

    // For each colours, rest the num of clicks and arrays
    Object.keys(familyOfBoxes).forEach(function(key) {
        familyOfBoxes[key].numOfClicks = 0;
        familyOfBoxes[key].array = [];
    });

    gamePlay.colorsInvolvedInPattern = [];
    gamePlay.totalDiv = 0;
    gamePlay.score = 0;
    gamePlay.level = 1;
    gamePlay.time = 5;

    // Change the timer back to 0
    var timerDiv = document.getElementById('timer')
    timerDiv.style.fontSize = "20vh";  // Change the timer font size to bigger unit: 8vh > 20vh
    timerDiv.innerText = gamePlay.time;

    // Change the score back to zero
    var removeScore = document.querySelector('#score')
    removeScore.innerText = gamePlay.score;

    // Change the level back to one
    var removeLevel = document.querySelector('#level')
    removeLevel.innerText = 'Level ' + gamePlay.level;

    // Change the background back to red
    var currentbackgroundClass = document.body.classList.value
    document.body.classList.replace(currentbackgroundClass, 'redBg')

    // Remove the result div
    var resultAbsolute = document.querySelector('.absoluteWrapper');
    resultAbsolute.remove();

    setTimeout(countdown, 100)
    setTimeout(givePattern, 100)

}



var results = function () {

    var endResult = document.createElement('div');
    endResult.setAttribute('id', 'result');

    var absoluteDiv = document.createElement('div');
    // absoluteDiv.setAttribute('id', 'resultAbsolute');
    absoluteDiv.classList.add('absoluteWrapper')
    // add style justify-content = flex-end
    absoluteDiv.setAttribute('style', 'justify-content: flex-end')
    console.log(absoluteDiv)


    var endResultText = document.createElement('div');
    endResultText.setAttribute('id', 'resultText');
    endResultText.innerText = `Try again? \n (Y)Yes (N)No`


    document.body.appendChild(absoluteDiv);
    absoluteDiv.appendChild(endResult)
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

    // Creates the timer div in javascript
    var timerDiv = document.createElement('div');
    timerDiv.setAttribute('id','timer');
    timerDiv.classList.toggle('timerSlide')
    timerDiv.innerText = gamePlay.time;

    // Appends the timer div into the DOM
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
            timerDiv.style.fontSize = "8vh";
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