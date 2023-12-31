let cartItems = [];

function addToCart() {
  const product1Qty = parseInt(document.getElementById('product1').value);
  const product2Qty = parseInt(document.getElementById('product2').value);
  const product3Qty = parseInt(document.getElementById('product3').value);
  const product4Qty = parseInt(document.getElementById('product4').value);


  // Clear previous items
  cartItems = [];

  if (product1Qty > 0) {
    cartItems.push({ name: 'Iphone 11 Reacondiconado', price: 2000000, quantity: product1Qty });
  }
  if (product2Qty > 0) {
    cartItems.push({ name: 'Iphone 11', price: 2500000, quantity: product2Qty });
  }
  if (product3Qty > 0) {
    cartItems.push({ name: 'Iphone 11 promax', price: 3800000, quantity: product3Qty });
  }
  if (product4Qty > 0) {
    cartItems.push({ name: 'Iphone 13', price: 6500000, quantity: product4Qty });
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
