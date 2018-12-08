var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        boxid: 'r',
        containerId: '#redBoxesMatters'
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        boxid: 'y',
        containerId: '#yellowBoxesMatters'
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        boxid: 'g',
        containerId: '#greenBoxesMatters'
    }
};


//variables for colors, easier to reference
var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;
var green = familyOfBoxes.green;


var makeBoxes = function(color, numOfBoxes) {
    numOfBoxes = parseInt(numOfBoxes);
//      Create the number of boxes by adding div
    for (var i=0; i<numOfBoxes; i++) {
        color.array.push( document.createElement("div") );
    }

//      Gives each boxes an id and class
        color.array.forEach(function(box, i){
            box.id = color.boxid+i;
            box.classList.add(color.classBorder);

//      Appends the boxes into the DOM
            var whereTheyAre = document.querySelector(color.containerId);
            whereTheyAre.appendChild(box);
        });
    }


var press = function (e) {
//When you press 'a', this will happen..
     if (e.keyCode === 65) {
        var all = document.querySelectorAll(".redBoxBorder");
        var last = all[all.length-1];
        last.classList.replace('redBoxBorder', 'redBox');
     }
//When you press 's', this will happen..
     if (e.keyCode === 83) {
        var all = document.querySelectorAll(".yellowBoxBorder");
        var last = all[all.length-1];
        last.classList.replace('yellowBoxBorder', 'yellowBox');
     }
//When you press 's', this will happen..
     if (e.keyCode === 68) {
        var all = document.querySelectorAll(".greenBoxBorder");
        var last = all[all.length-1];
        last.classList.replace('greenBoxBorder', 'greenBox');
     }
}


window.onload = function() {
    makeBoxes(yellow, 5);
    makeBoxes(red, 3);
    makeBoxes(green, 4)
    document.addEventListener('keydown',press)
}

    // boxes.forEach(function(box, i){
    //   box.id = i + 1;
    //   box.classList.add('box')
    //   box.addEventListener('click', playerTurn);