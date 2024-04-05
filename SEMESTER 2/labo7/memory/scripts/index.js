// Globale variabelen
const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
const KAARTEN_ARRAY = ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png'];

let flippedCards = [];
let matchedCards = [];

// Functie om de kaarten op het scherm te zetten
function createMemoryGrid() {
    const memoryGrid = document.querySelector('.memory-grid');

    for (let i = 0; i < AANTAL_VERTICAAL * AANTAL_HORIZONTAAL; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardFront = document.createElement('img');
        cardFront.src = 'achterkant.png';
        cardFront.classList.add('front');
        const cardBack = document.createElement('img');
        cardBack.src = KAARTEN_ARRAY[Math.floor(i / 2)];
        cardBack.classList.add('back');
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        memoryGrid.appendChild(card);

        card.addEventListener('click', function () {
            flipCard(card);
        });
    }
}

// Functie om een kaart om te draaien
function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

// Functie om te controleren of de omgedraaide kaarten overeenkomen
function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.querySelector('.back').src === secondCard.querySelector('.back').src) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        if (matchedCards.length === AANTAL_KAARTEN * 2) {
            endGame();
        }
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
        }, 1000);
    }
}

// Functie om het einde van het spel te tonen
function endGame() {
    alert('Gefeliciteerd! Je hebt alle kaarten gevonden!');
}

// Initialisatie
createMemoryGrid();
