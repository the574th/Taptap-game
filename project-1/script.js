var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        classAniHide: 'redBoxHide',
        classWrong: 'redBoxWrong',
        boxid: 'r',
        containerId: '#redBoxesMatters',
        numOfClicks: 0
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        classAniHide: 'yellowBoxHide',
        classWrong: 'yellowBoxWrong',
        boxid: 'y',
        containerId: '#yellowBoxesMatters',
        numOfClicks: 0
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        classAniHide: 'greenBoxHide',
        classWrong: 'greenBoxWrong',
        boxid: 'g',
        containerId: '#greenBoxesMatters',
        numOfClicks: 0
    }
};

var gamePlay = {
    score: 0,
    name: null,
    time: 30,
}


//      variables for colors, for easier reference
var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;
var green = familyOfBoxes.green;



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
    document.removeEventListener('keydown',checkCorrect);

//      Evoke animation be toggling class first
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
        document.addEventListener('keydown',checkCorrect)
    }

    setTimeout(reset, 1500);
};


var yayCorrect = function () {
//      Add 5 points to player score
    gamePlay.score +=5;

//      For each colors...
    Object.keys(familyOfBoxes).forEach(function(key) {

//      Reset numOfClicks and array, fresh start
        familyOfBoxes[key].numOfClicks = 0;
        familyOfBoxes[key].array = [];

//      Prevent player from pressing while animation happens
        document.removeEventListener('keydown',press);
        document.removeEventListener('keydown',checkCorrect);

//      Change class for animation
        var allFilledBoxes = document.querySelectorAll("." + familyOfBoxes[key].classFill);
        allFilledBoxes.forEach(function(box) {
            box.classList.replace(familyOfBoxes[key].classFill, familyOfBoxes[key].classAniHide);
        });


//      Remove all the boxes div in HTML DOM.
        var removeBoxes = function() {
            document.querySelectorAll("."+familyOfBoxes[key].classAniHide).forEach(e => e.parentNode.removeChild(e));
            var child = document.querySelector('#'+familyOfBoxes[key].boxid+'Wrong');
            child.remove();
        };

        setTimeout(removeBoxes, 1000)
    });
};


var checkCorrect = function () {
    if ((red.numOfClicks === red.array.length-1) && (yellow.numOfClicks === yellow.array.length-1) && (green.numOfClicks === green.array.length-1)){
        setTimeout(function() {
            if (gamePlay.time > 0) {
                yayCorrect();
                setTimeout(GeneratePattern, 1500);
            } else if (gamePlay.time === 0) {
                document.removeEventListener('keydown',press);
                document.removeEventListener('keydown',checkCorrect);
            }
        }, 100)
    }
}


//      Generate random patterns
var GeneratePattern = function () {

//      Allow player to press again after new pattern emerges
    document.addEventListener('keydown',press);
    document.addEventListener('keydown',checkCorrect)

    makeBoxes(red, (Math.random() * 5));
    makeBoxes(yellow, (Math.random() * 5));
    makeBoxes(green, (Math.random() * 5));

//      Prevent zero/no pattern from happening after above random function
//      remember there will always be one 'wrongBox' in every div
    while ((red.array.length === 1) && (yellow.array.length === 1) && (green.array.length === 1)) {
        makeBoxes(red, (Math.random() * 5));
        makeBoxes(yellow, (Math.random() * 5));
        makeBoxes(green, (Math.random() * 5));
    }
}


var press = function (e) {
    if (gamePlay.time > 0) {

//      When you press 'a', this will happen..
         if (e.keyCode === 65) {
            red.numOfClicks++;
            if (red.numOfClicks < red.array.length) {
                borderToFill(red);
            } else {
            //When you press 'a' MORE than required amount....
            doItAgainV2(red)
            };
         }

//      When you press 's', this will happen..
         if (e.keyCode === 83) {
            yellow.numOfClicks++;
            if (yellow.numOfClicks < yellow.array.length) {
                borderToFill(yellow);
            } else {
            //When you press 's' MORE than required amount....
            doItAgainV2(yellow)
            }
        }

//      When you press 'd', this will happen..
         if (e.keyCode === 68) {
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

window.onload = function() {
    createTimer();
    GeneratePattern();
    document.addEventListener('keydown',press);
    document.addEventListener('keydown',checkCorrect)
}
