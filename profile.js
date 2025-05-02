document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    // Populate user information
    document.getElementById("user-name").textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById("user-email").textContent = userData.email;
    document.getElementById("user-phone").textContent = userData.phone;

    // Update profile picture
    const profilePicture = document.querySelector(".profile-picture img");
    profilePicture.src = userData.profilePicture || "img/user.jpg";

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

    // Redirect to edit profile page
    const editProfileButton = document.getElementById("edit-profile-button");
    if (editProfileButton) {
      editProfileButton.addEventListener("click", () => {
        window.location.href = "edit-profile.html";
      });
    }
  } else {
    // Redirect to login if no user is logged in
    alert("You must be logged in to view your profile.");
    window.location.href = "login.html";
  }

  // Populate adoption requests
  const container = document.getElementById("adoption-requests-container");
  const adoptionRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];

  if (adoptionRequests.length === 0) {
    container.innerHTML = "<p>No adoption requests yet.</p>";
  } else {
    const userRequests = adoptionRequests.filter((request) => request.email === userData.email); // Filter requests for the logged-in user
    if (userRequests.length > 0) {
      container.innerHTML = userRequests
        .map(
          (request, index) => `
          <div class="adoption-request" data-index="${index}">
            <p><strong>Pet:</strong> ${request.petName}</p>
            <p><strong>Status:</strong> ${request.status}</p>
            <i class="fa fa-trash delete-request" data-index="${index}" title="Delete"></i>
          </div>
        `
        )
        .join("");

      // Add event listeners to trashcan icons
      const deleteIcons = document.querySelectorAll(".delete-request");
      deleteIcons.forEach((icon) => {
        icon.addEventListener("click", (e) => {
          const requestIndex = e.target.getAttribute("data-index");
          deleteAdoptionRequest(requestIndex);
        });
      });
    } else {
      container.innerHTML = "<p>No adoption requests yet.</p>";
    }
  }

  // Logout button functionality
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", function () {
    // Clear user data and redirect to login page
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });

  // Function to delete an adoption request
  function deleteAdoptionRequest(index) {
    const adoptionRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];
    const userRequests = adoptionRequests.filter((request) => request.email === userData.email);

    // Remove the selected request
    userRequests.splice(index, 1);

    // Update the global adoptionRequests array
    const updatedRequests = adoptionRequests.filter((request) => request.email !== userData.email).concat(userRequests);

    // Save the updated requests back to localStorage
    localStorage.setItem("adoptionRequests", JSON.stringify(updatedRequests));

    // Refresh the UI
    alert("Adoption request deleted successfully!");
    location.reload();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordForm = document.getElementById("password-form");
  const passwordMessage = document.getElementById("password-message");

  if (passwordForm) {
    passwordForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const currentPassword = document.getElementById("current-password").value;
      const newPassword = document.getElementById("new-password").value;
      const confirmNewPassword = document.getElementById("confirm-new-password").value;

      // Retrieve stored user data
      const userData = JSON.parse(localStorage.getItem("user"));

      // Validate current password
      if (currentPassword !== userData.password) {
        passwordMessage.textContent = "Current password is incorrect.";
        passwordMessage.classList.remove("success");
        return;
      }

      // Validate new password and confirm password
      if (newPassword !== confirmNewPassword) {
        passwordMessage.textContent = "New password and confirm password do not match.";
        passwordMessage.classList.remove("success");
        return;
      }

      // Validate new password security requirements
      if (newPassword.length < 5) {
        passwordMessage.textContent = "New password must be at least 5 characters long.";
        passwordMessage.classList.remove("success");
        return;
      }

      // Simulate backend API call to update password
      try {
        const response = await fakeApiUpdatePassword(userData.email, newPassword);
        if (response.success) {
          // Update password in localStorage
          userData.password = newPassword;
          localStorage.setItem("user", JSON.stringify(userData));

          passwordMessage.textContent = "Password changed successfully!";
          passwordMessage.classList.add("success");
          passwordMessage.classList.remove("error");

          // Clear input fields
          passwordForm.reset();
        } else {
          passwordMessage.textContent = response.message || "Failed to update password.";
          passwordMessage.classList.remove("success");
        }
      } catch (error) {
        passwordMessage.textContent = "An error occurred. Please try again.";
        passwordMessage.classList.remove("success");
      }
    });
  }

  // Simulated backend API call
  async function fakeApiUpdatePassword(email, newPassword) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordForm = document.getElementById("password-form");
  const passwordMessage = document.getElementById("password-message");
  const showPasswordCheckbox = document.getElementById("show-password");
  const passwordFields = document.querySelectorAll(
    "#current-password, #new-password, #confirm-new-password"
  );

  // Show Password Feature
  if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener("change", () => {
      passwordFields.forEach((field) => {
        field.type = showPasswordCheckbox.checked ? "text" : "password";
      });
    });
  }

  if (passwordForm) {
    passwordForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const currentPassword = document.getElementById("current-password").value;
      const newPassword = document.getElementById("new-password").value;
      const confirmNewPassword =
        document.getElementById("confirm-new-password").value;

      // Validate inputs (example logic)
      if (newPassword !== confirmNewPassword) {
        passwordMessage.textContent =
          "New password and confirm password do not match.";
        passwordMessage.classList.remove("success");
        return;
      }

      if (newPassword.length < 5) {
        passwordMessage.textContent =
          "New password must be at least 5 characters long.";
        passwordMessage.classList.remove("success");
        return;
      }

      // Simulate password update
      passwordMessage.textContent = "Password changed successfully!";
      passwordMessage.classList.add("success");
      passwordMessage.classList.remove("error");
      passwordForm.reset();
    });
  }
});