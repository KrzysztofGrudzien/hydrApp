"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const switcherMenu = document.querySelector('.header__nav-switcher-box--js'),
  navigation = document.querySelector('.nav');

function showMenu() {
  navigation.removeAttribute('hidden');
  navigation.classList.toggle('nav--animation-right');
  navigation.classList.toggle('nav--animation-left');

}
switcherMenu.addEventListener('click', showMenu);

