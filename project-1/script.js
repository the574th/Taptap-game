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
    })
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

//      allow user to press again
        document.addEventListener('keydown',press);
        document.addEventListener('keydown',checkCorrectV2)
    }

    setTimeout(reset, 1500);
};


var yayCorrect = function () {
//      Add 5 points to player score, update the DOM
    gamePlay.score +=5;
    var playerScore = document.querySelector('#score');
    playerScore.innerText = gamePlay.score;

//      Update level
    // var bg = document.querySelector('html');
    if (gamePlay.score % 30 === 0) {
        gamePlay.level++;
    }

    var currentLevel = document.querySelector('#level');
    currentLevel.innerText = 'Level '+gamePlay.level;


//      For each colors...
    Object.keys(familyOfBoxes).forEach(function(key) {

//      Reset numOfClicks and array, fresh start
        familyOfBoxes[key].numOfClicks = 0;
        familyOfBoxes[key].array = [];

//      Prevent player from pressing while animation happens
        document.removeEventListener('keydown',press);
        document.removeEventListener('keydown',checkCorrectV2);

//      Change class for animation
        var allFilledBoxes = document.querySelectorAll("." + familyOfBoxes[key].classFill);
        allFilledBoxes.forEach(function(box) {
            box.classList.replace(familyOfBoxes[key].classFill, familyOfBoxes[key].classAniHide);
        });
    });


//      Remove all the boxes div in HTML DOM.
        var colors = gamePlay.colorsInvolvedInPattern;
        var removeBoxes = function() {
            for (var i = 0; i < colors.length; i++ ) {
                document.querySelectorAll("."+colors[i].classAniHide).forEach(e => e.parentNode.removeChild(e));
            var child = document.querySelector('#'+colors[key].boxid+'Wrong');
            console.log(child)
        };

        setTimeout(removeBoxes, 1000);

// //      Remove all the boxes div in HTML DOM.
//         var removeBoxes = function() {
//             document.querySelectorAll("."+familyOfBoxes[key].classAniHide).forEach(e => e.parentNode.removeChild(e));
//             var child = document.querySelector('#'+familyOfBoxes[key].boxid+'Wrong');
//             console.log(child)
//         };

//         setTimeout(removeBoxes, 1000);
//     });
};
}


// var checkCorrect = function () {
//     if ((red.numOfClicks === red.array.length-1) && (yellow.numOfClicks === yellow.array.length-1) && (green.numOfClicks === green.array.length-1)){
//         setTimeout(function() {
//             if (gamePlay.time > 0) {
//                 yayCorrect();
//                 gamePlay.createNewPattern = 'yes';
//                 // setTimeout(GeneratePattern, 1500);
//             } else if (gamePlay.time === 0) {
//                 document.removeEventListener('keydown',press);
//                 document.removeEventListener('keydown',checkCorrect);
//             }
//         }, 100)
//     }
// }

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
                gamePlay.createNewPattern = 'yes';
                // setTimeout(GeneratePattern, 1500);
            } else if (gamePlay.time === 0) {
                document.removeEventListener('keydown',press);
                document.removeEventListener('keydown',checkCorrect);
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

//     if the number of boxes generated by random is zero, keep making
    while (gamePlay.totalDiv === 0) {

//      Make boxes according to the parameters of the GeneratePatternV2
        for (var i = 0; i < numOfColors; i++) {
            makeBoxes(listofFamily[i], (Math.floor((Math.random() * numOfMaxBoxes) + numOfMinBoxes)));
        }


//      Sometimes, math.random() above might generate zero resulting in no boxes showing on screen
//      To prevent that, we have to look at DOM and check if any boxes were created
//      Since boxes are created with class of '.classborder', we can use this to identify and search them
//      If no div with class of '.classborder' were created, means no boxes
        var listofBoxes = [];
        Object.keys(familyOfBoxes).forEach(function(key) {
            listofBoxes.push(document.querySelectorAll('.'+familyOfBoxes[key].classBorder));
        });

        var nodeObjectlength = [];
        Object.keys(listofBoxes).forEach(function(key) {
        nodeObjectlength.push(listofBoxes[key].length)
        });

//      Get the total number of boxes generated by
        for (var i = 0; i < nodeObjectlength.length; i++) {
           gamePlay.totalDiv += nodeObjectlength[i];
        }

        console.log(gamePlay.totalDiv);
    }

//      Let the game knows the colors involved in the pattern by Updating gamePlay.colorsInvolvedInPattern
//      Helpful in other functions
    for (var i = 0; i < numOfColors; i++) {
        gamePlay.colorsInvolvedInPattern.push(listofFamily[i]);
    }

//      Let the game knows that we don't need to create any pattern for now
    gamePlay.createNewPattern = 'no';
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
        document.removeEventListener('keydown',press);
        document.removeEventListener('keydown',checkCorrect);
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
//      Appends the timer div into the DOM
    // var main = document.querySelector('#bapak');
    // var first = main.children[0];
    // main.insertBefore(playerScore, first);
    document.body.appendChild(playerScore)
    document.body.appendChild(currentLevel)

}

window.onload = function() {
    scoreBoard();
    createTimer();
    if(gamePlay.time > 0) {
        if ((gamePlay.level === 1) && (gamePlay.createNewPattern === 'yes')) {
            GeneratePatternV2(2, 4, 0);
        } else if ((gamePlay.level === 2) && (gamePlay.createNewPattern === 'yes')) {
            GeneratePatternV2(3, 3, 0);
        }
    }
    document.addEventListener('keydown',press);
    document.addEventListener('keydown',checkCorrectV2)
}
