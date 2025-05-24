// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode'; // Change button text
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    darkModeToggle.textContent = 'Dark Mode'; // Change button text
  }
});

// Fade-in effect after page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
document.addEventListener("DOMContentLoaded", () => {
  // Define the URLs for each product
  const productLinks = [
    "https://recoverytarcker.glitch.me/", // 1
    "https://wa.me/94712622012", //  2
    "https://redtrex404.glitch.me/", // 3
    "https://wa.me/94712622012", // 4
    "https://gputestme.glitch.me", // 5
    
  ];

  // Select the buttons
  const productButtons = document.querySelectorAll(".products .product button");

  // Add click event listeners
  productButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Open the corresponding product link
      window.location.href = productLinks[index];
    });
  });
});
// Contact Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const contactToggle = document.getElementById("contactToggle");
  const contactDetails = document.getElementById("contactDetails");

  if (contactToggle && contactDetails) {
    contactToggle.addEventListener("click", () => {
      contactDetails.classList.toggle("show");

      // Optional: change button text based on visibility
      if (contactDetails.classList.contains("show")) {
        contactToggle.textContent = "Hide Contact Info";
      } else {
        contactToggle.textContent = "Show Contact Info";
      }
    });
  }
});
