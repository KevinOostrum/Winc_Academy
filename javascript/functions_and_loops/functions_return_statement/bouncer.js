
const clubEntry = function(age, space) {
    if (age < 18) { return 'this is a club for adults' } 
    else if (space >75) {return "it's too busy now, come back later"}
    else if (space < 75) { return 'come in'}
}

const canIcomeIn = clubEntry(19, 76)
console.log(canIcomeIn)
