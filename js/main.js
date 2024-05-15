"use strict";
class Toggle {
  list;
  open;
  constructor(list, open) {
    this.list = list;
    this.open = open;
  }
  toggle() {}
}

class Menu extends Toggle {
  overlay = document.querySelector(".menu-overlay");
  overlayShow = "menu-overlay--show";
  menu = document.querySelector(".menu");
  menuList = document.querySelector(".menu__list");
  menuOpen = "menu__list--open";
  menuLink = document.querySelectorAll(".menu__link");
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

  /**
   * @namespace menuListEvent - метод реализующий делегирование событий
   * Для делегирования я добавил слушатель событий клика на menuList.
   * e.target - получение элементов на которые сработало событие.
   * С помощью проверки нахожу элементы с нужным классом.
   * @param callback - параметр который принимает метод с использованием события на дочерние элементы menuList.
   */
  menuListEvent(callback) {
    this.menuList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("menu__link")) {
        callback(e);
      }
    });
  }

  /**
   * @namespace smoothScrolling - метод плавного скролла при клике на пункты меню.
   * В методе используется делегирование событий c помощью метода @namespace menuListEvent.
   */
  smoothScrolling() {
    this.menuList.addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  /**
   * @namespace removeStyle - метод скрывающий меню-бургер при клике на пункты меню.
   * В методе используется делегирование событий c помощью метода @namespace menuListEvent.
   */
  removeStyle() {
    this.menuList.addEventListener("click", (e) => {
      this.menuList.classList.remove(this.menuOpen);
      this.overlay.classList.remove(this.overlayShow);
    });
  }
}
const menuBtn = new Menu(Menu.listItem, Menu.openItem);
menuBtn.toggle(".menu__btn");

new Menu().menuListEvent(new Menu().smoothScrolling());
new Menu().menuListEvent(new Menu().removeStyle());

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

function init() {
  let map = new ymaps.Map("map", {
    center: [59.943543, 30.338928],
    zoom: 16,
    controls: [],
  });

  let myPlacemark = new ymaps.Placemark([59.943543, 30.338928]);
  map.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
