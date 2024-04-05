// Globale variabelen
let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;
let isBusy = false; // Indicator om te voorkomen dat gebruiker tijdens wachttijd op kaarten klikt

// Array met de namen van de afbeeldingen
let afbeeldingen = ['kaart1.png', 'kaart2.png', 'kaart3.png', 'kaart4.png', 'kaart5.png', 'kaart6.png'];

// Shuffle functie om de volgorde van kaarten willekeurig te maken
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Functie om het spelbord te maken
function createGameBoard() {
    const gameContainer = document.getElementById('game-container');
    const shuffledImages = shuffle(afbeeldingen.concat(afbeeldingen)); // Elke kaart komt twee keer voor

    for (let i = 0; i < shuffledImages.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', i); // Houdt de index bij van de afbeeldingen array
        card.addEventListener('click', handleCardClick);

        const image = document.createElement('img');
        image.src = 'achterkant.png';
        card.appendChild(image);

        gameContainer.appendChild(card);
    }
}

// Functie om te reageren op kaartklikken
function handleCardClick(event) {
    if (isBusy) return; // Als het spel bezig is met wachten, klikken negeren

    const clickedCard = event.currentTarget;
    const index = clickedCard.getAttribute('data-index');
    const image = clickedCard.querySelector('img');

    // Toon de afbeelding als deze niet al omgedraaid is
    if (!clickedCard.classList.contains('flipped')) {
        image.style.display = 'block';
        clickedCard.classList.add('flipped');
    }
}

// Start het spel
createGameBoard();
