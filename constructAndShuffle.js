class CarCards {
    constructor (
        cardNumber,
        cardName,
        stat1Value,
        stat2Value,
        stat3Value,
        stat4Value,
        stat5Value,
    ) 
    {
    this.deckName = "GTAV Cars";
    this.cardNumber = cardNumber;
    this.cardName = cardName;
    this.stat1Name = "Cost ($)";
    this.stat1Operator = "H";
    this.stat1Value = stat1Value;
    this.stat2Name = "Top Speed (mph)";
    this.stat2Operator = "H";
    this.stat2Value = stat2Value;
    this.stat3Name = "Handling";
    this.stat3Operator = "H";
    this.stat3Value = stat3Value;
    this.stat4Name = "Acceleration";
    this.stat4Operator = "H";
    this.stat4Value = stat4Value;
    this.stat5Name = "Braking";
    this.stat5Operator = "H";
    this.stat5Value = stat5Value;
    }
}

const c1 = new CarCards ( 1, "Zorruso", 1925000, 124, 100, 94, 40);
const c2 = new CarCards ( 2, "Dynasty", 450000, 94, 52, 45, 13);
const c3 = new CarCards ( 3, "Jugular", 1225000, 127, 100, 95, 10);
const c4 = new CarCards ( 4, "Krieger", 2875000, 100, 94, 37);
const c5 = new CarCards ( 5, "Caracara 4x4", 875000, 103, 62, 68, 10);
const c6 = new CarCards ( 6, "Issi Sport", 897000, 114, 100, 76, 33);
const c7 = new CarCards ( 7, "S80RR", 2575000, 123, 100, 93, 41);
const c8 = new CarCards ( 8, "Thrax", 2325000, 124, 100, 85, 40);
const c9 = new CarCards ( 9, "Vamos", 596000, 112, 68, 83, 17);
const c10 = new CarCards ( 10, "Deviant", 512000, 109, 68, 73, 17);
const c11 = new CarCards ( 11, "Itali GTO", 1965000, 128, 79, 100, 37);
const c12 = new CarCards ( 12, "Toros", 498000, 128, 70, 80, 27);
const c13 = new CarCards ( 13, "Impaler", 331835, 116, 71,78, 20);
const c14 = new CarCards ( 14, "ZR 380", 2138640, 141, 76, 88, 27);
const c15 = new CarCards ( 15, "Scarab", 3076290, 120, 68, 25, 23);
const c16 = new CarCards ( 16, "FMJ", 1750000, 125, 82, 91, 37);
const c17 = new CarCards ( 17, "Windsor Drop", 900000, 118, 67, 70, 23);
const c18 = new CarCards ( 18, "Banshee", 565000, 131, 76, 87, 33);
const c19 = new CarCards ( 19, "Schafter V12", 116000, 124, 77, 75, 32);
const c20 = new CarCards ( 20, "Cheetah", 650000, 120, 80, 80, 27);
const c21 = new CarCards ( 21, "Vacca", 240000, 120, 79, 75, 33);
const c22 = new CarCards ( 22, "Baller", 90000, 108, 61, 68, 20);
const c23 = new CarCards ( 23, "Patriot", 50000, 98, 52, 50, 11);
const c24 = new CarCards ( 24, "Exemplar", 205000, 117, 79, 65, 30);
const c25 = new CarCards ( 25, "Sentinel", 95000, 112, 74, 53, 30);
const c26 = new CarCards ( 26, "Turismo R", 500000, 122, 80, 88, 40);
const c27 = new CarCards ( 27, "Jester", 240000, 119, 77, 75, 32);
const c28 = new CarCards ( 28, "Blade", 160000, 110, 68, 81, 27);
const c29 = new CarCards ( 29, "Liberator", 556511, 80, 64, 100, 22);
const c30 = new CarCards ( 30, "Coquette", 665000, 118, 70, 85, 17);

let carsDeck = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30];

