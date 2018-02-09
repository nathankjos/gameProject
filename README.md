# Worlds Collide

## A two-player, Battle-Card Game

Characters from many different video game series' have been recruited by two rivals (Player 1 and Player 2 of course), and an all-out war has begun! Do you have what it takes to win the battle of a lifetime?

<img width="988" alt="screenshot" src="/GameScreenshot.png">
### To Play

Each player takes turns deploying a troop card, using a bomb spell, or saving their energy for their next turn. First player to cause their opponent to lose all 50 points of health wins!

Ratchet: Cost: 3, Strength: 4
Clank: Cost 1, Strength: 1
Jak: Cost 4, Strength: 5
Daxter: Cost: 2, Strength: 2
Green Sage: Cost 2, Strength: 3
Bomb: Cost: 4, eliminates enemy squadron

### Technology Used

HMTL, CSS, JavaScript, jQuery

The game was created and styled using HTML and CSS, and the game's interactivity was developed with JavaScript and jQuery.

### User Stories

As a player, I can choose to draw a card if my hand is not full and I haven't already drawn a card.

As a player, I double click troop cards in my hand to deploy them to my active squadron.

As a player, I can use a bomb spell to attack the enemy's squadron of troops.

As a player, I can end my turn early without using energy in order to save energy for more expensive cards.

As a player, I know when I've won because it is announced clearly.

As a player, I can play again once I've completed a game

### Approach

I created each part of the game in separate phases:

1. First I created a cards array to store just a few cards as objects     with various properties.

2. Then I started adding necessary functions of my card game like         creating card decks for both players, drawing cards, deploying         cards, and ending the turn of the current player, and switching        players.

3. Then I created advanced game logic to make sure that all variables,    arrays, objects, and functions were behaving appropriately.

4. I restructured the game in the chronological order that each           element or function would be rendered or called, and simplified the    code of various major processes for storing correct information of     what has happened in the game.

5. After making sure everything was working as planned, I styled my game by adding images to the cards, card backgrounds, card backs, and the background of my game itself from these sources:
#### Images
- [Page Background](http://gipsypixel.com/wp-content/uploads/2017/11/Dark-Teal-Wallpaper-High-Quality-Minimalist-Subtle-Texture-Of-Computer-Green.jpg)
- [Ratchet](http://playstationallstars.wikia.com/wiki/File:Render_ratchet_clank.png)
- [Clank](https://psmedia.playstation.com/is/image/psmedia/ratchet-and-clank-two-column-characters-clank-01-ps4-eu-24mar16?$TwoColumn_Image$)
- [Jak](http://playstationallstars.wikia.com/wiki/File:Jak20oc.png)
- [GreenSage](https://vignette.wikia.nocookie.net/jakanddaxter/images/1/12/Samos_Hagai_concept_art.png/revision/latest?cb=20100614174532)
- [Link](http://images6.fanpop.com/image/photos/38900000/Link-the-legend-of-zelda-38945796-500-487.png)
- [Bomb](http://webiconspng.com/wp-content/uploads/2017/09/Bomb-PNG-Image-59566.png)
- [Card Back](https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/7/7e/Card_back-The_Blue_Portal.png/200px-Card_back-The_Blue_Portal.png?version=219337318963ee90541cb1dcc6503e71)
- [Hero Background Image](https://giphy.com/gifs/rough-Xh1z9DwTnbVTi)
- [Side Kick Background Image](https://giphy.com/gifs/trippy-abstract-wings-26ybuXagzIQN8hOXm)
### Outstanding Challenges

I need to Implement a health system for cards, and a damage system for spells, as long with a poison status for players.

I need to have a start page which would allow naming of players, and rolling dice to see who is first.

I need to add a delay after the end turn button is pressed to hide all screen elements for several seconds so the current player does not see the hand of the next player.

I need to add more damage spells, and special spells, along with rare cards in a separate rare card array.

I need to ad a drag and drop event listener to the current squadron to be able to attack inative squadron troops in order to neutralize them

### Future Work

As a player, I want more cards, several card rarity arrays with special abilities on each card that activate when stamina is full and card is clicked.

As a player, I want to choose my own avatar.

As a player, I want to have a record of wins vs losses

As a player, I want everything to be animated


All images are borrowed without permission.