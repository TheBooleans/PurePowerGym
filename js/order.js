'use strict'
let listArray = [];
function getData() {
  let GettingData = localStorage.getItem('ShopCart')
  let DataPrase = JSON.parse(GettingData)
  if (DataPrase !== null) {
    listArray = DataPrase
  }
}
let Total
function getTotal() {
  Total = localStorage.getItem('Total')
}
getTotal()
getData()
let render = document.getElementById('list');
let div = document.createElement('div');
div.id = 'productslist';
render.appendChild(div);
let ul = document.createElement('ul')
ul.id = 'itemsUl';
div.appendChild(ul)
for (let i = 0; i < listArray.length; i++) {
  let li = document.createElement('li')
  ul.appendChild(li)
  let image = document.createElement('img')
  image.setAttribute('src', `${listArray[i][2]}`)
  li.appendChild(image)
  let name = document.createElement('h2')
  li.appendChild(name)
  name.textContent = listArray[i][0]
  let price = document.createElement('h3')
  li.appendChild(price)
  price.textContent = `price : ${listArray[i][1]}`
}
let totalprice = document.createElement('h1')
div.appendChild(totalprice)
totalprice.textContent = `Total: ${Total}`