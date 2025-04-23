document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
  
    // Add real-time validation for password length
    passwordInput.addEventListener("input", function () {
      if (passwordInput.value.length < 5) {
        passwordInput.setCustomValidity("Password must be at least 5 characters long.");
      } else {
        passwordInput.setCustomValidity(""); // Clear the custom message
      }
    });
  
    // Handle form submission
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      // Password validation
      if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
  
      console.log("User Data:", { firstName, lastName, email, phone });
  
      // Redirect to login page
      alert("Sign up successful! Redirecting to login...");
      window.location.href = "login.html";
    });
  });