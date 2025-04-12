document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate login logic
      alert("Login successful!");
      window.location.href = "index.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate signup logic
      alert("Account created successfully!");
      window.location.href = "index.html";
    });
  }
});