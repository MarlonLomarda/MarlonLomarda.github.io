document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in
  const userData = JSON.parse(localStorage.getItem("user"));
  if (!userData) {
    alert("You must be logged in to submit an adoption request.");
    window.location.href = "login.html";
    return;
  }

  // Handle adoption request submission
  const adoptionForm = document.getElementById("adoption-form");
  adoptionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const petName = "Sir Woofs"; // Hardcoded pet name for this profile
    const adoptionRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];

    // Add the new adoption request
    adoptionRequests.push({
      email: userData.email, // Logged-in user's email
      petName: petName,
      status: "Pending", // Default status
      message: document.getElementById("message").value, // User's message
    });

    // Save the updated requests to localStorage
    localStorage.setItem("adoptionRequests", JSON.stringify(adoptionRequests));

    alert(`Your adoption request for ${petName} has been submitted!`);
    adoptionForm.reset(); // Clear the form

    // Redirect to index.html
    window.location.href = "index.html";
  });
});