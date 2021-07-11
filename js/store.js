'use strict'

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


// let infoArray = [];

// function Itemsinfo(name, price){
//     this.name =  name;
//     this.price = price

//     infoArray.push(this);
// }
// console.log(infoArray.length);

// new Itemsinfo('Power Tower', '$120')
// new Itemsinfo('Indoor Cycling Bike Stationary', '$120')
// new Itemsinfo('Treadmill', '$185')
// new Itemsinfo('Adjustable Weight Bench' , '$120');
// new Itemsinfo('Vegan Brain & Body Boost' , '$40');
// new Itemsinfo('Whey Protein Powder' , '$30');
// new Itemsinfo('Shaker Bottle' , '$15');
// new Itemsinfo('Gym Bag' , '$25');


// console.log(infoArray);






// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');
// let btn6 = document.getElementById('btn6');
// let btn7 = document.getElementById('btn7');
// let btn8 = document.getElementById('btn8');

// btn1.addEventListener('click', handleClick)
// btn2.addEventListener('click', handleClick)
// btn3.addEventListener('click', handleClick)
// btn4.addEventListener('click', handleClick)
// btn5.addEventListener('click', handleClick)
// btn6.addEventListener('click', handleClick)
// btn7.addEventListener('click', handleClick)
// btn8.addEventListener('click', handleClick)



// let ul = document.getElementById('itemsUL')
// function handleClick(event){
//     for (let i = 0; i < 8; i++) {
//         let itemLi = document.createElement('li');
//         ul.appendChild(itemLi);
//         itemLi.textContent = infoArray[i].name + 'Price = ' + infoArray[i].price;
        
//     }
    
    
    

    


// }


// function ready() {
    // var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    // for (var i = 0; i < removeCartItemButtons.length; i++) {
    //     var button = removeCartItemButtons[i]
    //     button.addEventListener('click', removeCartItem)
    // }

    // var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    // for (var i = 0; i < quantityInputs.length; i++) {
    //     var input = quantityInputs[i]
    //     input.addEventListener('change', quantityChanged)
    // }

//     var addToCartButtons = document.getElementsByClassName('btn')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }

//     document.getElementsByClassName('btn')[0].addEventListener('click', purchaseClicked)
// }

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }
ready()
function ready() {
    var addToCartButtons = document.getElementsByClassName('btnshop')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
  
    document.getElementsByClassName('purchasebtn')[0].addEventListener('click', purchaseClicked)
 
}

  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
  }

  function purchaseClicked() {
  
    var cartItems = document.getElementsByClassName('cart-items')[0]
    alert('Thank you for your purchase')
    while (cartItems.hasChildNodes()) {

        cartItems.removeChild(cartItems.firstChild)
        
    }
    updateCartTotal()
  }
  function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('src')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
  }
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
  }
  
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
  
  function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
  }













  