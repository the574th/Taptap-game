var backgroundColor = document.querySelector('.bodyClass');

var levelUp = function () {
    if (gamePlay.score % 30 === 0) {
        gamePlay.level++;
        gamePlay.time += 5;
        if (gamePlay.level === 2) {
            backgroundColor.classList.replace("bodyClass","redToYellowBG");
        }
        if (gamePlay.level === 3) {
            backgroundColor.classList.replace("redToYellowBG","yellowToGreenBG");
        }
        if (gamePlay.level === 4) {
            backgroundColor.classList.replace("yellowToGreenBG","greenToBlueBG");
        }
        if (gamePlay.level === 5) {
            backgroundColor.classList.replace("greenToBlueBG","blueToMaroonBG");
        }
    }
}

var givePattern = function() {
    if(gamePlay.time > 0) {
        if (gamePlay.level === 1) {
            GeneratePatternV2(1, 5, 0);
        } else if (gamePlay.level === 2) {
            GeneratePatternV2(2, 4, 0);
        } else if (gamePlay.level === 3) {
            GeneratePatternV2(3, 4, 0);
        } else if (gamePlay.level === 4) {
            GeneratePatternV2(4, 5, 0);
        } else if (gamePlay.level === 5) {
            GeneratePatternV2(5, 4, 1);
        } else if (gamePlay.level === 6) {
            GeneratePatternV2(1, 4, 2);
        } else if (gamePlay.level === 7) {
            GeneratePatternV2(5, 4, 1);
        } else if (gamePlay.level === 8) {
            GeneratePatternV2(5, 4, 2);
        }
    }
}
