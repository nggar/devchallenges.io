
const menuBtn = document.querySelectorAll(".js-toggle-menu"),
      menu = document.querySelector(".header .nav");

menuBtn.forEach(btn => {
      btn.addEventListener("click", () => {
            menu.classList.toggle("show");
      });
})