// back-to-top.js

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");
  
    // 當滾動超過300px，顯示按鈕
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.add("hidden");
      }
    });
  
    // 點擊按鈕，平滑滾動回頂端
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  