var cart = [];
var total = 0;

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  var cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach(function(product) {
    var cartItem = document.createElement("li");
    cartItem.innerText = product.name + " - $" + product.price;
    cartList.appendChild(cartItem);
  });

  var totalElement = document.getElementById("total");
  totalElement.innerText = "Total: $" + total;
}

function emptyCart() {
  cart = [];
  total = 0;
  updateCart();
}


function genTicket() {
  // Lógica para generar la factura

  // Redireccionar a la página de la factura
  window.location.href = "factura.html";
}