// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Category filter for document catalogue
  var filterBtns = document.querySelectorAll(".filter-btn");
  var categoryGroups = document.querySelectorAll(".category-group");
  if (filterBtns.length > 0 && categoryGroups.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");
        categoryGroups.forEach(function (group) {
          if (filter === "all" || group.getAttribute("data-category") === filter) {
            group.style.display = "";
          } else {
            group.style.display = "none";
          }
        });
      });
    });
  }
});
