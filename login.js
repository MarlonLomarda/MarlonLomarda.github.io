document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

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
});