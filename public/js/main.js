"use strict";
class Toggle {
  list;
  open;
  constructor(list, open) {
    this.list = list;
    this.open = open;
  }
  toggle() {
    console.log("default implementation");
  }
}

class Menu extends Toggle {
  overlay = document.querySelector(".menu-overlay");
  overlayShow = "menu-overlay--show";
  menuList = document.querySelector(".menu__list");
  menuOpen = "menu__list--open";
  constructor(list, open) {
    super();
    this.list = list;
    this.open = open;
  }
  toggle(selector) {
    document.querySelector(selector).addEventListener("click", () => {
      this.menuList.classList.toggle(this.menuOpen);
      this.overlay.classList.toggle(this.overlayShow);
    });
  }
}
const menu = new Menu(Menu.listItem, Menu.openItem);
menu.toggle(".menu__btn");

class Accordeon extends Toggle {
  accordeonList = document.querySelectorAll(".accordeon__faq");
  accordeonOpen = "active";
  constructor(list, open) {
    super();
    this.list = list;
    this.open = open;
  }

  toggle() {
    this.accordeonList.forEach((faq) =>
      faq.addEventListener("click", () => {
        faq.classList.toggle(this.accordeonOpen);
      })
    );
  }
}
new Accordeon(Accordeon.accordeonList, Accordeon.accordeonOpen).toggle();
