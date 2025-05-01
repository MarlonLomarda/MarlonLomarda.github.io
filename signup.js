document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Validate phone number
      if (!validatePhilippinePhoneNumber(phone)) {
        alert("Invalid phone number. Please use the format 09123456789 or +639123456789.");
        return;
      }

      // Password validation
      if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Save user data to localStorage
      const userData = { firstName, lastName, email, phone, password };
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Account created successfully! Redirecting to login...");
      window.location.href = "login.html";
    });

    // Add "Show Password" feature
    const showPasswordCheckbox = document.getElementById("show-password");
    const passwordFields = document.querySelectorAll('input[type="password"]');

    if (showPasswordCheckbox) {
      showPasswordCheckbox.addEventListener("change", () => {
        passwordFields.forEach((field) => {
          field.type = showPasswordCheckbox.checked ? "text" : "password";
        });
      });
    }
  }

  /**
   * Validates a Philippine phone number.
   * Accepts numbers starting with 09 (local format) or +639 (international format).
   *
   * @param {string} phoneNumber - The phone number to validate.
   * @returns {boolean} - Returns true if the phone number is valid, false otherwise.
   */
  function validatePhilippinePhoneNumber(phoneNumber) {
    const regex = /^(09\d{9}|\+639\d{9})$/;
    return regex.test(phoneNumber);
  }
});