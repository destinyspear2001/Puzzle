const riddles = [
    {
        question: "What do you call two birds in love?",
        answer: "tweethearts"
    },
    {
        question: "What did the paper clip say to the magnet?",
        answer: "i find you very attractive"
    },
    {
        question: "What did one volcano say to the other?",
        answer: "i lava you"
    }
];

let currentRiddleIndex = 0;

function displayRiddle() {
    const riddleElement = document.getElementById('riddle');
    if (currentRiddleIndex < riddles.length) {
        riddleElement.innerText = riddles[currentRiddleIndex].question;
    } else {
        riddleElement.innerText = "Will you be my Valentine?";
        document.getElementById('answerInput').style.display = 'none';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.toLowerCase();
    if (userAnswer === riddles[currentRiddleIndex].answer) {
        currentRiddleIndex++;
        document.getElementById('result').innerText = "Correct! Next riddle...";
        document.getElementById('answerInput').value = '';
        displayRiddle();
    } else {
        document.getElementById('result').innerText = "Oops! Try again.";
    }
}

// Initialize the first riddle
displayRiddle();
