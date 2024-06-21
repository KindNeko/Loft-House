"use strict";
class Toggle {
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
  list = document.querySelector(".menu__list");
  open = "menu__list--open";
  menuLink = document.querySelectorAll(".menu__link");
  toggle(selector) {
    document.querySelector(selector).addEventListener("click", () => {
      this.list.classList.toggle(this.open);
      this.overlay.classList.toggle(this.overlayShow);
    });
  }

  /**
   * @namespace smoothScrolling - метод реализующий делегирование событий при клике на пункты меню для метода @namespace scroll.
   * В методе используется делегирование событий
   * elem.target - получение элементов на которые сработало событие.
   * С помощью проверки находятся элементы с нужным классом.
   */
  smoothScrolling(element) {
    if (element.target.classList.contains("menu__link")) {
      const href = element.target.getAttribute("href");
      return document
        .querySelector(href)
        .scrollIntoView({ behavior: "smooth" });
    }
  }
  scroll() {
    this.list.addEventListener("click", (e) => {
      e.preventDefault();
      this.smoothScrolling(e);
    });
  }

  /**
   * @namespace removeStyles - метод скрывающий меню-бургер при клике на пункты меню.
   * В методе используется делегирование событий.
   * Для делегирования я добавил слушатель событий клика на menuList.
   * e.target - получение элементов на которые сработало событие.
   * С помощью проверки находятся элементы с нужным классом.
   */

  removeStyles() {
    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("menu__link")) {
        this.list.classList.remove(this.open);
        this.overlay.classList.remove(this.overlayShow);
      }
    });
  }
}
const menuBtn = new Menu();
menuBtn.toggle(".menu__btn");

new Menu().scroll();
new Menu().removeStyles();

class Accordeon extends Toggle {
  list = document.querySelectorAll(".accordeon__faq");
  open = "active";

  toggle() {
    this.list.forEach((faq) =>
      faq.addEventListener("click", () => {
        faq.classList.toggle(this.open);
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
