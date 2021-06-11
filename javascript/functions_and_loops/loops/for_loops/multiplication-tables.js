// Multiplication tables
const table = 9
for (i = 1; i <= 10; i++){
    const result = i * table;
    console.log(`${i} * ${table} = ${result}`);}

// Bonus assignment, make tables 1 - 10 log to console
for (table = 1; table <= 10; table++) {
    for (i = 1; i <= 10; i++) {
        const result = table * i;
        console.log(`${i} * ${table} = ${result}`);
    }
}