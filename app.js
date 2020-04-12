document.addEventListener('DOMContentLoaded', () => { 

    console.log('code is awesome'); 

const cardArray = [
    {
        name: 'bengals', 
        img: 'images/bengals.png'
    },
    {
        name: 'cowboys',
        img: 'images/dallas.png'
    }, {
        name: 'rams',
        img: 'images/rams.png'
    }, {
        name: 'sanfran',
        img: 'images/sanfran.png'
    }, {
        name: 'tenessee',
        img: 'images/tenessee.png'
    }, {
        name: 'jaguars',
        img: 'images/jaguars.png'
    }, 
    {
        name: 'bengals',
        img: 'images/bengals.png'
    },
    {
        name: 'cowboys',
        img: 'images/dallas.png'
    }, {
        name: 'rams',
        img: 'images/rams.png'
    }, {
        name: 'sanfran',
        img: 'images/sanfran.png'
    }, {
        name: 'tenessee',
        img: 'images/tenessee.png'
    }, {
        name: 'jaguars',
        img: 'images/jaguars.png'
    } 
];

cardArray.sort(() => 0.5 - Math.random());
const resultDisplay = document.querySelector('#result');

const grid = document.querySelector('.grid');
var cardsChosen =[]; 
var cardsChosenId= [];
var cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('class', "m-2")
        card.addEventListener('click', flipCard)
        grid.appendChild(card) // adds card to the grid
    }
}

// checks for matches 

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
            if (cardsChosen[0] === cardsChosen[1]) {
               
                cards[optionOneId].setAttribute('src','images/white.png');
                cards[optionTwoId].setAttribute('src', 'images/white.png');
                cardsWon.push(cardsChosen);
            }
            else {
                cards[optionOneId].setAttribute('src', 'images/blank.png');
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
               

            }
            
        cardsChosen = []; 
        cardsChosenId= [];
        resultDisplay.textContent = cardsWon.length; 

            if(cardsWon.length === cardArray.length/2) {
                resultDisplay.textContent = "You won the game!";
            }
    }

    // flips cards
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }


createBoard(); 






});