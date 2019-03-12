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
    gamePlay.time = 45;

    // Change the timer back to 0
    var timerDiv = document.getElementById('timer')
    timerDiv.removeAttribute('style');
    // timerDiv.style.fontSize = "20vh";  // Change the timer font size to bigger unit: 8vh > 20vh
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
    var resultAbsolute = document.querySelector('#resultAbsolute');
    console.log(resultAbsolute)
    console.log('hello from restartGame')
    resultAbsolute.remove();

    setTimeout(countdown, 100)
    setTimeout(givePattern, 100)

}

var results = function () {

    var endResult = document.createElement('div');
    endResult.setAttribute('id', 'result');

    var absoluteDiv = document.createElement('div');
    absoluteDiv.setAttribute('id', 'resultAbsolute');
    absoluteDiv.classList.add('absoluteWrapper')
    // add style justify-content = flex-end
    absoluteDiv.setAttribute('style', 'justify-content: flex-end')

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