class WeaponCards {
    constructor (
        cardNumber,
        cardName,
        stat1Value,
        stat2Value,
        stat3Value,
        stat4Value,
        stat5Value,
    ) 
    {
    this.deckName = "Battlefield V Weapons";
    this.cardNumber = cardNumber;
    this.cardName = cardName;
    this.stat1Name = "Fire Rate (Rounds/Minute)";
    this.stat1Operator = "H";
    this.stat1Value = stat1Value;
    this.stat2Name = "HipFire Spread";
    this.stat2Operator = "L";
    this.stat2Value = stat2Value;
    this.stat3Name = "Magazine Size";
    this.stat3Operator = "H";
    this.stat3Value = stat3Value;
    this.stat4Name = "Bullet Velocity (m/s)";
    this.stat4Operator = "H";
    this.stat4Value = stat4Value;
    this.stat5Name = "Recoil";
    this.stat5Operator = "L";
    this.stat5Value = stat5Value;
    }
}


const w1 = new WeaponCards ( 1, "Kar98k", 48, 0.4, 5, 700, 4);
const w2 = new WeaponCards ( 2, "MG42", 981, 12, 150, 700, 1.5);
const w3 = new WeaponCards ( 3, "M1928A1", 720, 1.2, 20, 330, 0.6);
const w4 = new WeaponCards ( 4, "MP40", 539, 1.2, 32, 455, 0.48);
const w5 = new WeaponCards ( 5, "Sten", 514, 1.2, 32, 495, 0.48);
const w6 = new WeaponCards ( 6, "Ribeyrolles", 539, 3, 25, 700, 1.32);
const w7 = new WeaponCards ( 7, "M1 Garand", 359, 4.5, 26, 780, 0.85);
const w8 = new WeaponCards ( 8, "Turner SMLE", 359, 4.5, 10, 700, 1.32);
const w9 = new WeaponCards ( 9, "StG 44", 599, 3, 31, 620, 0.67);
const w10 = new WeaponCards ( 10, "MG34", 670, 12, 50, 740, 1.375);
const w11 = new WeaponCards ( 11, "Lewis Gun", 539, 4.5, 47, 740, 0.62);
const w12 = new WeaponCards ( 12, "Gewehr M95", 58, 4.5, 5, 600, 3.2);
const w13 = new WeaponCards ( 13, "Ross Mk III", 64, 4.5, 5, 600, 2.5);
const w14 = new WeaponCards ( 14, "Krag-Jorgensen", 54, 4.5, 6, 700, 2.5);
const w15 = new WeaponCards ( 15, "ZH-29", 149, 4.5, 5, 760, 2);
const w16 = new WeaponCards ( 16, "KE7", 568, 4.5, 25, 740, 0.7);
const w17 = new WeaponCards ( 17, "M30 Drilling", 199, 3, 2, 333, 4);
const w18 = new WeaponCards ( 18, "Madsen MG", 514, 4.5, 25, 780, 0.55);
const w19 = new WeaponCards ( 19, "Type 100", 720, 1.2, 30, 420, 0.4);
const w20 = new WeaponCards ( 20, "Gewehr 43", 299, 4.5, 10, 760, 1.55);
const w21 = new WeaponCards ( 21, "EMP", 568, 1.2, 32, 420, 0.52);
const w22 = new WeaponCards ( 22, "M28 Tromboncino", 87, 3, 6, 500, 0.4);
const w23 = new WeaponCards ( 23, "MP34", 514, 1.2, 20, 495, 0.5);
const w24 = new WeaponCards ( 24, "Gewehr 1-5", 359, 4.5, 31, 580, 1.42);
const w25 = new WeaponCards ( 25, "M1A1 Carbine", 449, 4.5, 16, 610, 0.87);
const w26 = new WeaponCards ( 26, "Karabin 1938M", 299, 4.5, 10, 760, 1.25);
const w27 = new WeaponCards ( 27, "Selbstlader 1916", 224, 4.5, 26, 760, 1.8);
const w28 = new WeaponCards ( 28, "Jungle Carbine", 83, 3, 10, 500, 2.8);
const w29 = new WeaponCards ( 29, "De Lisle Commando", 97, 3, 8, 350, 0.48);
const w30 = new WeaponCards ( 30, "Panzerbüchse 39", 18, 12, 11, 400, 20);

