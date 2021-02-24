/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

//console.log(cart);
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  
  //console.log(cart);
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
 
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let tbody=document.createElement('tbody');
table.appendChild(tbody);
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
 
  for (let i = 0;i< cart.items.length; i++) {
    let trEl = document.createElement("tr");
    tbody.appendChild(trEl);
    let tdDeletelink, tdQuantity, tdItem;
    tdDeletelink = document.createElement("td");
    tdQuantity = document.createElement("td");
    tdItem = document.createElement("td");

    trEl.appendChild(tdDeletelink);
    tdDeletelink.textContent = "X";

    trEl.appendChild(tdQuantity);
    tdQuantity.textContent = `${cart.items[i].quantity}`;

    trEl.appendChild(tdItem);
    tdItem.textContent = `${cart.items[i].product}`;

    // console.log(cart.items[i].product)
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  event.preventDefault();
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

 // console.log(event);
}

// This will initialize the page and draw the cart on screen
renderCart();
