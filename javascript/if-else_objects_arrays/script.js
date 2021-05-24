
const age = 29;
const isFemale = false;
const driverStatus = 'geenBob';

if (age >= 18) {

    console.log("U mag betreden")
    
    if (isFemale) {
        console.log('customer is female')
    }
    else {
        console.log('customer is not female')
    }
    if (driverStatus == 'bob') {
        console.log('u mag naar huis rijden')
    }
    else {
        console.log('u bent geen bob en mag niet rijden')
    }
} 
else if (age < 18) {
    console.log("U bent nog te jong u word vriendelijk verzocht te vertrekken")
};