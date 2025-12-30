const grid = document.getElementById('product-grid');
let cart = [];

// 1. Unstoppable Banner
setInterval(() => {
    const slides = document.querySelectorAll('.banner-slide');
    let active = Array.from(slides).findIndex(s => s.classList.contains('active'));
    slides[active].classList.remove('active');
    slides[(active + 1) % slides.length].classList.add('active');
}, 3000);

// 2. Dynamic Shop
products.forEach((p, idx) => {
    grid.innerHTML += `<div class="card"><img src="${p.img}"><div class="title">${p.name}</div><div class="btn" onclick="addToCart(${idx})">Add</div></div>`;
});

function addToCart(idx) {
    cart.push(products[idx]);
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-info').innerText = `Cart (${cart.length}) - $${total}`;
    document.getElementById('cart-list').innerHTML = cart.map(i => `<div class="cart-item"><span>${i.name}</span></div>`).join('');
    toggleCart(true);
}

function submitOrder() {
    const card = document.getElementById('bad-card');
    if(card.value.length < 16) {
        card.style.border = "2px solid red";
        alert("Error!");
    } else {
        alert("Success!");
    }
}

function toggleCart(o) { document.getElementById('bad-cart').classList.toggle('open', o); }
function toggleCheckout(o) { document.getElementById('bad-checkout').classList.toggle('open', o); }
function setView(v) { document.getElementById('product-grid').className = (v === 'list') ? 'grid list-view' : 'grid'; }