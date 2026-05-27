function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartItems");
let total = 0;

container.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price * item.qty;

container.innerHTML += `
<div class="item">
<img src="${item.image}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<p>Qty: ${item.qty}</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart"));
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();

}

function goCheckout(){
window.location.href = "checkout.html";
}
