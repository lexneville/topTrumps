// ================= TOP TRUMPS programmed by JODY RICHARDSON =================




// let deckStats = [
//     "Tanks",
//     "Name", 
//     "Design Date", 
//     "No. Built", 
//     "Weight (Tons)", 
//     "Max Armour Thickness (mm)", 
//     "Main Gun diameter (mm)"
// ] ;

// let deckName = deckStats[0]; 

// playerEntry = () => {prompt(`Welcome to TOP TRUMPS
// by JODY RICHARDSON

// How many players?`)
// }
 
// playerEntry();

// let playerOneName = prompt("Player One, please enter name");
// let playerTwoName = prompt("Player Two, please enter name");
// alert(`Player one =  ${playerOneName}
// Player Two =  ${playerTwoName}
// The Top Trumps deck, ${deckName}, has been shuffled`);






let playerOneDeck = [ 

    {   deckName : "Tanks",
        cardNumber : 1,
        cardName : "Tortoise",
        stat1 : 1944,
        stat2 : 6,
        stat3 : 79,
        stat4 : 228,
        stat5 : 105
    },

    {   deckName : "Tanks",
        cardNumber : 3,
        cardName : "Abrams",
        stat1 : 1975,
        stat2 : 10288,
        stat3 : 54,
        stat4 : 84,
        stat5 : 120
    }
];

let playerTwoDeck = [ 

    {   deckName : "Tanks",
        cardNumber : 2,
        cardName : "T28",
        stat1 : 1945,
        stat2 : 2,
        stat3 : 86,
        stat4 : 305,
        stat5 : 94
    },
    {   deckName : "Tanks",
        cardNumber : 4,
        cardName : "Chieftan",
        stat1 : 1966,
        stat2 : 900,
        stat3 : 55,
        stat4 : 340,
        stat5 : 120        
    }

];

let limboDeck = [];

let playerChoice;

let controlPlayerChoice = [];
let answeringPlayerStat = [];

let playerTwoStat = [0,
    playerTwoDeck[0].stat1,
    playerTwoDeck[0].stat2,
    playerTwoDeck[0].stat3,
    playerTwoDeck[0].stat4,
    playerTwoDeck[0].stat5,
];



//console.log(playerTwoDeck[0]);
//console.log(playerOneDeck[0].cardName);

 
controlPlayer  = playerOneName;
answeringPlayer = playerTwoName;



let controlPlayer  = playerOneName;
let answeringPlayer = playerTwoName;


// display player one's first card
// prompt the user for their choice of stat
const displayCard = () => {

    if (controlPlayer == playerOneName) {
         playerChoices = [0,
            playerOneDeck[0].stat1,
            playerOneDeck[0].stat2,
            playerOneDeck[0].stat3,
            playerOneDeck[0].stat4,
            playerOneDeck[0].stat5
        ];
        answeringPlayer = playerTwoName;   
        playerChoice = prompt(`Round ${round} - ${controlPlayer}, your card is: 
        ${deckStats[1]} : ${playerOneDeck[0].cardName}
        1. ${deckStats[2]} : ${playerOneDeck[0].stat1}
        2. ${deckStats[3]} : ${playerOneDeck[0].stat2}
        3. ${deckStats[4]} : ${playerOneDeck[0].stat3}
        4. ${deckStats[5]} : ${playerOneDeck[0].stat4}
        5. ${deckStats[6]} : ${playerOneDeck[0].stat5}
        Please choose a statistic 1-5!`);
    }   else  if (controlPlayer == playerTwoName) {
            playerChoices = [0,
                playerTwoDeck[0].stat1,
                playerTwoDeck[0].stat2,
                playerTwoDeck[0].stat3,
                playerTwoDeck[0].stat4,
                playerTwoDeck[0].stat5,
            ];
        
            answeringPlayer = playerOneName;

            playerChoice = prompt(`Round ${round} - ${controlPlayer}, your card is: 
            ${deckStats[1]} : ${playerTwoDeck[0].cardName}
            1. ${deckStats[2]} : ${playerTwoDeck[0].stat1}
            2. ${deckStats[3]} : ${playerTwoDeck[0].stat2}
            3. ${deckStats[4]} : ${playerTwoDeck[0].stat3}
            4. ${deckStats[5]} : ${playerTwoDeck[0].stat4}
            5. ${deckStats[6]} : ${playerTwoDeck[0].stat5}
            Please choose a statistic 1-5!`);        
    }
}
// while neither player has zero cards in their array

