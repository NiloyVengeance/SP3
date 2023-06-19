document.addEventListener('DOMContentLoaded', () => {
  // Login functionality
  const loginContainer = document.getElementById('login-container');
  const profileLink = document.getElementById('profile-link');

  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    loginContainer.style.display = 'none';
    profileLink.innerText = `Profile (${loggedInUser})`;
  } else {
    loginContainer.style.display = 'flex';
    profileLink.innerText = 'Profile';
  }

  document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication here (e.g., check against a database)
    // For simplicity, just store the logged-in user in local storage
    localStorage.setItem('loggedInUser', username);

    loginContainer.style.display = 'none';
    profileLink.innerText = `Profile (${username})`;
  });

  // Search functionality
  document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    // Perform search functionality (e.g., filter products based on search term)
    console.log('Searching for:', searchTerm);
  });

  // Contact information functionality
  const contactNumbers = document.querySelectorAll('.contact-number');
  contactNumbers.forEach((contactNumber) => {
    contactNumber.addEventListener('click', () => {
      const phoneNumber = contactNumber.innerText;
      console.log('Contact number clicked:', phoneNumber);
      // Perform any desired action with the contact number (e.g., initiate a call)
    });
  });

  // Product description modal functionality
  const productModal = document.getElementById('product-description-modal');
  const productTitle = document.getElementById('product-description-title');
  const productDescription = document.getElementById('product-description');
  const productItems = Array.from(document.querySelectorAll('.product'));
  const closeButton = document.querySelector('.close');

  productItems.forEach((product) => {
    product.addEventListener('click', () => {
      const description = product.getAttribute('data-description');
      productTitle.textContent = product.querySelector('h3').textContent;
      productDescription.textContent = description;
      productModal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    productModal.style.display = 'none';
  });

  // Review functionality
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input value
    const reviewInput = document.getElementById('review-input').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = reviewInput;

    // Append the list item to the review list
    reviewList.appendChild(listItem);

    // Clear the input field
    reviewForm.reset();
  });
});