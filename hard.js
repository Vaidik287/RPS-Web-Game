let Score;

//If user chose rock
function hardChoiceGenerator1() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 0.5) {
        return 'Scissors';
    } else if (randomNumber > 0.5 && randomNumber <= 2) {
        return 'Paper';
    } else {
        return 'Rock';
    }
}

//If user chose paper
function hardChoiceGenerator2() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 0.5) {
        return 'Rock';
    } else if (randomNumber > 0.5 && randomNumber <= 2) {
        return 'Scissors';
    } else {
        return 'Paper';
    }
}

//If user chose scissors
function hardChoiceGenerator3() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 0.5) {
        return 'Paper';
    } else if (randomNumber > 0.5 && randomNumber <= 2) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}

Score = {
    win: 0,
    lost: 0,
    draw: 0,
};

function resultMaker(userChoice, computerChoice) {

    if (userChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            Score.win++;
            return 'You have Won.'
        }

        else if (computerChoice === 'Paper') {
            Score.lost++;
            return 'You have Lost.'
        }

        else (computerChoice === 'Rock'); {
            Score.draw++;
            return `It's a Draw.`;
        }

    }

    else if (userChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            Score.win++;
            return 'You have Won.'
        }

        if (computerChoice === 'Scissors') {
            Score.lost++;
            return 'You have Lost.'
        }

        if (computerChoice === 'Paper') {
            Score.draw++;
            return `It's a Draw.`;
        }
    }

    else {
        if (computerChoice === 'Paper') {
            Score.win++;
            return 'You have Won.'
        }

        else if (computerChoice === 'Rock') {
            Score.lost++;
            return 'You have Lost.'
        }

        else (computerChoice === 'Scissors'); {
            Score.draw++;
            return `It's a Draw.`;
        }
    }
}

function showResult(userMove, computerMove, result) {
    document.querySelector('#user-choice').innerText = `You have chosen ${userMove}.`;
    document.querySelector('#computer-choice').innerText = `Computer choice is ${computerMove}.`;
    document.querySelector('#result-give').innerText = result;
}