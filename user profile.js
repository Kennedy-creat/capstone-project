// Function to save edited user information to local storage
function saveUserInfo() {
    const username = document.getElementById('username').textContent;
    const email = document.getElementById('email').textContent;
    const address = document.getElementById('address').textContent;
    const phone = document.getElementById('phone').textContent;

    // Save the user information to local storage or send it to the server
    // For simplicity, we'll use local storage in this example
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('phone', phone);
}

// Event listeners for saving edited user information
document.getElementById('username').addEventListener('blur', saveUserInfo);
document.getElementById('email').addEventListener('blur', saveUserInfo);
document.getElementById('address').addEventListener('blur', saveUserInfo);
document.getElementById('phone').addEventListener('blur', saveUserInfo);

// Function to load user information from local storage
function loadUserInfo() {
    const username = localStorage.getItem('username') || 'John Doe';
    const email = localStorage.getItem('email') || 'john.doe@example.com';
    const address = localStorage.getItem('address') || '123 Main Street';
    const phone = localStorage.getItem('phone') || '(123) 456-7890';

    document.getElementById('username').textContent = username;
    document.getElementById('email').textContent = email;
    document.getElementById('address').textContent = address;
    document.getElementById('phone').textContent = phone;
}

// Call the function to load user information when the page loads
loadUserInfo();
