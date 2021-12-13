// If in js has this structure
// Null 

var x = -3;

if (x > 0) {
    console.log(`The value of x is: ${x}`);
} else {
    console.log(`The value of x is smaller then 0`);
}


// Switch in js has this structure

var date = new Date();
    day =  date.getDay();

switch (day) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    }

