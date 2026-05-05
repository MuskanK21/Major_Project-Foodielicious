// Load order details from localStorage
function loadOrderConfirmation() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    
    if (!lastOrder) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Display Order ID
    document.getElementById('orderId').textContent = `Order #${lastOrder.orderId}`;
    
    // Display items
    const itemsContainer = document.getElementById('orderItemsList');
    itemsContainer.innerHTML = lastOrder.items.map(item => `
        <div class="order-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    // Display payment summary
    const paymentContainer = document.getElementById('paymentSummary');
    paymentContainer.innerHTML = `
        <div class="payment-row">
            <span>Subtotal:</span>
            <span>₹${lastOrder.subtotal}</span>
        </div>
        <div class="payment-row">
            <span>Delivery Fee:</span>
            <span>₹${lastOrder.deliveryFee}</span>
        </div>
        <div class="payment-row total">
            <span>Total Paid:</span>
            <span>₹${lastOrder.total}</span>
        </div>
        <div class="payment-row">
            <span>Payment Method:</span>
            <span>Cash on Delivery</span>
        </div>
    `;
}

// Download invoice
function downloadInvoice() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
    const invoice = `FOODELICIOUS INVOICE
    --------------------
    Order ID: ${lastOrder.orderId}
    Date: ${new Date().toLocaleString()}
    
    Items:
    ${lastOrder.items.map(item => `- ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n')}
    
    Subtotal: ₹${lastOrder.subtotal}
    Delivery: ₹${lastOrder.deliveryFee}
    Total: ₹${lastOrder.total}
    
    Thank you for ordering with Foodelicious!`;
    
    alert('Invoice downloaded! Check console for details.\n\n' + invoice);
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = total;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadOrderConfirmation();
});