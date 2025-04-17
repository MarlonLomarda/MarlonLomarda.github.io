// Add an event listener to the form
document.getElementById("adoption-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show a confirmation alert
  alert("Your adoption request has been submitted successfully!");

  // Redirect to index.html
  window.location.href = "index.html";
});