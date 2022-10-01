/* ----- */
/* Apple */
/* ----- */
let Apple = 0

function AddApple() {
    if (Apple == 0) {
        Apple++
        console.log(Apple + " " + "apple in your cart");
    } else if (Apple == 10) {
        console.log("max reached");
    } else if (Apple > 0) {
        Apple++
        console.log(Apple + " " + "apples in your cart");
    }
    document.getElementById("AppleValue").innerHTML = Apple;
}

function SubtractApple() {
    if (Apple == 2 ** Apple == 1) {
        Apple--
        console.log(Apple + " " + "apple in your cart");
    } else if (Apple == 0) {
        console.log("min reached");
    } else if (Apple <= 10) {
        Apple--
        console.log(Apple + " " + "apples in your cart");
    }
    document.getElementById("AppleValue").innerHTML = Apple;
}

/* ----- */
/* Melon */
/* ----- */
let Melon = 0

function AddMelon() {
    if (Melon == 0) {
        Melon++
        console.log(Melon + " " + "melon in your cart");
    } else if (Melon == 10) {
        console.log("max reached");
    } else if (Melon > 0) {
        Melon++
        console.log(Melon + " " + "melons in your cart");
    }
    document.getElementById("MelonValue").innerHTML = Melon;
}

function SubtractMelon() {
    if (Melon == 2 ** Melon == 1) {
        Melon--
        console.log(Melon + " " + "melon in your cart");
    } else if (Melon == 0) {
        console.log("min reached");
    } else if (Melon <= 10) {
        Melon--
        console.log(Melon + " " + "melons in your cart");
    }
    document.getElementById("MelonValue").innerHTML = Melon;
}

/* ----- */
/* Mango */
/* ----- */
let Mango = 0

function AddMango() {
    if (Mango == 0) {
        Mango++
        console.log(Mango + " " + "mango in your cart");
    } else if (Mango == 10) {
        console.log("max reached");
    } else if (Mango > 0) {
        Mango++
        console.log(Mango + " " + "mangos in your cart");
    }
    document.getElementById("MangoValue").innerHTML = Mango;
}

function SubtractMango() {
    if (Mango == 2 ** Mango == 1) {
        Mango--
        console.log(Mango + " " + "mango in your cart");
    } else if (Mango == 0) {
        console.log("min reached");
    } else if (Mango <= 10) {
        Mango--
        console.log(Mango + " " + "mangos in your cart");
    }
    document.getElementById("MangoValue").innerHTML = Mango;
}