let weaponsDeck = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// class TankCards {
//     constructor (
//         cardNumber,
//         cardName,
//         stat1Value,
//         stat2Value,
//         stat3Value,
//         stat4Value,
//         stat5Value,
//     ) 
//     {
//     this.deckName = "Tanks"
//     this.cardNumber = cardNumber;
//     this.cardName = cardName;
//     this.stat1Name = "Design Date";
//     this.stat1Operator = "H";
//     this.stat1Value = stat1Value;
//     this.stat2Name = "Number Built";
//     this.stat2Operator = "H";
//     this.stat2Value = stat2Value;
//     this.stat3Name = "Weight (Tons)";
//     this.stat3Operator = "H";
//     this.stat3Value = stat3Value;
//     this.stat4Name = "Max Armour Thickness (mm)";
//     this.stat4Operator = "H";
//     this.stat4Value = stat4Value;
//     this.stat5Name = "Main Gun diameter (mm)";
//     this.stat5Operator = "H";
//     this.stat5Value = stat5Value;
//     }
// }

// const t1 = new TankCards ( 1, "Tortoise", 1944, 6, 79, 228, 105);
// const t2 = new TankCards ( 2, "T28", 1945, 2, 86, 305, 94);
// const t3 = new TankCards ( 3, "Abrams", 1975, 10288, 54, 84, 120);
// const t4 = new TankCards ( 4, "Chieftan", 1966, 900, 55, 340, 120);
// const t5 = new TankCards ( 5, "",);
// const t6 = new TankCards ( 6,);
// const t7 = new TankCards ( 7,);
// const t8 = new TankCards ( 8,);
// const t9 = new TankCards ( 9,);
// const t10 = new TankCards ( 10,);
// const t11 = new TankCards ( 11,);
// const t12 = new TankCards ( 12,);
// const t13 = new TankCards ( 13,);
// const t14 = new TankCards ( 14,);
// const t15 = new TankCards ( 15,);
// const t16 = new TankCards ( 16,);
// const t17 = new TankCards ( 17,);
// const t18 = new TankCards ( 18,);
// const t19 = new TankCards ( 19,);
// const t20 = new TankCards ( 20,);
// const t21 = new TankCards ( 21,);
// const t22 = new TankCards ( 22,);
// const t23 = new TankCards ( 23,);
// const t24 = new TankCards ( 24,);
// const t25 = new TankCards ( 25,);
// const t26 = new TankCards ( 26,);
// const t27 = new TankCards ( 27,);
// const t28 = new TankCards ( 28,);
// const t29 = new TankCards ( 29,);
// const t30 = new TankCards ( 30,);

// let tanksDeck = [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30];


let inPlayDeck = weaponsDeck
// let inPlayDeck = tanksDeck


// console.log(tanksDeck);


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


let playerOneDeck = [];

let playerTwoDeck = [];


const shuffle = () => {
    let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
    
    while (array.length > 0) {
        let tempIndex = 0;
        let heldNumber = array[tempIndex];

        tempIndex = Math.floor((Math.random() * array.length));
        heldNumber = array[tempIndex];
        array.splice(tempIndex, 1);
        playerOneDeck.push(inPlayDeck[heldNumber]);

        tempIndex = Math.floor((Math.random() * array.length));
        heldNumber = array[tempIndex];
        array.splice(tempIndex, 1);
        playerTwoDeck.push(inPlayDeck[heldNumber]);
    } 
}

shuffle();





//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

console.log('Player One deck')
console.log(playerOneDeck);
console.log('Player Two deck')
console.log(playerTwoDeck);




//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


let holdingCard = [];




