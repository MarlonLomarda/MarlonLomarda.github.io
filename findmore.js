// Search pets by name
const searchBar = document.getElementById("search-bar");
if (searchBar) {
  searchBar.addEventListener("input", function (e) {
    const searchValue = e.target.value.toLowerCase();
    const petItems = document.querySelectorAll(".pet-item");

    if (petItems.length > 0) {
      petItems.forEach((item) => {
        const petName = item.querySelector("h3").textContent.toLowerCase();
        if (petName.includes(searchValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
}

// Filter pets by category
const filterButtons = document.querySelectorAll(".filter-btn");
if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      const petItems = document.querySelectorAll(".pet-item");

      if (petItems.length > 0) {
        petItems.forEach((item) => {
          if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });
}