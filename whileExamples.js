var randNum,
    counter = 0;

while (randNum !== 5) {
    randNum = Math.floor(Math.random() * 10);
    counter++;
    console.log("Mais um loop");
}
console.log(`It was necessary to draw ${counter} times to reach number 5`);

// Find where the third B is in the sentences

var sentence = "The brown bear jumped over the Big fence!",
    count =  0,
    qntOfB = 0,
    loc = 0;

while (qntOfB != 3) {
    sentence = sentence.toLowerCase();
    loc = sentence.indexOf("b", loc);
    loc++;
    qntOfB++;
}

console.log(`The third B is on the ${loc--} position.`);

