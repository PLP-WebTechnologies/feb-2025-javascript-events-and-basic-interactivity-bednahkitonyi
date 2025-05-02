// Event Handling: Button click
document.getElementById('myButton').addEventListener('click', function() {
    this.innerText = 'You clicked me!';
    this.style.backgroundColor = '#2ecc71';
});

// Hover effects for the images in the gallery
const images = document.querySelectorAll('.gallery-image');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = 0.7;
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = 1;
    });
});

// Accordion toggle functionality
const accordionToggles = document.querySelectorAll('.accordion-toggle');
accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if password is long enough
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return false;
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    return true;
}

// Real-time feedback for password input
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('passwordFeedback');
    if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters!';
    } else {
        feedback.textContent = '';
    }
});
