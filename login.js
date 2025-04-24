document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Retrieve user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
      }

      // Validate email and password
      if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  }

  // Handle signup form submission
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

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
  }
});