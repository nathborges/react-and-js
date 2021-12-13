//Write a loop that will display any number between 1 - 10 that is a multiple of both 3 and 5;

var multiples = [];

for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        multiples.push(i);
    }
}

console.log(`The multiples of 3 and 5 are ${multiples}.`);