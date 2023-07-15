document.addEventListener("DOMContentLoaded", function() {
    genTicket();
  });
  
  function genTicket() {
    var ticketReady = document.getElementById("ticket-ready");
    var ticketTotal = document.getElementById("ticket-total");
  
    // Verificar si hay productos en el carrito
    if (carrito.length === 0) {
      ticketReady.innerHTML = "<li>The cart is empty</li>";
      ticketTotal.innerText = "Total: $0";
      return;
    }
  
    // Generar la lista de productos en la factura
    carrito.forEach(function(product) {
      var ticketItem = document.createElement("li");
      ticketItem.innerText = product.name + " - $" + product.price;
      ticketReady.appendChild(ticketItem);
    });
  
    // Mostrar el total de la factura
    ticketTotal.innerText = "Total: $" + total;
  }
  
