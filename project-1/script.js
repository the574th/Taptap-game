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



//      Function to change box from empty border to filled solid by replacing classes
//      This affect only one box, which is the bottom
var borderToFill = function (color) {
    var all = document.querySelectorAll("." + color.classBorder);
    var bottom = all[all.length-1];
    bottom.classList.replace(color.classBorder, color.classFill);
}


//      Function to change boxes from filled solid to empty boxes by replacing classes
//      This affect all boxes of one color, one column basically
var fillToBorderBoxes = function (color) {
    var all = document.querySelectorAll("." + color.classFill);
    all.forEach(function(box) {
        box.classList.replace(color.classFill, color.classBorder);
    })
}


//      Function to basically restart the 'pattern', all boxes emptied and try again
// var doItAgain = function () {
//     red.numOfClicks = 0;
//     yellow.numOfClicks = 0;
//     green.numOfClicks = 0;
//     fillToBorderBoxes(red);
//     fillToBorderBoxes(yellow);
//     fillToBorderBoxes(green);
// }

var doItAgainV2 = function () {
    Object.keys(familyOfBoxes).forEach(function(key) {
    familyOfBoxes[key].numOfClicks = 0;
    fillToBorderBoxes(familyOfBoxes[key]);
 });
};

    // familyOfBoxes.forEach(function(color) {
    //     color.numOfClicks = 0;
    //     fillToBorderBoxes(color);
    // });



var yayNextPattern = function () {
    red.numOfClicks = 0;
    yellow.numOfClicks = 0;
    green.numOfClicks = 0;
    setTimeout(function() {
        alert("yay")
    }, 100)
    red.array = [];
    document.querySelectorAll("."+red.classFill).forEach(e => e.parentNode.removeChild(e));

}


var checkCorrect = function () {
    if ((red.numOfClicks === red.array.length-1) && (yellow.numOfClicks === yellow.array.length-1) && (green.numOfClicks === green.array.length-1)){
        console.log("yay");
        yayNextPattern();
    }
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


window.onload = function() {
    makeBoxes(yellow, 5);
    makeBoxes(red, 3);
    makeBoxes(green, 4);
    document.addEventListener('keydown',press);
    document.addEventListener('keydown',checkCorrect)
}
