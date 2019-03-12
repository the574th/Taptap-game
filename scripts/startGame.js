window.onload = function() {
    startingPage();
}

function toggleAnimation(selector, animation, forward) {
    selector.classList.toggle(animation);
    if (forward === 'no') {
        selector.addEventListener("animationend", function handler(e) {
            selector.removeEventListener(e.type, handler);
            selector.classList.toggle(animation)
            console.log(e)
            console.log('toggleAnimation ended')
        })
    }
}

var startingPage = function() {

    // Create Absolute wrapper for start menu div to flex center
    var startingPageContainer = document.createElement('div')
    startingPageContainer.setAttribute('id', 'startingPage')
    startingPageContainer.classList.add('absoluteWrapper')

    // Create Starting Page Box
    var box = document.createElement('div');
    box.classList.add('box');
    toggleAnimation(box,'ComeOut','no')

    // Put text inside Start Menu Div
    var span = document.createElement('span');
    span.innerText = 'TapTap';

    // Put h3 tag for 'Press Enter to start'
    var enterStart = document.createElement('h3')
    enterStart.innerText = 'Press Enter to Start'

    // Append everything ^ to body
    document.body.appendChild(startingPageContainer);
    startingPageContainer.appendChild(box);
    startingPageContainer.appendChild(enterStart)
    box.appendChild(span)

    // // When 'ComeOut' animation on line 166 has ended...
    // box.addEventListener("animationend", () => {
    //     document.addEventListener('keydown', keydownEnter)  // add the event listener for enter
    // });

    // When 'ComeOut' animation on line 166 has ended...
    box.addEventListener("animationend", function handler(e) {
        box.removeEventListener(e.type, handler);
        document.addEventListener('keydown', keydownEnter)  // add the event listener for enter
    });
}


// Make program listen for keydown - press enter to start
var keydownEnter = function(e) {
    if (e.keyCode == 13) {
        showHowToPlay();
    }
}


var showHowToPlay = function() {
    // Remove the previous 'enter' event listener
    document.removeEventListener('keydown', keydownEnter);
    console.log('hello from showHowToPlay')

    // Toggle Animation for elements to disappear
    var x = document.getElementById('startingPage')
    var startMenuBox = x.querySelector('.box')
    toggleAnimation(startMenuBox, 'GoHide', 'no')
    var pressEnter = x.querySelector('h3');
    toggleAnimation(pressEnter, 'GoHide', 'no')

    // When Start Menu Div animation GoHide finishes..
    // This is not cross compatible
    startMenuBox.addEventListener("animationend", () => {

        // remove the absolute wrapper for the start menu
        document.querySelector('.absoluteWrapper').remove();

        // Bring all the UI elements to show How to play
        scoreBoard();
        createTimer();
        tutorial();
        })

    // // When Start Menu Div animation GoHide finishes..
    // // This is not cross compatible
    // startMenuBox.addEventListener("animationend", function handler(e) {
    //     startMenuBox.removeEventListener(e.type, handler);

    //     // remove the absolute wrapper for the start menu
    //     document.querySelector('.absoluteWrapper').remove();

    //     // Bring all the UI elements to show How to play
    //     scoreBoard();
    //     createTimer();
    //     tutorial();
    // })
}