
var redGang = [];
var numRedBoxes = 3;

var makeRed = function() {
//Create the number of red boxes
    for (var i=0; i<numRedBoxes; i++) {
        redGang.push( document.createElement("div") );
    }

//Gives each boxes an id and class
        redGang.forEach(function(box, i){
            box.id = i;
            box.classList.add('redBoxBorder');

//Appends the boxes into the DOM
            var whereRedBoxesLives = document.querySelector('#redBoxesMatters');
            whereRedBoxesLives.appendChild(box);
        });
    }


var press = function (e) {
//When you press 'a', this will happen..
     if (e.keyCode === 65) {
        var first = document.querySelector(".redBoxBorder");
        first.classList.replace('redBoxBorder', 'redBox');
        console.log('can')
     };
}

window.onload = function() {
    makeRed()
    document.addEventListener('keydown',press)
}

    // boxes.forEach(function(box, i){
    //   box.id = i + 1;
    //   box.classList.add('box')
    //   box.addEventListener('click', playerTurn);