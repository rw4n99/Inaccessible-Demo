const grid = document.getElementById('product-grid');
let cart = [];

// 1. Unstoppable Banner
setInterval(() => {
    const slides = document.querySelectorAll('.banner-slide');
    let active = Array.from(slides).findIndex(s => s.classList.contains('active'));
    slides[active].classList.remove('active');
    slides[(active + 1) % slides.length].classList.add('active');
}, 3000);

// 2. Rendering (Non-semantic)
products.forEach((p, idx) => {
    grid.innerHTML += `<div class="card"><img src="${p.img}"><h3>${p.name}</h3><div class="btn" onclick="addToCart(${idx})">Add to Cart</div></div>`;
});

function addToCart(idx) {
    cart.push({ ...products[idx], cartId: Date.now() + Math.random() });
    updateBadUI();
    toggleCart(true);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateBadUI();
}

function updateBadUI() {
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('cart-header').innerText = `Cart (${cart.length}) - $${total}`;
    document.getElementById('bad-total').innerText = `Total: $${total}`;
    document.getElementById('cart-list').innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #ccc">
            <span>${i.name}</span>
            <span onclick="removeFromCart(${i.cartId})" style="color:red; cursor:pointer;">X</span>
        </div>`).join('');
}

// 3. Bad Error Handling
function submitBadOrder() {
    const n = document.getElementById('bad-name');
    const c = document.getElementById('bad-card');
    n.style.border = "1px solid #ddd";
    c.style.border = "1px solid #ddd";

    if(n.value.trim() === "" || c.value.trim() === "") {
        if(n.value.trim() === "") n.style.border = "2px solid red";
        if(c.value.trim() === "") c.style.border = "2px solid red";
        alert("Error! Please fix the red fields."); 
    } else {
        alert("Order Placed");
    }
}

function toggleCart(o) {
    document.getElementById('bad-cart').classList.toggle('open', o);
    document.getElementById('bad-overlay').classList.toggle('open', o);
}
function toggleCheckout(o) { if(o) toggleCart(false); document.getElementById('bad-checkout').classList.toggle('open', o); }