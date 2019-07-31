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
    counterGlasses = document.querySelector('.app__header-counter--js'),
    glassesCounterBox = document.querySelector('.app__glasses-counter--js');

let glasses = 0;
const maxGlasses = 10;

function toggleMenu() {
    navigation.removeAttribute('hidden');
    navigation.classList.toggle('nav--animation-right');
    navigation.classList.toggle('nav--animation-left');
    menuIcon.classList.toggle('header__nav-switcher--close');
    menuIcon.classList.toggle('header__nav-switcher');
}

function addGlass() {
    if (glasses >= 10) {
        counterGlasses.innerHTML = `10/${maxGlasses}`;
    } else {
        glasses = glasses + 1;
        counterGlasses.innerHTML = `${glasses}/${maxGlasses}`;
        const newGlass = document.createElement('div');
        newGlass.classList.add('app__glass');
        newGlass.classList.add('app__glass--add');
        glassesCounterBox.appendChild(newGlass);
    }
}

function removeGlass() {
    if (glasses < 1) {
        counterGlasses.innerHTML = `0/${maxGlasses}`;
    } else {
        glasses = glasses - 1;
        counterGlasses.innerHTML = `${glasses}/${maxGlasses}`;
        const newGlass = document.querySelector('.app__glass');
        glassesCounterBox.removeChild(newGlass);
    }
}

btnRemoveGlass.addEventListener('click', removeGlass);
btnAddGlass.addEventListener('click', addGlass);
switcherMenu.addEventListener('click', toggleMenu);

