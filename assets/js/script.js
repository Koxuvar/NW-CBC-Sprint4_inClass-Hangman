let wordblank = document.querySelector(".word-blanks");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let timerElement = document.querySelector(".timer-count");
let startButton = document.querySelector(".start-button");

let choseWord = "";
let numBlanks = 0;
let winCounter = 0;
let loseCounter = 0;
let isWin = false;
let timer;
let timerCount;

let lettersInChosenWord = [];
let blanksLetters = [];

let words = [
    'array',
    'string',
    'object',
    'class',
    'boolean',
    'number'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function pickWord()
{
    return words[getRandomInt(words.length)];
}

function renderBlanks()
{
    wordblank.textContent = blanksLetters.join(" ");
}

function startTimer()
{

}

function runGame()
{
    startTimer();

    let chosenWord = pickWord();
    choseWord = chosenWord;

    lettersInChosenWord = chosenWord.split("");

    for (let i = 0; i < lettersInChosenWord.length; i++)
    {
        blanksLetters.push("_");
    }

    renderBlanks();

    document.addEventListener("keydown", e => {
        let key = e.key;

        for (let i = 0; i < lettersInChosenWord.length;i++)
        {
            if (key == lettersInChosenWord[i])
            {
                let index = lettersInChosenWord.indexOf(key);
                blanksLetters[index] = key;
                lettersInChosenWord[index] = "_";
                console.log("helloooo");
                renderBlanks();
            }
        }
    
        
    });



    /*
    * 
    * 
    * 
    * keydown listener for user input
    * 
    * 
    */ 
}


startButton.addEventListener("click", runGame());