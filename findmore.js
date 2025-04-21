// Search pets by name
document.getElementById("search-bar").addEventListener("input", function (e) {
  const searchValue = e.target.value.toLowerCase();
  const petItems = document.querySelectorAll(".pet-item");

  petItems.forEach((item) => {
    const petName = item.querySelector("h3").textContent.toLowerCase();
    if (petName.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Filter pets by category
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const petItems = document.querySelectorAll(".pet-item");

    petItems.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});