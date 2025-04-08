const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const product = button.closest('.pro');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});