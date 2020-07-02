// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//



// let showMultiplicationTable = function (n){
//     let answer = 0;
//     for(let i = 1; i <=10; i++){
//         answer += n;
//         console.log( n + " x " + i + " = " + answer);
//     }
// }
let showMultiplicationTable = function (n){
    for(let i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + (i*num));
    }
}
console.log(showMultiplicationTable(7));


// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console whether
// each number is odd or even. For example:
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd


for (let i=0;i<10;i++){
    let random = Math.floor(Math.random()*181) + 20;
    if (random%2===0){
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
for (let i = 1; i<=9;i++){
    let str = "";
    for (let j=1; j<i;j++){
        str +=1;
    }
    console.log(str);
}



// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i=100; i>0; i-=5){
    console.log(i);
}





















//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//
//
//// This is how you get a random number between 50 and 100
//var allCones = Math.floor(Math.random() * 50) + 50;
//// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;
//The output should be similar to the following:
//
//5 cones sold...  // if there are enough cones
//Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//Yay! I sold them all! // If there are no more cones
