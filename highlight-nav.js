// assets/js/highlight-nav.js

document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      if (link.getAttribute("href") === path) {
        link.classList.add("text-[#f582ae]", "underline");
      }
    });
  });
  