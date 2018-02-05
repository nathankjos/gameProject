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

var game = {
    players: [{name: 'Player One', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP1, deck: deckP1},
    {name: 'Player Two', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP2, deck: deckP2}],
    currentPlayer: null,
    done: false,
    winner: false,
    init: function(){
        console.log('Successfully Initialized');
        game.currentPlayer = game.players[0]
    },
    switchPlayer: function(){
        //switch players after round ends
        //switch hands and cards in squadron
        //switch health energy and poison status
    },
}

game.init()

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

//Cards
var cards = [
    {name: 'Ratchet', strength: 8, health: 18, stamina: 0, power: 'teamBoost', hero: true, pic:'Ratchet.png'},
    {name: 'Clank', strength: 0, health: 0, stamina: 0, power: 'sideKick', hero: false, pic:'Clank.png'},
    {name: 'Jak', strength: 9, health: 16, stamina: 0, power: 'rainOfFire', hero: true, pic:'Jak.png'},
    {name: 'Daxter', strength: 0, health: 0, stamina: 0, power: 'sideKick', hero: false, pic:'Daxter.png'}
]

//adding event listeners to active cards
for (i=0;i<numInPlayP1;i++){
console.log('ran loop')
}
//testing
// inPlayP1.push(cards[0])
// var image = '<img src="' + cards[0].pic + '" />'
// $('#currentSquadron').append(image)
// $('#inactiveSquadron').append(image)