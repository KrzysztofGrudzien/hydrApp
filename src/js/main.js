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
    navigation = document.querySelector('.nav--js'),
    menuIcon = document.querySelector('.header__nav-switcher--js'),
    btnAddGlass = document.querySelector('.btn--add-js'),
    btnRemoveGlass = document.querySelector('.btn--substract-js'),
    counterGlasses = document.querySelector('.app__header-counter--js');

let glasses = 0;
const maxGlasses = 10;
const key = new Date().toISOString().slice(0, 10);

function toggleMenu() {
    navigation.removeAttribute('hidden');
    navigation.classList.toggle('nav--animation-right');
    navigation.classList.toggle('nav--animation-left');
    menuIcon.classList.toggle('header__nav-switcher--close');
    menuIcon.classList.toggle('header__nav-switcher');
}

if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0);
    counterGlasses.innerHTML = `0/${maxGlasses}`;
} else {
    counterGlasses.innerHTML = `${localStorage.getItem(key)}/${maxGlasses}`;
}

function addGlass() {
    if (localStorage.getItem(key) >= 10) {
        counterGlasses.innerHTML = `10/${maxGlasses}`;
    } else {
        localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key))}/${maxGlasses}`;
    }
}

function removeGlass() {
    if (localStorage.getItem(key) < 1) {
        counterGlasses.innerHTML = `0/${maxGlasses}`;
    } else {
        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key) - 1)}/${maxGlasses}`;
        localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
    }
}

btnRemoveGlass.addEventListener('click', removeGlass);
btnAddGlass.addEventListener('click', addGlass);
switcherMenu.addEventListener('click', toggleMenu);

