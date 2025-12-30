const grid = document.getElementById('product-grid');
const cartList = document.getElementById('cart-list');
let cart = [];

function render() {
    products.forEach((p, index) => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <div class="title">${p.name}</div>
                <div class="btn" onclick="addToCart(${index})">Add to Cart</div>
            </div>`;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    cartList.innerHTML = "";
    cart.forEach(item => {
        cartList.innerHTML += `<div class="cart-item"><span>${item.name}</span><span>$${item.price}</span></div>`;
    });
}

function toggleCart(open) {
    document.getElementById('bad-cart').className = open ? 'cart-sidebar open' : 'cart-sidebar';
}

render();