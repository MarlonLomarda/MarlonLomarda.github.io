document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    // Populate user information
    document.getElementById("user-name").textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById("user-email").textContent = userData.email;
    document.getElementById("user-phone").textContent = userData.phone;

    // Populate adoption history
    const adoptionHistoryContainer = document.getElementById("adoption-history");
    const adoptionHistory = JSON.parse(localStorage.getItem("adoptionHistory")) || [];
    if (adoptionHistory.length > 0) {
      adoptionHistoryContainer.innerHTML = adoptionHistory
        .map(
          (adoption) => `
          <p><strong>Pet:</strong> ${adoption.petName}</p>
          <p><strong>Date:</strong> ${adoption.date}</p>
        `
        )
        .join("");
    } else {
      adoptionHistoryContainer.innerHTML = "<p>You have no adoption history yet. Start your journey by adopting your first pet!</p>";
    }
  }

  // Populate adoption requests
  const container = document.getElementById("adoption-requests-container");
  const adoptionRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];

  if (adoptionRequests.length === 0) {
    container.innerHTML = "<p>No adoption requests yet.</p>";
  } else {
    container.innerHTML = adoptionRequests
      .map(
        (request) => `
        <div class="adoption-request">
          <p><strong>Pet:</strong> ${request.petName}</p>
          <p><strong>Status:</strong> ${request.status}</p>
        </div>
      `
      )
      .join("");
  }

  // Logout button functionality
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", function () {
    // Clear user data and redirect to login page
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
});