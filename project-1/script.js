
// var redGang = [];
// var numRedBoxes = 3;

var familyOfBoxes = {
    red: {
        array: [],
        numBoxes: 3,
        classBorder: 'redBoxBorder',
        containerId: '#redBoxesMatters'
    },
    yellow: {
        array: [],
        numBoxes: 4,
        classBorder: 'yellowBoxBorder',
        containerId: '#yellowBoxesMatters'
    }
};

var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;

var makeBoxes = function(color) {
//Create the number of red boxes
    for (var i=0; i<color.numBoxes; i++) {
        color.array.push( document.createElement("div") );
    }

//Gives each boxes an id and class
        color.array.forEach(function(box, i){
            box.id = i;
            box.classList.add(color.classBorder);

//Appends the boxes into the DOM
            var whereTheyAre = document.querySelector(color.containerId);
            whereTheyAre.appendChild(box);
        });
    }


var press = function (e) {
//When you press 'a', this will happen..
     if (e.keyCode === 65) {
        var first = document.querySelector(".redBoxBorder");
        first.classList.replace('redBoxBorder', 'redBox');
        console.log('can')
     }
//When you press 's', this will happen..
     if (e.keyCode === 83) {
        var first = document.querySelector(".yellowBoxBorder");
        first.classList.replace('yellowBoxBorder', 'yellowBox');
        console.log('can')
     }
}

window.onload = function() {
    makeBoxes(yellow);
    makeBoxes(red);
    document.addEventListener('keydown',press)
}

    // boxes.forEach(function(box, i){
    //   box.id = i + 1;
    //   box.classList.add('box')
    //   box.addEventListener('click', playerTurn);