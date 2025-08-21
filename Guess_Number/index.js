const submit = document.querySelector('.submit')
const newGame = document.querySelector('.new')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.guess-data')

let guessHeading = document.createElement('h3')
guessSlot.appendChild(guessHeading);

let guessText = document.createElement('p')
guessSlot.appendChild(guessText)

const max=100
const min=0
let randomNumber = parseInt(Math.random()*(max-min+1)+min)

let input = document.querySelector("#guess-desc")
let guesses = []
let count=10

newGame.disabled = true;
newGame.style.backgroundColor = "gray";

newGame.addEventListener('click',(e)=>{
    e.preventDefault()
    count=10
      guesses = [];
      randomNumber = parseInt(Math.random() * (max - min + 1) + min);
      guessSlot.innerText = "";
      remaining.innerText = `You have ${count} guesses remaining.`;

      submit.disabled = false;
      submit.style.backgroundColor = ""; 

      newGame.disabled = true;
      newGame.style.backgroundColor = "gray";

})

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let val = parseInt(input.value);
    if(!isNaN(val) && val<=100 && val>=0)
    {
            if(count>0)
            {
                if(val===randomNumber)
                {
                    guessHeading.innerText = `You got it in ${10-count+1} guesses! The number was ${randomNumber}`;
                    guesses.push(val);
                    guessText.innerText = `Your guesses: ${guesses}`;
                    count=0

                    // disable submit
                    submit.disabled = true;
                    submit.style.backgroundColor = "gray";

                    // enable newGame
                    newGame.disabled = false;
                    newGame.style.backgroundColor = "";
                }
                else if(val>randomNumber)
                {
                    count--
                    remaining.innerText = `You have ${count} guesses remaining.`;
                    guessHeading.innerText=`${val} is too high!`
                    guesses.push(val);
                    guessText.innerText=`Your guesses: ${guesses}`

                }
                else{
                    count--
                    remaining.innerText = `You have ${count} guesses remaining.`;
                    guessHeading.innerText = `${val} is too low!`;
                    guesses.push(val);
                    guessText.innerText = `Your guesses: ${guesses}`;
                }
                input.value=""
            }
            else
            {
              guessHeading.innerText = `Game Over! The number was ${randomNumber}`;
              // guesses.push(val);
              guessSlot.innerText = `Your guesses: ${guesses}`;

              // disable submit
              submit.disabled = true;
              submit.style.backgroundColor = "gray";

              // enable newGame
              newGame.disabled = false;
              newGame.style.backgroundColor = "";
            }
            
        }
    else{   
            alert("Enter a Valid Number between 0 and 100")
        }
})

