//welcome message
var user = 'David';
var salutation = 'Hello, '
var greeting = salutation + user + '! Here are the latest Sunflower Seed reviews.'
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 2.99,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl1 = document.getElementById('price1'),
    studentPriceEl1 = document.getElementById('student-price1');

    priceEl2 = document.getElementById('price2'),
    studentPriceEl2 = document.getElementById('student-price2');

    priceEl3 = document.getElementById('price3'),
    studentPriceEl3 = document.getElementById('student-price3');

priceEl1.textContent = price.toFixed(2);
studentPriceEl1.textContent = studentPrice.toFixed(2);

priceEl2.textContent = price.toFixed(2);
studentPriceEl2.textContent = studentPrice.toFixed(2);

priceEl3.textContent = price.toFixed(2);
studentPriceEl3.textContent = studentPrice.toFixed(2);