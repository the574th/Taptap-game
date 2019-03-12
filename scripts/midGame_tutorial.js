var tutorial = function() {

    // Create the absolute wrapper, 50% height body
    var tutorialAbsolute = document.createElement('div');
    tutorialAbsolute.classList.add('absoluteWrapper')

    // add style justify-content = flex-end
    tutorialAbsolute.setAttribute('style', 'justify-content: flex-end')

    // Create the main container for the 4 instructions
    var tutorialContainer = document.createElement('div');
    tutorialContainer.classList.add('halfY-container')

    // Create the 4 different container 4 instructions
    Object.keys(fourInstructions).forEach(function(key, index) {

        // Create the container div per instructions
        var instructionDiv = document.createElement('div');
        instructionDiv.setAttribute('id', index);
        instructionDiv.classList.add('instructions', 'instructionSlide')
        instructionDiv.setAttribute('style', 'order:'+(index+1))

        // Create the example div
        var exampleDiv = document.createElement('div');
        exampleDiv.classList.add('examples')

        // Create the description div
        var descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        var instructionsTag = document.createElement('p');
        instructionsTag.innerText = fourInstructions[key].instructions;

        // Append everything ^
        tutorialContainer.appendChild(instructionDiv);
        instructionDiv.appendChild(descriptionDiv);
        instructionDiv.appendChild(exampleDiv);
        descriptionDiv.appendChild(instructionsTag);
    })

    // Append everything^ into document
    document.body.appendChild(tutorialAbsolute);
    tutorialAbsolute.appendChild(tutorialContainer)

    // When 'instructionSlide' animation on line 21 has ended...
    var instructionDiv = document.querySelector('.instructions');
    instructionDiv.addEventListener("animationend", function handler(e) {
        instructionDiv.removeEventListener(e.type, handler)
        document.addEventListener('keydown', startGame)  // add the eventlistener for enter
    });
}


// Make program listen for keydown - press enter to start
var startGame = function(e) {
    if (e.keyCode == 13) {
        console.log('Starting Game')
        launchGame();
    }
}


var launchGame = function() {
    // Remove eventListener
    document.removeEventListener('keydown', startGame);

    // Replace animation for instructions div to disappear
    var instructionDiv = document.querySelectorAll('.instructions');
    Object.keys(instructionDiv).forEach(function(key) {
        instructionDiv[key].classList.replace('instructionSlide', 'instructionDisappear')
    })

    // When instruction div ^ has disappear...launchGame()
    instructionDiv[0].addEventListener("animationend", function handler(e) {
        instructionDiv[0].removeEventListener(e.type, handler)
        // launchGame();
        console.log('okay animation done')
        var absoluteWrapper = document.querySelector('.absoluteWrapper');
        absoluteWrapper.remove();
        console.log('wrapper removed')

        // Ready! Set! Go!
        var array = ['Ready!', 'Set!', 'Go!'];
        var timer = document.querySelector('#timer');
        toggleAnimation(timer, 'ani-BounceUpDown', 'no');
        // timer.classList.replace('timerSlide', 'ani-BounceUpDown');
    })
}