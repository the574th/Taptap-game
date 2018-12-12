var familyOfBoxes = {
    red: {
        array: [],
        classBorder: 'redBoxBorder',
        classFill: 'redBox',
        classAniHide: 'redBoxHide',
        classWrong: 'redBoxWrong',
        boxid: 'r',
        containerId: '#redBoxesMatters',
        numOfClicks: 0
    },
    yellow: {
        array: [],
        classBorder: 'yellowBoxBorder',
        classFill: 'yellowBox',
        classAniHide: 'yellowBoxHide',
        classWrong: 'yellowBoxWrong',
        boxid: 'y',
        containerId: '#yellowBoxesMatters',
        numOfClicks: 0
    },
    green: {
        array: [],
        classBorder: 'greenBoxBorder',
        classFill: 'greenBox',
        classAniHide: 'greenBoxHide',
        classWrong: 'greenBoxWrong',
        boxid: 'g',
        containerId: '#greenBoxesMatters',
        numOfClicks: 0
    }
};

var gamePlay = {
    score: 0,
    name: null,
    time: 30,
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