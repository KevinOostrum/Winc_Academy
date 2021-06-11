function assignGrade(score) {
    if (score > 90) {
        return 'an A';
    } else if (score > 80) {
        return 'a B';
    } else if (score > 70) {
        return 'a C';
    } else if (score > 65) {
        return 'a D';
    } else {
        return 'an E';
    }
}

for (let i = 100; i >= 60; i--) {
console.log(`for ${i} points, you get ${assignGrade(i)}`);
}