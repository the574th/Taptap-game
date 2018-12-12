var makeBoxes = function(color, numOfBoxes) {
    numOfBoxes = parseInt(numOfBoxes);

//     Create invisible box a.k.a the extra wrong box
        color.array.push( document.createElement("div") );
        var wrongBox = color.array[0];
        wrongBox.id = color.boxid+'Wrong';

//      Create the number of boxes by adding div, id & class
//      i+1 is there to prevent changing of the invisible box
    for (var i=0; i<numOfBoxes; i++) {
        color.array.push( document.createElement("div") );
        color.array[i+1].id = color.boxid+i;
        color.array[i+1].classList.add(color.classBorder);
    };

//      Appends the boxes into the DOM under their specific color group div
    color.array.forEach(function(box) {
        var whereTheyAre = document.querySelector(color.containerId);
        whereTheyAre.appendChild(box);
    });
}


//      Change box from Empty Border to Filled Solid by replacing classes
//      This affect only one box, which is the bottom
var borderToFill = function (color) {
    var all = document.querySelectorAll("." + color.classBorder);
    var bottom = all[all.length-1];
    bottom.classList.replace(color.classBorder, color.classFill);
}

//      Change boxes from Filled Solid to Empty Boxes by replacing classes
//      This affect ALL boxes of one color, one column basically
var fillToBorderBoxes = function (color) {
    var all = document.querySelectorAll("." + color.classFill);
    all.forEach(function(box) {
        box.classList.replace(color.classFill, color.classBorder);
    });
        document.addEventListener('keydown',press);
        document.addEventListener('keydown',checkCorrectV2)
    }

//      Function to basically restart the 'pattern',
//      Change boxes from solid fill to empty border, numOfClick reset.
var doItAgainV2 = function (color) {

//      prevent user from pressing when mistake happened
        document.removeEventListener('keydown',press);
        document.removeEventListener('keydown',checkCorrectV2);

//      Evoke animation by toggling class first
    var wrongBox = document.getElementById(color.boxid+'Wrong');
    wrongBox.classList.toggle(color.classWrong);

//      After 1 second....
    var reset = function() {

//      Remove the animation
        wrongBox.classList.remove(color.classWrong);

//      Reset the num of clicks
        Object.keys(familyOfBoxes).forEach(function(key) {
        familyOfBoxes[key].numOfClicks = 0;
        fillToBorderBoxes(familyOfBoxes[key]);
        });
    }

    setTimeout(reset, 1500);
};


var yayCorrect = function () {
//      Add 5 points to player score, update the DOM
    gamePlay.score +=5;
    var playerScore = document.querySelector('#score');
    playerScore.innerText = gamePlay.score;

//      Update level
    if (gamePlay.score % 30 === 0) {
        gamePlay.level++;
    }

    var currentLevel = document.querySelector('#level');
    currentLevel.innerText = 'Level '+gamePlay.level;

//      Prevent player from pressing while animation happens
            document.removeEventListener('keydown',press);
            document.removeEventListener('keydown',checkCorrectV2)

//      For each colors...
    Object.keys(familyOfBoxes).forEach(function(key) {

//      Change class for animation
        var allFilledBoxes = document.querySelectorAll("." + familyOfBoxes[key].classFill);
        allFilledBoxes.forEach(function(box) {
            box.classList.replace(familyOfBoxes[key].classFill, familyOfBoxes[key].classAniHide);
        });
    });


//      Remove all the boxes div in HTML DOM.
        var colors = gamePlay.colorsInvolvedInPattern;
        var removeBoxes = function() {
            var nodeList = [];
            for (var i = 0; i < colors.length; i++ ) {
                nodeList.push(document.querySelectorAll("."+colors[i].classAniHide));
                var child = document.querySelector('#'+colors[i].boxid+'Wrong');
                child.remove();
            }

            for (var i = 0; i < nodeList.length; i++ ) {
                nodeList[i].forEach(function(key) {
                    key.parentNode.removeChild(key)
                })
            }

            Object.keys(familyOfBoxes).forEach(function(key) {
//      Reset numOfClicks and array, fresh start
                familyOfBoxes[key].numOfClicks = 0;
                familyOfBoxes[key].array = [];
            });

            gamePlay.colorsInvolvedInPattern = [];
            gamePlay.totalDiv = 0;

        }


        setTimeout(removeBoxes, 1000);
}


