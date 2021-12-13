//Write a loop that will display fibonacci sequence

var number = 0,
    lastNumber,
    nextNumber = 1;

while (number <= 1000) {
    console.log(number);
    lastNumber = number;
    number = nextNumber;
    nextNumber = number + lastNumber;    
}