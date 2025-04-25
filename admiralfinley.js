document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".btn-back");

  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "findmore.html"; // Redirect to the Find More Pets page
    });
  }
});