var checkCorrectV2 = function () {
//      First, find out what color is presence in the current pattern
    var isItTrue = [];
    var presenceColors = gamePlay.colorsInvolvedInPattern;
    for (var i = 0; i < presenceColors.length; i++) {
        if (presenceColors[i].numOfClicks === presenceColors[i].array.length-1) {
            isItTrue.push(true);
        } else if (isItTrue.push(false));
    }
    console.log(isItTrue)

    if ((isItTrue.includes(false) === false)) {
        setTimeout(function() {
            if (gamePlay.time > 0) {
                yayCorrect();
                setTimeout(givePattern, 1500);
            } else if (gamePlay.time === 0) {
                gamePlay.canPressButtonOrNot = 'no';
            }
        }, 100)
    }
}



//      Generate random patterns
var GeneratePatternV2 = function (numOfColors, numOfMaxBoxes, numOfMinBoxes) {

//      Allow player to press again after new pattern emerges
        document.addEventListener('keydown',press);
        document.addEventListener('keydown',checkCorrectV2)

//      Since i might add more 'colors' and variations into the game, create listofFamily[] will help to easily refer to them
    var listofFamily = [];
    Object.keys(familyOfBoxes).forEach(function(key) {
        listofFamily.push(familyOfBoxes[key]);
    });

    var sumOfRandomNumbers = 0;
    while (sumOfRandomNumbers === 0) {
        var randomNumbers = [];
        for (var i = 0; i < numOfColors; i++) {
            randomNumbers.push((Math.floor((Math.random() * numOfMaxBoxes) + numOfMinBoxes)));
        }
        for (var i = 0; i < randomNumbers.length; i++) {
               sumOfRandomNumbers += randomNumbers[i];
            }
        }
        console.log(randomNumbers)

    for (var i = 0; i < numOfColors; i++) {
        makeBoxes(listofFamily[i], randomNumbers[i])
    }

    for (var i = 0; i < numOfColors; i++) {
        gamePlay.colorsInvolvedInPattern.push(listofFamily[i]);
    }

}


var press = function (e) {
    if (gamePlay.time > 0) {

//      When you press 'a', this will happen..
         if ((e.keyCode === 65) && (gamePlay.colorsInvolvedInPattern.includes(red))) {
            red.numOfClicks++;
            if (red.numOfClicks < red.array.length) {
                borderToFill(red);
            } else {
            //When you press 'a' MORE than required amount....
            doItAgainV2(red)
            };
         }

//      When you press 's', this will happen..
         if ((e.keyCode === 83) && (gamePlay.colorsInvolvedInPattern.includes(yellow))) {
            yellow.numOfClicks++;
            if (yellow.numOfClicks < yellow.array.length) {
                borderToFill(yellow);
            } else {
            //When you press 's' MORE than required amount....
            doItAgainV2(yellow)
            }
        }

//      When you press 'd', this will happen..
         if ((e.keyCode === 68) && (gamePlay.colorsInvolvedInPattern.includes(green))) {
            green.numOfClicks++;
            if (green.numOfClicks < green.array.length) {
                borderToFill(green);
            } else {
            //When you press 'd' MORE than required amount....
            doItAgainV2(green)
            }
        }

//      After time is up, players can't press anymore...
    } else {
        gamePlay.canPressButtonOrNot = 'no';
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

var countdown = setInterval(function() {
    var timerDiv = document.getElementById('timer');
  if (gamePlay.time == 0) {
    timerDiv.innerText = gamePlay.time;
    clearTimeout(countdown);
  } else {
    gamePlay.time--;
    timerDiv.innerText = gamePlay.time;
  }
}, 1000);

var scoreBoard = function () {

//      Create the score div in javascript
    var playerScore = document.createElement('div');
    playerScore.setAttribute('id','score');
    playerScore.innerText = gamePlay.score;

    var currentLevel = document.createElement('div')
    currentLevel.setAttribute('id','level');
    currentLevel.innerText = 'Level '+ gamePlay.level;
    document.body.appendChild(playerScore)
    document.body.appendChild(currentLevel)
}

var givePattern = function() {
    if(gamePlay.time > 0) {
        if (gamePlay.level === 1) {
            GeneratePatternV2(2, 4, 0);
        } else if (gamePlay.level === 2) {
            GeneratePatternV2(3, 3, 0);
        }
    }
}

// var overallEventListener = function() {
//         if (gamePlay.canPressButtonOrNot === 'yes') {
            // document.addEventListener('keydown',press);
            // document.addEventListener('keydown',checkCorrectV2)
//         }
//         else if (gamePlay.canPressButtonOrNot === 'no') {
        // document.removeEventListener('keydown',press);
        // document.removeEventListener('keydown',checkCorrectV2);
//         }

// }

window.onload = function() {
    scoreBoard();
    createTimer();
    givePattern();
    // if (gamePlay.time > 0) {
    // overallEventListener();
    // }
}
