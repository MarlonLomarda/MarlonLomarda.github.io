document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("user"));
  
    if (userData) {
      // Populate form fields with existing user data
      document.getElementById("first-name").value = userData.firstName;
      document.getElementById("last-name").value = userData.lastName;
      document.getElementById("phone").value = userData.phone;
  
      // Display current profile picture
      const profilePictureInput = document.getElementById("profile-picture");
      const profilePicturePreview = document.createElement("img");
      profilePicturePreview.src = userData.profilePicture || "img/user.jpg";
      profilePicturePreview.style.width = "100px";
      profilePicturePreview.style.height = "100px";
      profilePicturePreview.style.borderRadius = "50%";
      profilePicturePreview.style.marginBottom = "10px";
      profilePictureInput.parentNode.insertBefore(profilePicturePreview, profilePictureInput);
  
      // Save button functionality
      document.getElementById("save-button").addEventListener("click", () => {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phone = document.getElementById("phone").value;
  
        if (profilePictureInput.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            userData.profilePicture = e.target.result; // Save the updated profile picture
            saveProfile(firstName, lastName, phone, userData.profilePicture);
          };
          reader.readAsDataURL(profilePictureInput.files[0]);
        } else {
          saveProfile(firstName, lastName, phone, userData.profilePicture);
        }
      });
  
      // Cancel button functionality
      document.getElementById("cancel-button").addEventListener("click", () => {
        window.location.href = "profile.html";
      });
    } else {
      alert("No user data found. Redirecting to login.");
      window.location.href = "login.html";
    }
  
    function saveProfile(firstName, lastName, phone, profilePicture) {
      userData.firstName = firstName;
      userData.lastName = lastName;
      userData.phone = phone;
      userData.profilePicture = profilePicture;
  
      localStorage.setItem("user", JSON.stringify(userData)); // Save updated data to localStorage
      alert("Profile updated successfully!");
      window.location.href = "profile.html";
    }
  });