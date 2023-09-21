let randomNumber = Math.round(Math.random()*100 +1);

const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult');
const lowhighval = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){

    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess =parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //logic
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Enter a valid number');
    }
    else if(guess > 100){
        alert('Please enter a number between the range');
    }
    else{
        prevGuess.push(guess);
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //logic
    if(guess === randomNumber){
        displayMessage(` Welldone ! You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Tooo low :(`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is Tooo High :((`)

    }

}

function displayGuess(guess){
    //logic
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML =`${11 - numGuess}`;
}

function displayMessage(message){
    //logic
    lowhighval.innerHTML = `<h3>${message}<h3/>`;
}

function endGame(){

    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start new Game<h2/>`;
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){

     const newGameButton = document.querySelector('#newGame');
     newGameButton.addEventListener('click',function(e){
        randomNumber = Math.round(Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML =`${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        playGame = true;

     })
}



