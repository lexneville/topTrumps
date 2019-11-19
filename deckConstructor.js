
class Tanks {
    constructor() { 
        this.deckName = "Tanks"
        this.stat1Name = "Design Date";
        this.stat1Operator = "H";
        this.stat2Name = "Number Built";
        this.stat2Operator = "H";
        this.stat3Name = "Weight (Tons)";
        this.stat3Operator = "H";
        this.stat4Name = "Max Armour Thickness (mm)";
        this.stat4Operator = "H";
        this.stat5Name = "Main Gun diameter (mm)";
        this.stat5Operator = "H";
        
    }
}

class TankCards extends Tanks {
    constructor(
        cardNumber,
        cardName,
        stat1Value,
        stat2Value,
        stat3Value,
        stat4Value,
        stat5Value,
        deckName, 
        stat1Name,
        stat1Operator,
        stat2Name,
        stat2Operator,
        stat3Name,
        stat3Operator,
        stat4Name,
        stat4Operator,
        stat5Name,
        stat5Operator
        ) {
            super(
                deckName, 
                stat1Name,
                stat1Operator,
                stat2Name,
                stat2Operator,
                stat3Name,
                stat3Operator,
                stat4Name,
                stat4Operator,
                stat5Name,
                stat5Operator
            );
            this.cardNumber = cardNumber;
            this.cardName = cardName;
            this.stat1Value = stat1Value;
            this.stat2Value = stat2Value;
            this.stat3Value = stat3Value;
            this.stat4Value = stat4Value;
            this.stat5Value = stat5Value;
        }
}

const t1 = new TankCards ( 1, "Tortoise", 1944, 6, 79, 228, 105)
const t2 = new TankCards ( 2, "T28", 1945, 2, 86, 305, 94)
const t3 = new TankCards ( 3, "Abrams", 1975, 10288, 54, 84, 120)
const t4 = new TankCards ( 4, "Chieftan", 1966, 900, 55, 340, 120)


// const cardOne = new TankCards("Tanks", 1, "Tortoise", "Design Date", "H" , 1944, "No. Built", "H", 6, "Weight (Tons)", 79, "Max Armour Thickness (mm)", 228, "Main Gun diameter (mm)", 105 );

// const cardTwo = new Cards("Tanks", 2, "T28", "Design Date", 1945, "No. Built", 2, "Weight (Tons)", 86, "Max Armour Thickness (mm)", 305, "Main Gun diameter (mm)", 94 );

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
