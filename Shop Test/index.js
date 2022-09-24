// var test = localStorage.setItem("nub","T series")
// var test = localStorage.getItem("nub")
// console.log("nub is",test)

// let Identity = {
//     name: "Connor",
//     age: "28",
//     gen: "Android",
//     ip: "28stabwounds.net",
// }

// StringedStatus = JSON.stringify(Identity)
// localStorage.setItem("didn't give him a chance",StringedStatus)

// var Force = localStorage.getItem(Identity)
// var Dialog = JSON.parse(Force)
// console.log(Identity)

let GoodsInStock = {
    shopName: "Goods in Stock",
    stock1: "apple",
    stock2: "melon",
    stock3: "mango",
    owner: "THPhu2k",
}

ShopStatus = JSON.stringify(GoodsInStock)
localStorage.setItem(GoodsInStock.shopName,ShopStatus)

var Force = localStorage.getItem(GoodsInStock)
var Dialog = JSON.parse(Force)
console.log("Welcome to" + " " + GoodsInStock.shopName + " " + "you need" + " " + GoodsInStock.stock1 + "s" + "?"
+ " " + GoodsInStock.stock2 + "s" + "? Or maybe some"
+ " " + GoodsInStock.stock3 + "s" + "?"
+ " " + "It has been" + " " + GoodsInStock.owner + " " + "and we hope you enjoy your shopping at" + " " + GoodsInStock.shopName)

