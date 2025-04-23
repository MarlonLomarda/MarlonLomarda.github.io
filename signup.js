document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Simulate saving user data (you can replace this with actual backend logic)
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

  console.log("User Data:", { firstName, lastName, email, phone });

  // Redirect to login page
  alert("Sign up successful! Redirecting to login...");
  window.location.href = "login.html";
});