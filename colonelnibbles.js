document.addEventListener("DOMContentLoaded", () => {
  const adoptionForm = document.getElementById("adoption-form");

  if (adoptionForm) {
    adoptionForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission

      // Display confirmation message
      alert("Your adoption request for Colonel Nibbles has been submitted successfully!");

      // Redirect to the home page
      window.location.href = "index.html";
    });
  }
});