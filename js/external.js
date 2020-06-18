console.log("Hello from external JavaScript");
alert('Welcome to my Website!');

// Prompt user for their favorite color...
let color = prompt('What is your favorite color?');
alert("Great, " + color + " is my favorite color too!");

// You have rented some movies for your kids:...
var m1 = prompt("How many days have you rented The Little Mermaid?")
var m2 = prompt("How many days have you rented Brother Bear?");
var m3 = prompt("How many days have you rented Hercules");
var total = (parseInt(m1) + parseInt(m2) + parseInt(m3)) * 3;
alert("Your total cost is: $" + total);

// Suppose you're working as a contractor for 3 companies:... 6 - 4 - 10
var g = prompt("How many hours did you work for Google this week?");
var a = prompt("How many hours did you work for Amazon this week?");
var f = prompt("How many hours did you work for Facebook this week?");
var gPay = 400;
var aPay = 380;
var fPay = 350;
var totalPay = (parseInt(g) * gPay) + (parseInt(a) * aPay) + (parseInt(f) * fPay);
alert("You will receive $" + totalPay + " in payment this week.");

// A student can be enrolled in a class..
// var classFill = prompt("Is the class full? Answer 'yes' or 'no'.");
// var noConflict = prompt("Are there scheduling conflicts? Answer 'yes' or 'no'.");
let isClassOpen = confirm("Is there romm in the class?");
let isScheduleOpen = confirm("Does this class weork with your schedule?");
alert("You may register: " + (isClassOpen && isScheduleOpen));

// A product offer can be apllied only if...
let numberItemsPurchased = parseInt(prompt("Hoy many items did you purchase?"));
let isOfferExpired = confirm("Press ok if the offer is not expired");
let isPremiumMember = confirm("Press ok if you are a premium member");
alert("Offer Applied: " + isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember));









