// Function to handle the rating interaction
function handleRatingClick(event) {
    const star = event.target;
    if (star.matches('.rating i')) {
        const product = star.closest('.product');
        const stars = product.querySelectorAll('.rating i');
        const starIndex = Array.from(stars).indexOf(star);

        if (starIndex >= 0) {
            stars.forEach((s, index) => {
                if (index <= starIndex) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        }
    }
}

// Add a click event listener to the main container for event delegation
const productContainer = document.querySelector('.product-listings');
if (productContainer) {
    productContainer.addEventListener('click', handleRatingClick);
}
// Initialize an empty shopping cart
const shoppingCart = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price,
        quantity: 1,
    };
    shoppingCart.push(item);
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartTableBody = document.querySelector(".shopping-cart tbody");
    cartTableBody.innerHTML = "";

    shoppingCart.forEach((item) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${item.name}</td>
            <td>Description of Product</td>
            <td>Ksh ${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>Ksh ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartTableBody.appendChild(newRow);
    });
}

// Function to remove an item from the cart
function removeFromCart(productName) {
    const index = shoppingCart.findIndex((item) => item.name === productName);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        updateCartUI();
    }
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
        const productName = event.target.dataset.product;
        const price = parseFloat(event.target.dataset.price);
        addToCart(productName, price);
    });
});
