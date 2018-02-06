//Variables
var inPlayP1 = [];
var inPlayP2 = [];
var handP1 = [];
var handP2 = [];
var deckP1 = [];
var deckP2 = [];
var numInPlayP1 = inPlayP1.length;
var numInPlayP2 = inPlayP2.length;
var numInHandP1 = handP1.length;
var numInHandP2 = handP2.length;
var numTimesCanDraw = 0;
var $currentDeck = $('#currentNumDeck')
var $inactiveDeck = $('#inactiveNumDeck')
var randInt = function(n){
    return Math.floor(Math.random()*n);
}
//Cards
var cards = [
    {name: 'Ratchet', strength: 8, health: 18, stamina: 0, power: 'teamBoost', hero: true, pic:'Ratchet.png'},
    {name: 'Clank', strength: 0, health: 0, stamina: 0, power: 'sideKick', hero: false, pic:'Clank.png'},
    {name: 'Jak', strength: 9, health: 16, stamina: 0, power: 'rainOfFire', hero: true, pic:'Jak.png'},
    {name: 'Daxter', strength: 0, health: 0, stamina: 0, power: 'sideKick', hero: false, pic:'Daxter.png'}
]
var cardsLength = cards.length;
var game = {
    players: [{id: 'P1',name: 'Player One', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP1, deck: deckP1},
    {id: 'P2',name: 'Player Two', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP2, deck: deckP2}],
    currentPlayer: null,
    done: false,
    winner: false,
    init: function(){
        console.log('Successfully Initialized');
        game.currentPlayer = game.players[0];
        numTimesCanDraw ++;
    },
    switchPlayer: function() {
        if(game.currentPlayer === game.players[0]) {
            game.currentPlayer = game.players[1]
            // console.log(game.currentPlayer)
        }else {
            game.currentPlayer = game.players[0]
            // console.log(game.currentPlayer)
        }
        console.log(game.currentPlayer)
    },
}
game.init()
var currentPlayerId = game.currentPlayer.id
var deck = 'deck'+currentPlayerId
var cardsLeft = deck.length


//Special Abilitiess
var abilities = [
    teamBoost= function(){
        console.log('teamBoost')
    },
    rainOfFire = function(){
        console.log('rainOfFire')
    },
    sideKick = function(){
        console.log('sideKick')
    },
];
//Adding cards at random to deck
function createDeck(){
    for(i=0;i<20;i++){
        if(randInt(cardsLength) > cardsLength-2){
            //add rare or epic card
            var newCard = rareCards[randInt(rareCardsLength)];
            deckP1.push(newCard);
            $currentDeck.text(i+1)
        }else {
            var newCard = cards[randInt(cardsLength)];
            deckP1.push(newCard);
            $currentDeck.text(i+1)
        }
    }
    for(i=0;i<20;i++){
        if(randInt(cardsLength) > cardsLength-2){
            //add rare or epic card
            var newCard = rareCards[randInt(rareCardsLength)];
            deckP2.push(newCard);
            $inactiveDeck.text(i+1)
        }else {
            var newCard = cards[randInt(cardsLength)];
            deckP2.push(newCard);
            $inactiveDeck.text(i+1)
        }
    }
}
function drawCard(){
    var canDraw = (game.currentPlayer.cardsLeft > 0 && numTimesCanDraw > 0);
    if(canDraw === true){
        console.log('working')
        numTimesCanDraw--;
        ($currentDeck.text()--)
    }else{
        console.log('Still Working')
    }
}



//adding event listeners to active cards
for (i=0;i<numInPlayP1;i++){
console.log('ran loop')
}
//testing
// inPlayP1.push(cards[0])
// var image = '<img src="' + cards[0].pic + '" />'
// $('#currentSquadron').append(image)
// $('#inactiveSquadron').append(image)
createDeck();
