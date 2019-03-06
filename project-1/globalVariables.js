var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        classAniHide: 'redBoxHide',
        classWrong: 'redBoxWrong',
        boxid: 'r',
        containerId: 'redBoxesMatters',
        numOfClicks: 0,
        keycode: 65
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        classAniHide: 'yellowBoxHide',
        classWrong: 'yellowBoxWrong',
        boxid: 'y',
        containerId: 'yellowBoxesMatters',
        numOfClicks: 0,
        keycode: 83
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        classAniHide: 'greenBoxHide',
        classWrong: 'greenBoxWrong',
        boxid: 'g',
        containerId: 'greenBoxesMatters',
        numOfClicks: 0,
        keycode: 68
    },
    blue: {
        array: [],
        classBorder: 'blueBoxBorder',
        classFill: 'blueBox',
        classAniHide: 'blueBoxHide',
        classWrong: 'blueBoxWrong',
        boxid: 'b',
        containerId: 'blueBoxesMatters',
        numOfClicks: 0,
        keycode: 70
    },
    maroon: {
        array: [],
        classBorder: 'maroonBoxBorder',
        classFill: 'maroonBox',
        classAniHide: 'maroonBoxHide',
        classWrong: 'maroonBoxWrong',
        boxid: 'm',
        containerId: 'maroonBoxesMatters',
        numOfClicks: 0,
        keycode: 71
    },
};

var gamePlay = {
    score: 0,
    name: null,
    time: 600,
    level: 1,
    createNewPattern: 'yes',
    colorsInvolvedInPattern: [],
    totalDiv: 0,
    canPressButtonOrNot: 'yes',
}

//      variables for colors, for easier reference
var red = familyOfBoxes.red;
var yellow = familyOfBoxes.yellow;
var green = familyOfBoxes.green;
var blue = familyOfBoxes.blue;
var maroon = familyOfBoxes.maroon;