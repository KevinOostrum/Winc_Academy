// if statements deel 1
const age = 24;
const firstName = 'tjeerdverkeerd';
const totalAmount = 51;

// deel 1
if (age > 18 && age <= 25) {
    console.log('je krijgt 50% korting!');
 }
    else {
        console.log('je betaald de volle mep!');
    }

// deel 2
if (firstName === 'sarah' || firstName === 'bram') {
        console.log('we bestaan 50 jaar en je krijgt een gratis biertje!');
    } else if (firstName != 'sarah'||'bram') {
        console.log ('helaas geen gratis bier voor jou');
    }

// deel 3
if (totalAmount < 25) {
    console.log('als meer uitgeeft krijg je een gratis cadeau bij je bestelling');
} else if (totalAmount >= 25 && totalAmount < 50 ) {
        console.log('je krijgt een gratis portie bitterballen'); } 
        else if (totalAmount >= 50 && totalAmount < 100) {
        console.log('je krijgt een gratis portie nachos'); } 
        else if (totalAmount >= 100) {
        console.log('je krijgt een gratis fles champagne'); }