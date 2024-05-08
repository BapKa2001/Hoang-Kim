document.addEventListener('DOMContentLoaded', function() {
    const viewCartBtn = document.getElementById('viewCartBtn');
    const modal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close');
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');
    const cartItemsList = document.getElementById('cartItems');

    viewCartBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = btn.getAttribute('data-name');
            const itemPrice = btn.getAttribute('data-price');
            const item = document.createElement('li');
            item.textContent = `${itemName} - $${itemPrice}`;
            cartItemsList.appendChild(item);
        });
    });
});
