var carousel = function() {

    // Create the absolute wrapper for the carousel
    var carouselAbsolute = document.createElement('div');
    carouselAbsolute.classList.add('absoluteWrapper')

    // Create Parent Div to contain carousel
    var carouselParent = document.createElement('div');
    carouselParent.setAttribute('id', 'carousel')

    // Create Image div
    var imageDiv = document.createElement('div');
    imageDiv.classList.add('imageDiv')

    // Append everything^ into document
    document.body.appendChild(carouselAbsolute);
    carouselAbsolute.appendChild(carouselParent);
    carouselParent.appendChild(imageDiv)

    // Toggle Slide animation for carousel div
    carouselParent.classList.toggle('carouselSlideUp')
}

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

        // Create the div
        var instructionDiv = document.createElement('div');
        instructionDiv.setAttribute('id', index);
        instructionDiv.classList.add('instructions')
        instructionDiv.setAttribute('style', 'order:'+(index+1))

        var instructionsTag = document.createElement('p');
        instructionsTag.innerText = fourInstructions[key].instructions;

        // Append everything^
        tutorialContainer.appendChild(instructionDiv);
        instructionDiv.appendChild(instructionsTag);
    })


    // Append everything^ into document
    document.body.appendChild(tutorialAbsolute);
    tutorialAbsolute.appendChild(tutorialContainer)
}

function instructionOne() {

}