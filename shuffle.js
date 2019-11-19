let playerOneDeckOrder = [];

let playerTwoDeckOrder = [];

const shuffle = () => {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    
    
    while (array.length > 0) {
        let tempIndex = 0;
        let heldNumber = array[tempIndex];

        tempIndex = Math.floor((Math.random() * array.length));
        heldNumber = array[tempIndex];
        array.splice(tempIndex, 1);
        playerOneDeckOrder.push(heldNumber);

        tempIndex = Math.floor((Math.random() * array.length));
        heldNumber = array[tempIndex];
        array.splice(tempIndex, 1);
        playerTwoDeckOrder.push(heldNumber);
    } 
}
    shuffle();
    console.log(playerOneDeckOrder);
    console.log(playerTwoDeckOrder);

