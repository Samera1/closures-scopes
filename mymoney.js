//function moneyBox(coins){
    //let saveCoins=0;
    //saveCoins += coins;
   // console.log('MoneyBox: $${saveCoins}');


//}

moneyBox(5);
moneyBox(5);


// Arreglo con Closure

function moneyBox(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $ ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

// Putuacion de Juego 

function scorePlay1(){
    let scorelife1 =4000;
    function atackscore1(atack){
        scorelife1 -= atack;
        console.log(`LifeUser1: ${scorelife1}`);
    }
    return atackscore1;
}

const Life1 = scorePlay1();
Life1(1150);
Life1(2250);

function scorePlay2(){
    let scorelife2 =4000;
    function atackscore2(atack){
        scorelife2 -= atack;
        console.log(`LifeUser2: ${scorelife2}`);
    }
    return atackscore2;
}

const Life2 = scorePlay2();
Life2(1200);
Life2(520);

//repasar return, closures
