var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        boxid: 'r',
        containerId: '#redBoxesMatters',
        numOfClicks: 0
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        boxid: 'y',
        containerId: '#yellowBoxesMatters',
        numOfClicks: 0
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        boxid: 'g',
        containerId: '#greenBoxesMatters',
        numOfClicks: 0
    }
};

var player = {
    score: 0,
    name: null,
}


//      variables for colors, for easier reference
var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;
var green = familyOfBoxes.green;



var makeBoxes = function(color, numOfBoxes) {
    numOfBoxes = parseInt(numOfBoxes);

//      Create the number of boxes by adding div, id & class
    for (var i=0; i<numOfBoxes; i++) {
        color.array.push( document.createElement("div") );
        color.array[i].id = color.boxid+i;
        color.array[i].classList.add(color.classBorder);
    };

//     Create invisible box a.k.a the extra wrong box
        color.array.push( document.createElement("div") );
        var wrongBox = color.array[color.array.length-1];
        wrongBox.id = color.boxid+'Wrong';

//      Appends the boxes into the DOM under their specific color group div
    color.array.forEach(function(box) {
        var whereTheyAre = document.querySelector(color.containerId);
        whereTheyAre.appendChild(box);
    });
}



//      Change box from empty border to Filled Solid by replacing classes
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
var doItAgainV2 = function () {
    Object.keys(familyOfBoxes).forEach(function(key) {
    familyOfBoxes[key].numOfClicks = 0;
    fillToBorderBoxes(familyOfBoxes[key]);
 });
};


var yayCompleted = function () {
    Object.keys(familyOfBoxes).forEach(function(key) {
//      Reset numOfClicks and array, fresh start
    familyOfBoxes[key].numOfClicks = 0;
    familyOfBoxes[key].array = [];
//      Remove all the boxes div in HTML DOM.
    document.querySelectorAll("."+familyOfBoxes[key].classFill).forEach(e => e.parentNode.removeChild(e));
    var child = document.querySelector('#'+familyOfBoxes[key].boxid+'Wrong')
    child.remove();
 });
};


var checkCorrect = function () {
    if ((red.numOfClicks === red.array.length-1) && (yellow.numOfClicks === yellow.array.length-1) && (green.numOfClicks === green.array.length-1)){
        setTimeout(function() {
            var next = confirm("yay");
            if (next) {
                yayCompleted();
            };
        }, 100)
    }
}

var GeneratePattern = function () {
    makeBoxes(red, (Math.random() * 5))
    makeBoxes(yellow, (Math.random() * 5))
    makeBoxes(green, (Math.random() * 5))
}


var press = function (e) {
//      When you press 'a', this will happen..
     if (e.keyCode === 65) {
        red.numOfClicks++;
        if (red.numOfClicks < red.array.length) {
            borderToFill(red);
        } else {
        //When you press 'a' MORE than required amount....
            alert("ooops!");
            doItAgainV2();
        };
     }
//      When you press 's', this will happen..
     if (e.keyCode === 83) {
        yellow.numOfClicks++;
        if (yellow.numOfClicks < yellow.array.length) {
            borderToFill(yellow);
        } else {
        //When you press 's' MORE than required amount....
            alert("ooops!");
            doItAgainV2();
        }
    }
//When you press 'd', this will happen..
     if (e.keyCode === 68) {
        green.numOfClicks++;
        if (green.numOfClicks < green.array.length) {
            borderToFill(green);
        } else {
        //When you press 'd' MORE than required amount....
            alert("ooops");
            doItAgainV2();
        }
    }
}


// var time = 10;

// // var timer = setInterval( function() {
// //     time--;
// //     console.log(time)
// //     if (time === 0){
// //         clearTimeout(timer)
// //     };
// // }, 1000)

// // var timer = function() {
// //     time--;
// //     console.log(time);
// // }

// var timerSet = setInterval(function() {
//     time--;
//     console.log(time);
//     if (time === 0) {
//         clearTimeout(timerSet);
//     };
// }, 1000)



window.onload = function() {
    GeneratePattern()
    document.addEventListener('keydown',press);
    document.addEventListener('keydown',checkCorrect)
}
