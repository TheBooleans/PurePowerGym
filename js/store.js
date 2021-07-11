'use strict'
// alert('hi');
Item.mainArr = []
const addTower = document.getElementById('addTower');
const addCycling = document.getElementById('addCycling');
const addTreadmill = document.getElementById('addTreadmill');
const addbench = document.getElementById("bench")
const addBodyBoost = document.getElementById("BodyBoost")
const addprotein = document.getElementById("protein")
const Bottle = document.getElementById("Bottle")
const bag = document.getElementById("bag")
const total = document.getElementById("total")
function Item(name, price, url, count) {
    this.name = name
    this.price = price
    this.img = url
    this.count = 0
    Item.mainArr.push(this)
}

new Item('Power Tower', '120', '../Image/store/1111.jpg')
new Item('Indoor Cycling Bike Stationary', '250', "../Image/store/333.jpg")
new Item('Treadmill', ' 185', "../Image/store/tredmill.jpg")
new Item('Adjustable Weight Bench', '80', '../Image/store/Adjustable Weight Bench.jpg')
new Item('Vegan Brain & Body Boost', '40', "../Image/store/brain and body.jpg")
new Item('Whey Protein Powder', '30', "../Image/store/why protein.jpg")
new Item('Shaker Bottle', '15', "../Image/store/bottle.jpg")
new Item('Gym Bag', '25', "../Image/store/bag.jpg")


// const itemi = document.getElementById(`${Item.mainArr[0].name}`);
// console.log(itemi);
let saved = [];
let savedData = [];

let totalPrice = 0;
function addingToCart(i) {

    if (Item.mainArr[i].count == 0) {
        let itemname = document.createElement('li')
        itemname.setAttribute('id', `${Item.mainArr[i].name}`)
        const itemul = document.getElementById('testing');
        itemul.appendChild(itemname)
    }

    Item.mainArr[i].count++

    saved = JSON.stringify(Item.mainArr[i]);
    localStorage.setItem(`${Item.mainArr[i].name}`, saved);

    function renderCart(i) {
        const itemi = document.getElementById(`${Item.mainArr[i].name}`);
        savedData[i] = JSON.parse(localStorage.getItem(`${Item.mainArr[i].name}`));
        console.log(savedData);
        itemi.textContent = `${savedData[i].name} price: ${savedData[i].price}$ count: ${savedData[i].count} `
        let totalItem = savedData[i].price * savedData[i].count - (savedData[i].price * (savedData[i].count-1))
        totalPrice = totalPrice + totalItem
        const total = document.getElementById('totalplace');
    total.textContent = totalPrice
    }
    renderCart(i);


}

function findingTotal() {
    const total = document.getElementById('totalplace');
    total.textContent = totalPrice
}
console.log(savedData);

// for (let i = 0; i < Item.mainArr.length; i++) {
// if (savedData[i].count != 0){
//    renderCart(i);
//    Item.mainArr[i].count =savedData[i].count
// }
// }

addTower.addEventListener('click', function () { addingToCart(0) });
addCycling.addEventListener('click', function () { addingToCart(1) });
addTreadmill.addEventListener('click', function () { addingToCart(2) });
addbench.addEventListener('click', function () { addingToCart(3) });
addBodyBoost.addEventListener('click', function () { addingToCart(4) });
addprotein.addEventListener('click', function () { addingToCart(5) });
Bottle.addEventListener('click', function () { addingToCart(6) });
bag.addEventListener('click', function () { addingToCart(7) });
total.addEventListener('click', findingTotal);












        // const itemi = document.createElement('li');
        // const itemp = document.createElement('li');
        // const itemcount = document.createElement('li');
        // cartplace.appendChild(itemi);
        // cartplace.appendChild(itemp);
        // cartplace.appendChild(itemcount);
        // let savedData = JSON.parse(localStorage.getItem(`${Item.mainArr[i].name}`));
        // console.log(savedData.name)
        // itemi.textContent = savedData.name
        // itemp.textContent = savedData.price
        // itemcount.textContent = savedData.count