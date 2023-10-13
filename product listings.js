// Define a cart array to store cart items
let cart = [];

// Function to add an item to the cart
function addToCart(product, price) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.product === product);

    if (existingItem) {
        // If it's already in the cart, increment the quantity
        existingItem.quantity++;
    } else {
        // If it's not in the cart, add it as a new item
        cart.push({ product, price, quantity: 1 });
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartTable = document.querySelector('tbody');
    cartTable.innerHTML = '';

    // Loop through cart items and populate the table
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.product}</td>
            <td>Description of ${item.product}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;

        cartTable.appendChild(row);
    });
}

// Example usage:
// Call the addToCart function with product name and price when the "Add to Cart" button is clicked.
// Example: addToCart("Product 1", 50.00);
