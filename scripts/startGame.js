var startMenu = function() {

    // Create Absolute wrapper for start menu div to flex center
    var startMenuAbsoluteDiv = document.createElement('div')
    startMenuAbsoluteDiv.classList.add('absoluteWrapper')

    // Create Start Menu Div
    var startMenuDiv = document.createElement('div');
    startMenuDiv.setAttribute('id', 'startMenu');
    startMenuDiv.classList.add('ComeOut');

    // Put text inside Start Menu Div
    var span = document.createElement('span');
    span.innerText = 'TapTap';

    // Put h3 tag for 'Press Enter to start'
    var enterStart = document.createElement('h3')
    enterStart.classList.add('start')
    enterStart.innerText = 'Press Enter to Start'

    // Append eveyrthing ^ to body
    document.body.appendChild(startMenuAbsoluteDiv);
    startMenuAbsoluteDiv.appendChild(startMenuDiv);
    startMenuAbsoluteDiv.appendChild(enterStart)
    startMenuDiv.appendChild(span)

    // When 'ComeOut' animation on line 166 has ended...
    startMenuDiv.addEventListener("animationend", () => {
        document.addEventListener('keydown', startEnter)  // add the evenlistener for enter
    });
}


// Make program listen for keydown - press enter to start
var startEnter = function(e) {
    if (e.keyCode == 13) {
        console.log('hello');
        startGame();
    }
}


var startGame = function() {
    // Make Start Menu Div dissolve-in
    var startMenuDiv = document.querySelector('#startMenu');
    startMenuDiv.classList.replace('ComeOut', 'GoHide');

    // Make
    var enterStart = document.querySelector('.start')
    enterStart.classList.add('GoHide');

    // Start the game
    var startTheGame = function(){
        // remove the absolute wrapper for the start menu
        document.querySelector('.absoluteWrapper').remove();

        // Bring all the game elements to start game - scoreboard, timer, countdown, pattern
        scoreBoard();
        createTimer();
        // carousel();
        tutorial();
        // givePattern();
        // countdown();
        // infoTab();
        document.removeEventListener('keydown', startEnter);
    }

    // When Start Menu Div animation GoHide finishes..
    // This is not cross compatible
    startMenuDiv.addEventListener("animationend", startTheGame)
}

window.onload = function() {
    startMenu();
}