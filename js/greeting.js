// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'John Doe';

// Here you can change your greetings
var gree1 = 'pretty late.';
var gree2 = 'good morning!';
var gree3 = 'hi.';
var gree4 = 'hello.';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 10) {
    document.getElementById('greetings').innerText = gree2;
} else if (hour >= 10 && hour < 17) {
    document.getElementById('greetings').innerText = gree3;
} else  {
    document.getElementById('greetings').innerText = gree4;
}
