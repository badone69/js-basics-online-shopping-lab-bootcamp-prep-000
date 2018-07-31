var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {itemName: item, itemPrice: (Math.random() * 100)}
 cart.push(object)
 return item +  " has been added to your cart."
}

function viewCart() {
var itemprices = []
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    itemprices.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
  }
  else if (cart.length === 2) {
  itemprices.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
  itemprices.push(` and ${cart[1].itemName} at $${cart[1].itemPrice}`)
  itemprices.join()
     } 
  else if (cart.length === 3) {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        itemprices.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else if (i === 0) {
      itemprices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else {
      itemprices.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      itemprices.join(`,`)
    }
  }
  return `In your cart, you have ${itemprices}.`

}

function total() {
   var cartTotal = 0
  for (var i = 0 ; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice; 
  }
  return cartTotal
}

function removeFromCart(item) {
 let cart = getCart()
 for (var i = 0; i < cart.length; i++) {
   if (item === cart[i].itemName) {
   cart.splice(i , i)
   return cart
  } 
  }
  return 'That item is not in your cart.'
 }
 
 function removeFromCart(item) {
  let cart = getCart()
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName === item ){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}