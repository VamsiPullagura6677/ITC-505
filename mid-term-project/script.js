const story = [
    {
        text: "You wake up to find yourself lost in a dense jungle. What do you do?",
        choices: [
            { text: "Look for a way out", nextStage: 1 },
            { text: "Stay put and wait for help", nextStage: 2 }
        ],
        image: "jungle.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You start walking deeper into the jungle. Suddenly, you encounter a fork in the path. Which way do you go?",
        choices: [
            { text: "Take the left path", nextStage: 3 },
            { text: "Take the right path", nextStage: 4 }
        ],
        image: "fork_in_path.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You encounter a swift river blocking your path. What do you do?",
        choices: [
            { text: "Attempt to cross the river", nextStage: 5 },
            { text: "Follow the riverbank in search of a bridge", nextStage: 6 }
        ],
        image: "river.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You come across a rope bridge. Do you cross it?",
        choices: [
            { text: "Cross the bridge", nextStage: 7 },
            { text: "Look for an alternate route", nextStage: 8 }
        ],
        image: "rope_bridge.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You stumble upon a hidden cave entrance. Will you explore it?",
        choices: [
            { text: "Enter the cave", nextStage: 9 },
            { text: "Continue through the jungle", nextStage: 10 }
        ],
        image: "cave.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "As you delve deeper into the cave, you encounter a group of bats. What do you do?",
        choices: [
            { text: "Proceed cautiously", nextStage: 11 },
            { text: "Retreat from the cave", nextStage: 12 }
        ],
        image: "bats.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You find yourself surrounded by thick vines. How will you proceed?",
        choices: [
            { text: "Cut through the vines", nextStage: 13 },
            { text: "Find a way around them", nextStage: 14 }
        ],
        image: "vines.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You stumble upon a clearing with a small pond. What do you do?",
        choices: [
            { text: "Rest by the pond", nextStage: 15 },
            { text: "Continue exploring", nextStage: 16 }
        ],
        image: "pond.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You hear the distant roar of a wild animal. What is your reaction?",
        choices: [
            { text: "Hide and wait", nextStage: 17 },
            { text: "Investigate the source of the sound", nextStage: 18 }
        ],
        image: "roaring_animal.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    {
        text: "You find an ancient ruin hidden within the jungle. Will you explore it?",
        choices: [
            { text: "Enter the ruins", nextStage: 19 },
            { text: "Avoid the ruins and continue", nextStage: 20 }
        ],
        image: "ruins.jpg",
        backgroundColor: "#214f18" // Dark green
    },
    // Add more stages with background image and color settings...
    {
        text: "After many trials and challenges, you finally emerge from the jungle and find your way back to civilization. Congratulations, you've successfully completed your journey!",
        choices: [],
        image: "civilization.jpg",
        backgroundColor: "#3c3c3c" // Dark gray
    }
];

let currentStage = 0;

function startGame() {
    currentStage = 0;
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('image');

    storyElement.innerHTML = `<p>${stage.text}</p>`;
    choicesElement.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => selectChoice(choice.nextStage));
        choicesElement.appendChild(button);
    });

    const imagePath = stage.image;
    const backgroundColor = stage.backgroundColor;
    document.body.style.backgroundImage = `url(${imagePath})`;
    document.body.style.backgroundColor = backgroundColor;

    if (currentStage === story.length - 1) {
        endGame();
    }
}

function selectChoice(nextStage) {
    if (nextStage >= 0 && nextStage < story.length) {
        currentStage = nextStage;
        updatePage();
    } else {
        endGame();
    }
}

function endGame() {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('image');

    storyElement.innerHTML = "<p>Congratulations! You've successfully found your way out of the jungle.</p><p>Thank you for playing!</p>";
    choicesElement.innerHTML = '';
    imageElement.innerHTML = '';
}

startGame();
