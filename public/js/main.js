const menuBtn = toggleMenu(".menu__btn");
const menuList = document.querySelector(".menu__list");
const overlay = document.querySelector(".menu-overlay");
const faqs = document.querySelectorAll(".accordion__faq");

function toggleMenu(selector) {
  document.querySelector(selector).addEventListener("click", () => {
    menuList.classList.toggle("menu__list--open");
    overlay.classList.toggle("menu-overlay--show");
  });
}

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
