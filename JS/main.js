//Variables and Game
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
    var currentDeckCardsLeft;
    var inactiveDeckCardsLeft;
    var $inactiveHealth = $('#inactiveHealth')
    var $currentHandEle = $('#currentHand');
    var $inactiveHandEle = $('#inactiveHand');
    var $currentDeckEle = $('#currentNumDeck')
    var $inactiveDeckEle = $('#inactiveNumDeck')
    var inactiveDeckCardsLeft = $inactiveDeckEle.text();
    var limboHand = [];
    var limboDeck = [];
    var limboSquadron = [];
    var randInt = function(n){
        return Math.floor(Math.random()*n);
    }
    var cards = [
        {name: 'Ratchet', strength: 8, health: 18, stamina: 0, power: 'teamBoost', pic:'Ratchet.png', type: 'hero'},
        {name: 'Clank', strength: 0, health: 0, stamina: 0, power: 'sideKick', pic:'Clank.png',type: 'sideKick'},
        {name: 'Jak', strength: 9, health: 16, stamina: 0, power: 'rainOfFire', pic:'Jak.png', type: 'hero'},
        {name: 'Daxter', strength: 0, health: 0, stamina: 0, power: 'sideKick', pic:'Daxter.png',type: 'sideKick'}
    ]
    var cardsLength = cards.length;
    var game = {
        players: [{id: 'P1',name: 'Player One', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP1, deck: deckP1},
        {id: 'P2',name: 'Player Two', health: 100, energy: 0, poisoned: false, stunned: false, hand: handP2, deck: deckP2}],
        currentPlayer: null,
        inactivePlayer: null,
        currentHand: null,
        inactiveHand: null,
        currentNumDeck: null,
        inactiveNumDeck: null,
        done: false,
        winner: false,
        firstTurn: null,
        createDeck: function(){
            for(i=0;i<20;i++){
                // if(randInt(cardsLength) > cardsLength-2){
                //     //add rare or epic card
                //     var newCard = rareCards[randInt(rareCardsLength)];
                //     deckP1.push(newCard);
                //     $currentDeckEle.text(i+1)
                // }else {
                    var newCard = cards[randInt(cardsLength)];
                    deckP1.push(newCard);
                    $currentDeckEle.text(i+1)
                // }
            }
            for(i=0;i<20;i++){
                // if(randInt(cardsLength) > cardsLength-2){
                //     //add rare or epic card
                //     var newCard = rareCards[randInt(rareCardsLength)];
                //     deckP2.push(newCard);
                //     $inactiveDeckEle.text(i+1)
                // }else {
                    var newCard = cards[randInt(cardsLength)];
                    deckP2.push(newCard);
                    $inactiveDeckEle.text(i+1)
                // }
            }
            currentDeckCardsLeft = currentDeck.length;
            inactiveDeckCardsLeft = inactiveDeck.length;
        },
        drawCard: function(){
            var cardsLeft = currentDeck.length;
            var numInHand = currentHand.length;
            var canDraw = (cardsLeft > 0 && numTimesCanDraw > 0 && numInHand < 7);
            if(numTimesCanDraw === 7){
                for(i=0;i<numTimesCanDraw;i++){
                    if(canDraw === true){
                        currentDeckCardsLeft--;
                        $currentDeckEle.text(currentDeckCardsLeft);
                        currentHand.push(game.currentPlayer.deck[i]);
                        game.currentPlayer.deck.pop();
                        var currentHandLength = currentHand.length;
                        console.log(currentHandLength)
                        console.log(currentHand[currentHandLength-1])
                        $currentHandEle.append('<div class="card"><img src = " ' + currentHand[currentHandLength-1].pic + ' " ></img></div>');
                        var numInHand = currentHand.length;
                    }    
                }
                numTimesCanDraw = 0;
            }else if(canDraw === true){
                    numTimesCanDraw--;
                    currentDeckCardsLeft--;
                    $currentDeckEle.text(currentDeckCardsLeft);
                    currentHand.push(game.currentPlayer.deck[cardsLeft-1]);
                    game.currentPlayer.deck.pop();
                    var currentHandLength = currentHand.length;
                    $currentHandEle.append('<div class="card"><img src = " ' + currentHand[currentHandLength-1].pic + ' " ></img></div>');
                    var numInHand = currentHand.length;
            }else{
                console.log('No Cards Left, numTimesCanDraw = 0, or error')
            }
        },
        init: function(){
            console.log('Successfully Initialized');
            game.currentPlayer = game.players[0];
            game.inactivePlayer = game.players[1]
            numTimesCanDraw +=7;
            firstTurn = true;
        },
        switchPlayer: function() {
            if(firstTurn === true){
                numTimesCanDraw = 7;
            } else {
                numTimesCanDraw = 1;
            }
            var cardsInHand = currentHand.length;
            var cardsInDeck = currentDeck.length;
            var handInLimbo = limboHand.length;
            var deckInLimbo = limboDeck.length;
            for(i=cardsInHand;i>0;i--){
                limboHand.push(currentHand[i-1])
                currentHand.pop(i-1)
            }
            $currentHandEle.children().remove()
            for(j=cardsInDeck;j>0;j--){
                limboDeck.push(currentDeck[i-1])
                currentDeck.pop(i-1)
            }
            $currentDeckEle.text(20)
            if(game.currentPlayer === game.players[0]) {
                game.currentPlayer = game.players[1]
                game.inactivePlayer = game.players[0]
                currentDeck = deckP2
                inactiveDeck = deckP1
                currentHand = handP2
                inactiveHand = handP1
                for(i=handInLimbo;i>0;i--){
                    handP1.push(limboHand[i-1])
                    $inactiveHandEle.append('<div class="card"><img src = " ' + limboHand[i-1].pic + ' " ></img></div>');
                    limboHand.pop(i-1)
                }
            }else {
                firstTurn = false;
                game.currentPlayer = game.players[0]
                game.inactivePlayer = game.players[1]
                currentDeck = deckP1
                inactiveDeck = deckP2
                currentHand = handP1
                inactiveHand = handP2
                for(i=cardsInHand;i>0;i--){
                    handP1.push(limboHand[i-1])
                    $currentHandEle.append('<div class="card"><img src = " ' + currentHand[currentHandLength-1].pic + ' " ></img></div>');
                    limboHand.pop(i-1)
                }
            }
            console.log(game.currentPlayer)
        },

    }
    game.init()
    var currentDeck = game.currentPlayer.deck;
    var inactiveDeck = game.inactivePlayer.deck;
    var currentHand = game.currentPlayer.hand;
    if(firstTurn===true){
        game.createDeck();
        game.drawCard()}
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


//How to program cards damaging enemy
    $inactiveHealth.val(randInt(100));

//adding event listeners to active cards
    for (i=0;i<numInPlayP1;i++){
    console.log('ran loop')
    }
//testing section

    // inPlayP1.push(cards[0])
    // var image = '<img src="' + cards[0].pic + '" />'
    // $('#currentSquadron').append(image)
    // $('#inactiveSquadron').append(image)