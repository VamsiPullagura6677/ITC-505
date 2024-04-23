function validateForm() {
    // Reset error messages
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    let isValid = true; // Flag to track form validity

    // Check for empty fields
    const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    fields.forEach(function(field) {
        const value = document.getElementById(field).value.trim();
        if (value === '') {
            document.getElementById(field + 'Error').textContent = 'This field is required';
            isValid = false;
        }
    });

    // Validate email format
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format (must end with "@gmail.com")';
        isValid = false;
    }

    // Check if password and confirm password match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // Display success message if form is valid
    if (isValid) {
        // Create a new div element for the success message
        const successDiv = document.createElement('div');
        successDiv.textContent = 'Details have been validated'; // Set the text content of the success message
        successDiv.className = 'success-message'; // Add class for styling
        document.getElementById('messageContainer').appendChild(successDiv); // Append success message to the message container
        // Clear success message after 3 seconds
        setTimeout(function() {
            successDiv.remove(); // Remove the success message after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds
        return false; // Prevent form submission
    }

    return isValid; // Return the form validity flag
}
