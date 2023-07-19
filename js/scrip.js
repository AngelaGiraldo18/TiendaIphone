let cartItems = [];

function addToCart() {
  const product1Qty = parseInt(document.getElementById('product1').value);
  const product2Qty = parseInt(document.getElementById('product2').value);
  const product3Qty = parseInt(document.getElementById('product3').value);

  // Clear previous items
  cartItems = [];

  if (product1Qty > 0) {
    cartItems.push({ name: 'Producto 1', price: 2500000, quantity: product1Qty });
  }
  if (product2Qty > 0) {
    cartItems.push({ name: 'Producto 2', price: 2800000, quantity: product2Qty });
  }
  if (product3Qty > 0) {
    cartItems.push({ name: 'Producto 3', price: 3800000, quantity: product3Qty });
  }

  showCart();
}

function showCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';

  let total = 0;
  for (const item of cartItems) {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Cantidad: ${item.quantity} - Subtotal: $${itemTotal}`;
    cartList.appendChild(listItem);
  }

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total a pagar: $${total}`;
}

function checkout() {
  if (cartItems.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de pagar.');
  } else {
    alert('¡Gracias por tu compra! Total a pagar: $' + calculateTotal());

  }
}

function calculateTotal() {
  let total = 0;
  for (const item of cartItems) {
    total += item.price * item.quantity;
  }
  return total;
}
