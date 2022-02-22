const Keyboard = window.SimpleKeyboard.default;
const chars = document.getElementsByClassName('inputs');
const lettersBox = document.getElementById('answersRow');
const stationName = document.getElementById('stationName');
const tryCount = document.getElementById('tryCount');
const sharingArea = document.getElementById('stuffGoesHere');

const sampleAnswer = "ATL";
const correctAnswer = answers[Math.floor((new Date().getTime() - new Date("02/21/2022").getTime()) / (1000 * 3600 * 24))];

const totalTries = 5;

let dateLocal = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

let answerString = '';
let unusable = [];
let numOfTries = 0;
let solved = false;
let scoreShareTitle = `Amtrakle ${dateLocal}\n`;
let scoreShareResults = '';

document.getElementById('dateThingy').innerText = dateLocal;

const updateChars = (() => {
    for (let i = 0; i < chars.length; i++) {
        chars[i].innerText = answerString[i] ? answerString[i] : '_';
    }

    stationName.innerText = stations[answerString] ? stations[answerString] : 'Not a valid Amtrak Station'
    
});

const processAnswer = (() => {
    console.log('starting check')
    if (stations[answerString]) {
        let newCharsElement = document.createElement('div');
        newCharsElement.classList.add("letterRow");

        numOfTries += 1;
        tryCount.innerText = `Tries: ${numOfTries}/${totalTries}`
        
        for (let i = 0; i < 3; i++) {
            let tempElement = document.createElement('p');
            tempElement.innerText = answerString[i];
            tempElement.classList.add("letter");
            console.log("Correct Answer: " + correctAnswer)

            let resultTemp = '⬜';
            
            if (correctAnswer.includes(answerString[i])) {
                tempElement.style['background-color'] = '#edcd00';
                tempElement.style['color'] = '#353535';
                resultTemp = '🟨';
            } else {
                disableKey(answerString[i]);
            }

            console.log(answerString)
            if (correctAnswer[i] == answerString[i]) {
                tempElement.style['color'] = 'var(--fg-primary)';
                tempElement.style['background-color'] = '#0c9110';
                resultTemp = '🟩';
            }

            if (correctAnswer == answerString || numOfTries >= totalTries) {
                chars[0].remove();
            }
            
            newCharsElement.append(tempElement);
            scoreShareResults += resultTemp;
        }

        if (correctAnswer == answerString) {
            solved = true;
            let scoreShareFinal = `${scoreShareTitle}${numOfTries}/${totalTries}\n${scoreShareResults}`;

            let scoreShareTextArea = document.createElement('div'); //textarea
            scoreShareTextArea.innerText = scoreShareFinal; //value
            scoreShareTextArea.classList.add("textarea");
            sharingArea.append(scoreShareTextArea)
            sharingArea.append(document.createElement('p').innerText = "(Click to Copy)")
            
            scoreShareTextArea.onclick = function() {
                document.execCommand("copy");
            }
            
            scoreShareTextArea.addEventListener("copy", function(event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", scoreShareTextArea.innerText);
                    console.log(event.clipboardData.getData("text"))
                }
            });
            
            console.log(scoreShareFinal)
        } else {
            answerString = '';
            updateChars();
            scoreShareResults += '\n';
        }

        if (numOfTries >= totalTries) {
            console.log('test')
            let scoreShareTextArea = document.createElement('p');
            scoreShareTextArea.innerHTML = "GAME OVER!<br>Better luck next time :)"; //value
            sharingArea.append(scoreShareTextArea)
            solved = true; //gg
        }
        
        lettersBox.append(newCharsElement);
        window.scrollTo(0,document.body.scrollHeight);   
    }
});

const processKey = ((key) => {    
    let keyProcessed = key.replace('Key', '').replace(/[^0-9a-z]/gi, '');

    if (solved) { return; }
    
    if (unusable.includes(keyProcessed)) {
        console.log('poop')
        keyProcessed = '';
    }

    switch (keyProcessed) {
        case 'Backspace':
            answerString = answerString.slice(0, -1);
            break;
        case 'Enter':
            processAnswer();
            break;
        default:
            if (answerString.length < 3 && keyProcessed.length == 1) {
                answerString += keyProcessed;
            }
            break;
    }

    updateChars();
});

const processKeyDown = ((key) => {
    processKey(key.code.replace('{', '').replace('}', ''));
})

const disableKey = ((keyName) => {
    let key = document.querySelectorAll(`[data-skbtn="${keyName}"]`)[0];
    key.style['background-color'] = 'var(--bg-secondary)';
    key.style['color'] = 'var(--bg-secondary)';
    unusable.push(keyName);
})

const gameKeyboard = new Keyboard({
    onKeyPress: button => processKey(button),
    layout: {
        'default': [
            '1 2 3 4 5 6 7 8 9 0 {Backspace}',
            'Q W E R T Y U I O P',
            'A S D F G H J K L {Enter}',
            'Z X C V B N M , . /'
        ]
    },
    display: {
        '{Enter}': 'submit',
        '{Backspace}': 'backspace'
    },
    theme: 'keyboard-theme hg-theme-default'
});

document.addEventListener('keydown', processKeyDown);

updateChars();

let collapsible = document.getElementsByClassName("collapsible")[0];
let content = collapsible.nextElementSibling;

collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    
    if (content.style.display === "block") {
        content.style.display = "none";
        collapsible.style['border-bottom-left-radius'] = '8px';
        collapsible.style['border-bottom-right-radius'] = '8px';
    } else {
        content.style.display = "block";
        collapsible.style['border-bottom-left-radius'] = '0px';
        collapsible.style['border-bottom-right-radius'] = '0px';
    }
});

let stationsListThingy = Object.keys(stations);
for (let i = 0; i < stationsListThingy.length; i++) {
    let newP = document.createElement('p');
    newP.innerHTML = `[${stationsListThingy[i]}] ${stations[stationsListThingy[i]]}`;
    content.append(newP)
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}