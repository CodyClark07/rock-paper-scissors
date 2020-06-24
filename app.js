let playerChoices = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw66Lp4UqU6wLQrZwIxXJJaua7ZiPxmpIXQQ&usqp=CAU",
        name: "Rock"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb7BRYuaKxfw0sr4PlpZVHvj3K2qDHvKalpw&usqp=CAU",
        name: "Paper"
    },
    {
        img: "data:image/jpeg;base64,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 ",
        name: "Scissors"
    },
]


function play(playerChoice) {
    let playerChoiceElem = document.getElementById("player-choice");
    let playerImageElem = document.getElementById("player-choice-image");

    if (playerChoice == 'rock') {
        playerChoiceElem.innerHTML = playerChoices[0].name
        playerImageElem.src = playerChoices[0].img
    }
    else if (playerChoice == 'paper') {
        playerChoiceElem.innerHTML = playerChoices[1].name
        playerImageElem.src = playerChoices[1].img
    }
    else if (playerChoice == 'scissors') {
        playerChoiceElem.innerHTML = playerChoices[2].name
        playerImageElem.src = playerChoices[2].img
    }
}

function getStarted() {
    document.getElementById("game-play").remove();
    document.getElementById("game-screen").classList.remove("invisible");
}

