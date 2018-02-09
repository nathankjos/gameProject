//Variables, cards, and Game
    //variables
        var inPlayP1 = [];
        var inPlayP2 = [];
        var handP1 = [];
        var handP2 = [];
        var deckP1 = [];
        var deckP2 = [];
        var cardsLeft;
        var numInHand;
        var numInPlayP1 = inPlayP1.length;
        var numInPlayP2 = inPlayP2.length;
        var numInHandP1 = handP1.length;
        var numInHandP2 = handP2.length;
        var numTimesCanDraw = 0;
        var currentDeckCardsLeft;
        var inactiveDeckCardsLeft;
        var $inactiveHealth = $('#inactiveHealth')
        var $currentHealth = $('#currentHealth')
        var $inactiveEnergy = $('#inactiveEnergy')
        var $currentEnergy = $('#currentEnergy')
        var limboHealth;
        var limboEnergy;
        var $currentHandEle = $('#currentHand')
        var $inactiveHandEle = $('#inactiveHand')
        var $currentDeckEle = $('#currentNumDeck')
        var $inactiveDeckEle = $('#inactiveNumDeck')
        var $currentSquadron = $('#currentSquadron')
        var $inactiveSquadron = $('#inactiveSquadron')
        var inactiveDeckCardsLeft = $inactiveDeckEle.text();
        var limboHand = [];
        var limboDeck = [];
        var limboSquadron = [];
        var randInt = function(n){
            return Math.floor(Math.random()*n);
        }
    var cards = [
        {name: 'ratchet', strength: 4, health: 8, stamina: 0, pic:'Ratchet.png', cardBack: 'cardBack.png', type: 'hero', cost: 3},
        {name: 'ratchet', strength: 4, health: 8, stamina: 0, pic:'Ratchet.png', cardBack: 'cardBack.png', type: 'hero', cost: 3},
        {name: 'clank', strength: 1, health: 2, stamina: 0, pic:'Clank.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 1},
        {name: 'clank', strength: 1, health: 2, stamina: 0, pic:'Clank.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 1},
        {name: 'jak', strength: 5, health: 10, stamina: 0, pic:'Jak.png', cardBack: 'cardBack.png',  type: 'hero', cost: 4},
        {name: 'jak', strength: 5, health: 10, stamina: 0, pic:'Jak.png', cardBack: 'cardBack.png',  type: 'hero', cost: 4},
        {name: 'daxter', strength: 2, health: 1, stamina: 0, pic:'Daxter.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 2},
        {name: 'daxter', strength: 2, health: 1, stamina: 0, pic:'Daxter.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 2},
        {name: 'greenSage', strength: 3, health: 3, stamina: 0, pic:'Green Sage.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 2},
        {name: 'greenSage', strength: 3, health: 3, stamina: 0, pic:'Green Sage.png', cardBack: 'cardBack.png', type: 'sideKick', cost: 2},
        {name: 'link', strength: 6, health: 8, stamina: 0, pic: 'link.png', cardBack: 'cardBack.png', type: 'hero', cost: 5},
        {name: 'link', strength: 6, health: 8, stamina: 0, pic: 'link.png', cardBack: 'cardBack.png', type: 'hero', cost: 5},
        {name: 'bomb', pic: 'bomb.png', cardBack: 'cardBack.png', type: 'dmgSpell', cost: 4},
        // {name: 'boost', strength: 6, pic: 'link.png', cardBack: 'cardBack.png', type: 'suppSpell', cost: 1},
        // {name: 'skip', strength: 6, pic: 'link.png', cardBack: 'cardBack.png', type: 'specSpell', cost: 3},
        // {name: 'heal', strength: 6, pic: 'link.png', cardBack: 'cardBack.png', type: 'suppSpell', cost: 1},
    ]
    var cardsLength = cards.length;
    /////////////////////////////////////////////////
    var game = {
        players: [{id: 'P1',name: 'Player One', energy: 0, poisoned: false, stunned: false, hand: handP1, deck: deckP1},
        {id: 'P2',name: 'Player Two', energy: 0, poisoned: false, stunned: false, hand: handP2, deck: deckP2}],
        currentPlayer: null,
        inactivePlayer: null,
        currentHand: null,
        inactiveHand: null,
        currentDeck: null,
        inactiveDeck: null,
        done: false,
        winner: false,
        firstTurn: null,
        init: function(){
            console.log('Successfully Initialized');
            game.currentPlayer = game.players[0];
            game.inactivePlayer = game.players[1]
            $('#IP').text(game.inactivePlayer.name)
            $('#AP').text(game.currentPlayer.name)
            currentHand = game.players[0].hand
            inactiveHand = game.players[1].hand
            currentDeck = game.players[0].deck
            inactiveDeck = game.players[1].deck
            firstTurn = true;
            $currentEnergy.val(3)
            $inactiveEnergy.val(0)
            $('#AE').text($currentEnergy.val())
            $('#IE').text($inactiveEnergy.val())
            game.createDeck();
            game.drawCard()
        },
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
        boost: function(){
            //add stats in select to selected hero card in squadron
            //clear all css and event listeners
        },
        select: function(){
            //highlight card, and add event listeners to all current squad cards and highlights them 
            //get stats of sideKick card
        },
        deployCard: function(){
            var $this = $(this)
            var cardIndex = game.findCard($this.attr('id'));
            if($currentEnergy.val()>=cards[cardIndex].cost){
                $this.off()
                var thisIndex = $this.index()
                currentHand.splice(thisIndex,1)
                $currentSquadron.append(this)
                var energyLeft = $currentEnergy.val($currentEnergy.val()-(cards[cardIndex].cost));
                $('#AE').text($currentEnergy.val())
            }
        },
        drawCard: function(){
            if(firstTurn===true){
                numTimesCanDraw = 5;
            }else{
                numTimesCanDraw = 1;
            }
            currentDeckLength = currentDeck.length;
            inactiveDeckLength = inactiveDeck.length;        
            currentHandLength = currentHand.length;
            inactiveHandLength = inactiveHand.length;
            var canDraw = (currentDeckLength > 0 && numTimesCanDraw > 0 && currentHandLength < 5);
            if(canDraw === true){
                for(i=0;i<numTimesCanDraw;i++){
                    currentHand.push(currentDeck[0]);
                    currentDeck.shift();
                    currentHandLength = currentHand.length;
                    $currentHandEle.append('<div class="'+currentHand[i].type + '" id="'+currentHand[i].name+'"><img src = "' + currentHand[i].pic + '" ></img></div>');
                    currentDeckLength = currentDeck.length;
                    $currentDeckEle.text(currentDeckLength);
                }    
                numTimesCanDraw = 0;
            }else if(canDraw === true){
                    currentHand.push(currentDeck[0]);
                    currentDeck.shift();
                    var currentHandLength = currentHand.length;
                    $currentHandEle.append('<div class="'+currentHand[currentHand.length-1].type + '" id="'+currentHand[currentHand.length-1].name+'"><img src = "' + currentHand[currentHand.length-1].pic + ' " ></img></div>');
                    var numInHand = currentHand.length;
                    currentDeckLength = currentDeck.length
                    $currentDeckEle.text(currentDeckLength);
                    numTimesCanDraw--;
            }else{
                console.log('No Cards Left, numTimesCanDraw = 0, or error')
            }
            $('#currentHand > .hero').on("dblclick", game.deployCard)
            $('#currentHand > .sideKick').on("dblclick", game.deployCard)
            $('#draw').hide()
        },
        findCard: function(id){
            for(var cardIndex=0;cardIndex<cards.length;cardIndex++){
                if(cards[cardIndex].name === id){
                    return cardIndex
                }
            }
        },
        activateDmg: function(){
            if($inactiveSquadron.length > 0&&$currentEnergy.val()>=4){
                $inactiveSquadron.empty()
                this.remove()
            }
            var energyLeft = $currentEnergy.val($currentEnergy.val()-4);
            $('#AE').text($currentEnergy.val())
        },
        switchPlayer: function() {
            if(firstTurn===true){
                numTimesCanDraw = 5;
            }else{
                numTimesCanDraw = 1;
            }
            $('#draw').show()
            //cards in current squad attack health of inactive
            currentSquadLength = $currentSquadron.children().length
            var attPwr = 0;
            for(var i=0;i<currentSquadLength;i++){
                        lastSquadCardId= $currentSquadron.children().eq(i).attr('id')
                        var foundCard = game.findCard(lastSquadCardId)
                        attPwr += cards[foundCard].strength
            }
                $inactiveHealth.val($inactiveHealth.val()-attPwr);
                attPwr = 0;
                if($inactiveHealth.val() === 0){
                    alert('Game Over! Winner is: '+game.currentPlayer.name)
                    var winner = $('<h1>')
                    winner.text('Winner is: '+game.currentPlayer.name)
                    var playAgain = $('<button>')
                    playAgain.attr('id','playAgainBtn')
                    playAgain.text('Play Again?')
                    var body = $('body')
                    body.empty()
                    body.append(winner)
                    body.append(playAgain)
                    function playAgainfunction(){
                        location.reload()
                    }    
                    playAgain.on('click',playAgainfunction)
                }
            //switches health bar values
                limboHealth = $currentHealth.val();
                $currentHealth.val($inactiveHealth.val());
                $inactiveHealth.val(limboHealth);
                $('#AHP').text($currentHealth.val())
                $('#IHP').text($inactiveHealth.val())
            //switches energy bar values
                limboEnergy = $currentEnergy.val();
                $currentEnergy.val($inactiveEnergy.val());
                $inactiveEnergy.val(limboEnergy);
                $currentEnergy.val($currentEnergy.val()+3)
                $('#AE').text($currentEnergy.val())
                $('#IE').text($inactiveEnergy.val())
            //updates numTimesCanDraw
                var inactiveHandLength = inactiveHand.length;
                var inactiveDeckLength= inactiveDeck.length;
                var cardsInHand = currentHand.length;
                var cardsInDeck = currentDeck.length;
            // add current squad to limbo squad
                for(i=0;i<$currentSquadron.length;i++){
                    limboSquadron.push($currentSquadron.children(i))
                }
                $currentSquadron.empty()
            //add inactive squad to current squad
                for(i=0;i<$inactiveSquadron.length;i++){
                    $currentSquadron.append($inactiveSquadron.children(i))
                }
                $inactiveSquadron.empty()
            //add limbo squad to inactive squad
                for(i=0;i<limboSquadron.length;i++){
                    $inactiveSquadron.append(limboSquadron[0])
                    limboSquadron.shift()
                }
            //adds all cards in current hand to hand in limbo and removes from current hand
                while(currentHand.length>0){
                    limboHand.push(currentHand[0])
                    currentHand.shift(0)
                }
            //removes card images from current hand div element
                $currentHandEle.children().remove()
            //adds all cards in current deck to deck in limbo
                while(currentDeck.length>0){
                    limboDeck.push(currentDeck[0])
                    currentDeck.shift()
                }
                var handInLimbo = limboHand.length;
                var deckInLimbo = limboDeck.length;
            //changes all cards in inactive hand to current hand
            var inactiveHandLength = inactiveHand.length;
                for(i=0;i<inactiveHandLength;i++){
                    currentHand.push(inactiveHand[0])
                    $currentHandEle.append('<div class="'+currentHand[i].type + '" id="'+currentHand[i].name+'"><img src = "' + currentHand[i].pic + '" ></img></div>');
                    inactiveHand.shift();
                }
                inactiveHandLength=inactiveHand.length
                // inactiveHand = [];
            //changes all cards in inactive deck to current deck
                while(inactiveDeck.length>0){
                    currentDeck.push(inactiveDeck[0])
                    inactiveDeck.shift()
                }
            //removes card images in inactive hand
                $inactiveHandEle.children().remove()
            // //adds images of cards in current hand
            //     if(currentHand.length !== 0){
            //         for(i=0;i<currentHand.length;i++){
            //             console.log(currentHand[i])
            //             // $currentHandEle.prepend('<div class="card"><img src = " ' + currentHand[i].pic + ' " ></img></div>');
            //         }
            //     }
            //adds cards in limbo deck to inactive deck
                while(limboDeck.length>0){
                    inactiveDeck.push(limboDeck[0])
                    limboDeck.shift()
                }
            $inactiveDeckEle.text(inactiveDeck.length)
            $currentDeckEle.text(currentDeck.length)
            //adds cards stored in hand in limbo to inactive hand
                while(limboHand.length>0){
                    inactiveHand.push(limboHand[0])
                    $inactiveHandEle.append('<div class="card"><img src = " ' + limboHand[0].cardBack + ' " ></img></div>');
                    limboHand.shift()
                }
                $inactiveHandEle.children().css({marginLeft: '-25px', height: '120px', width: '80px', borderRadius: '5px'})
            //if current player is P1
                if(game.currentPlayer === game.players[0]) {
                    game.currentPlayer = game.players[1]
                    game.inactivePlayer = game.players[0]
            //if current player is P2
                }else {
                    game.currentPlayer = game.players[0]
                    game.inactivePlayer = game.players[1]
                }
            //changes text of current deck cards left to be next player's deck cards left
                $currentDeckEle.text(currentDeck.length)
                $inactiveDeckEle.text(inactiveDeck.length)
                $('#IP').text(game.inactivePlayer.name)
                $('#AP').text(game.currentPlayer.name)    
                $('#currentHand > .hero').on("dblclick", game.deployCard)
                $('#currentHand > .sideKick').on("dblclick", game.deployCard)
                $('#currentHand > .dmgSpell').on("dblclick", game.activateDmg)
                $('#AE').text($currentEnergy.val())
                $('#IE').text($inactiveEnergy.val())
                if(firstTurn===true){
                    game.drawCard()
                    numTimesCanDraw = 5;
                    firstTurn = false;
                }    
            }
    }
    /////////////////////////////////////////////////
    game.init()
    var currentDeck = game.currentPlayer.deck;
    var inactiveDeck = game.inactivePlayer.deck;
    var currentHand = game.currentPlayer.hand;


    $('#endTurn').on('click',game.switchPlayer)
    $('#draw').on('click',game.drawCard)
// //Special Abilitiess
    //     var abilities = [
    //         teamBoost= function(){
    //             console.log('teamBoost')
    //         },
    //         rainOfFire = function(){
    //             console.log('rainOfFire')
    //         },
    //         sideKick = function(){
    //             console.log('sideKick')
    //         },
    //     ];


    //How to program cards damaging enemy
    // $inactiveHealth.val(randInt(100));


    // adding event listeners to active cards
    // //adding mouse over show stats and description
    //     $('#currentHand').on("mouseover", showDesc)
    // //adding mouse out hide stats and description
    //     $('#currentHand').on("mouseout", hideDesc)
    // //adding summon event listener
        // $('#currentHand').on("dblclick", deployCard)
    // //adding special power event listener
    //     $('#currentSquadron').on("click", specialAtt)
    //

    //testing section