for (round = 1 ; (playerOneDeck.length != 0) && (playerTwoDeck != 0) ; round++) {

// display player one's first card
    displayCard();

// compare stat value between player 1's and player 2's cards
    switch (true){      

// if player one wins the round, shift() player two's card into the last slot of player one's deck array                                     
        case
            (controlPlayer == playerOneName) &&
            (playerChoices[playerChoice] > playerTwoStat[playerChoice]) && (limboDeck.length == 0):

                playerOneDeck.push(playerTwoDeck[0]);
                playerTwoDeck.splice(0, 1);
                alert(`${playerOneName} has won this round.`);                
                break;

// if player two wins the round, shift() player one's card into the last slot of player two's deck array
        case
            (controlPlayer == playerOneName) && 
            (playerChoices[playerChoice] < playerTwoStat[playerChoice] && (limboDeck.length == 0)):

                playerTwoDeck.push(playerOneDeck[playerChoice]);
                playerOneDeck.splice(0, 1);
                alert(`${playerTwoName} has won this round.`);
                controlPlayer  = playerTwoName;
                answeringPlayer = playerOneName;
                break;
        
        case
            (controlPlayer == playerOneName) &&
            (playerChoices[playerChoice] > playerTwoStat[playerChoice]) && (limboDeck.length > 0):

                playerOneDeck.push(playerTwoDeck[0]);
                playerTwoDeck.splice(0, 1);
                for(i=0;i<limboDeck.length;i++){
                    playerOneDeck.push(limboDeck[0]);
                    limboDeck.splice(0,1);
                }
                alert(`${playerOneName} has won this round and also the limbo cards.`);                
                break;

        case
            (controlPlayer == playerOneName) &&
            (playerChoices[playerChoice] < playerTwoStat[playerChoice]) && (limboDeck.length > 0):

                playerTwoDeck.push(playerOneDeck[0]);
                playerOneDeck.splice(0, 1);
                for(i=0;i<limboDeck.length;i++){
                    playerTwoDeck.push(limboDeck[0]);
                    limboDeck.splice(0,1);
                }
                alert(`${playerTwoName} has won this round and also the limbo cards.`);
                controlPlayer  = playerTwoName;
                answeringPlayer = playerOneName;
                break;
        

// if stats match, push both cards into limbo deck array       
        case
            (controlPlayer == playerOneName) && 
            playerChoices[playerChoice] == playerTwoStat[playerChoice]:

                limboDeck.push(playerOneDeck[0]);
                limboDeck.push(playerTwoDeck[0]);
                playerTwoDeck.splice(0, 1);
                playerOneDeck.splice(0, 1);
                alert(`This round is a draw, cards moved to limbo.`);
                break; 


//=-=-=-=-=-=-=-=-=-=-=-=-
 

        case
            (controlPlayer == playerTwoName) &&
            (playerChoices[playerChoice] > playerOneStat[playerChoice]) && (limboDeck.length == 0):

                playerTwoDeck.push(playerOneDeck[0]);
                playerOneDeck.splice(0, 1);
                alert(`${playerTwoName} has won this round.`);
                
                break;
    
        case
            (controlPlayer == playerTwoName) && 
            (playerChoices[playerChoice] < playerOneStat[playerChoice] && (limboDeck.length == 0)):

                playerOneDeck.push(playerTwoDeck[playerChoice]);
                playerTwoDeck.splice(0, 1);

                alert(`${playerOneName} has won this round.`);
                controlPlayer  = playerOneName;
                answeringPlayer = playerTwoName;
                break;
        
        case
            (controlPlayer == playerTwoName) &&
            (playerChoices[playerChoice] > playerOneStat[playerChoice]) && (limboDeck.length > 0):

                playerTwoDeck.push(playerOneDeck[0]);
                playerOneDeck.splice(0, 1);
                for(i=0;i<limboDeck.length;i++){
                    playerTwoDeck.push(limboDeck[0]);
                    limboDeck.splice(0,1);
                }
                alert(`${playerTwoName} has won this round and also the limbo cards.`);            
                break;

        case
            (controlPlayer == playerTwoName) &&
            (playerChoices[playerChoice] < playerOneStat[playerChoice]) && (limboDeck.length > 0):
                
                playerOneDeck.push(playerTwoDeck[playerChoice]);
                playerTwoDeck.splice(0, 1);
                for(i=0;i<limboDeck.length;i++){
                    playerOneDeck.push(limboDeck[0]);
                    limboDeck.splice(0,1);
                }

                alert(`${playerOneName} has won this round and also the limbo cards.`);
                controlPlayer  = playerOneName;
                answeringPlayer = playerTwoName;
                break;
        

// if stats match, push both cards into limbo deck array       
        case
            (controlPlayer == playerTwoName) && 
            playerChoices[playerChoice] == playerOneStat[playerChoice]:

                limboDeck.push(playerOneDeck[0]);
                limboDeck.push(playerTwoDeck[0]);
                playerTwoDeck.splice(0, 1);
                playerOneDeck.splice(0, 1);
                alert(`This round is a draw, cards moved to limbo.`);
                break;
    
    }
}


alert(`The game is over`);





// game over state when one player has no cards left

// display winner (playerName who has a full array)

// play again prompt


