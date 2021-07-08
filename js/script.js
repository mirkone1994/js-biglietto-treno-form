//form
var passengerName = document.getElementById("name");
var km = document.getElementById("km");
var age = document.getElementById("age");
var button = document.getElementById("validate-ticket");
//ticket
var passenger = document.getElementById("passenger");
var sale = document.getElementById("sale");
var train = document.getElementById("train");
var nTrain = document.getElementById("ntrain");
var priceDisplay = document.getElementById("price");
//click
button.addEventListener("click", function () {
    var nameValue = passengerName.value;
    console.log(nameValue);
    var kmValue = km.value;
    var ageValue = age.value;
    var price = 0.21 * kmValue; 
    var saleDisplay = "Tariffa over 18";
    if (ageValue === "under") {
        price *= 0.8;
        saleDisplay = "Tariffa under 18"
    } else if (ageValue === "over65") {
        price *= 0.6;
        saleDisplay = "Tariffa Over 65"
    }
    price = "Euro " + price.toFixed(2);
    var trainNumber = Math.floor(Math.random() * 8) + 1;

    passenger.innerHTML = nameValue;
    sale.innerHTML = saleDisplay;
    train.innerHTML = trainNumber;
    nTrain.innerHTML = "28179"
    console.log(train);
    priceDisplay.innerHTML = price;
    console.log(price);
});
