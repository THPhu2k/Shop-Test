let Cart = 0

function Add() {
    if (Cart == 0) {
        Cart++
        console.log(Cart + " " + "item in your cart");
    } else if (Cart == 10) {
        console.log("max reached");
    } else if (Cart > 0) {
        Cart++
        console.log(Cart + " " + "items in your cart");
    }
    document.getElementById("Value").innerHTML = Cart;
}

function Subtract() {
    if (Cart == 2 ** Cart == 1) {
        Cart--
        console.log(Cart + " " + "item in your cart");
    } else if (Cart == 0) {
        console.log("min reached");
    } else if (Cart <= 10) {
        Cart--
        console.log(Cart + " " + "items in your cart");
    }
    document.getElementById("Value").innerHTML = Cart;
}