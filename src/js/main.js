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
    hidePartStatistics = document.querySelector('.statistics__switcher-box--js'),
    statistics = document.querySelector('.statistics--js'),
    statisticsLink = document.querySelector('.nav__list-item-statistic--js'),
    hidePartAchievements = document.querySelector('.achievements__switcher-box--js'),
    achievements = document.querySelector('.achievements--js'),
    achievementsLink = document.querySelector('.nav__list-item-achievement--js'),
    hidePartContact = document.querySelector('.contact__switcher-box--js'),
    contact = document.querySelector('.contact--js'),
    contactLink = document.querySelector('.nav__list-item-contact--js'),
    hidePartSettings = document.querySelector('.settings__switcher-box--js'),
    settings = document.querySelector('.settings--js'),
    settingsLink = document.querySelector('.nav__list-item-settings--js'),
    percent = document.querySelector('.app__percent--js'),
    heart = document.querySelector('.app__heart--js'),
    summary = document.querySelector('.nav__header-summary--js'),
    progressBar = document.querySelector('.nav__header-progress-bar--js'),
    statisticVolumeValue = document.querySelector('.statistics__volume-value--js'),
    statisticComplationValue = document.querySelector('.statistics__complation-value--js'),
    statisticFrequencyValue = document.querySelector('.statistics__frequency-value--js'),
    achievementValue = document.querySelector('.achievements__value--js');


let glasses = 0;
const unit = 200;
const avarage = 2800;
const key = new Date().toISOString().slice(0, 10);

function toggleMenu() {
    navigation.removeAttribute('hidden');
    navigation.classList.toggle('nav--animation-right');
    navigation.classList.toggle('nav--animation-left');
    menuIcon.classList.toggle('header__nav-switcher--close');
    menuIcon.classList.toggle('header__nav-switcher');
}

function showStatistics() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    statistics.removeAttribute('hidden');
    statistics.classList.add('nav--animation-right');
    statistics.classList.remove('nav--animation-left');
    arrowLeft.style.opacity = '0';
}

function hideStatistics() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    statistics.classList.remove('nav--animation-right');
    statistics.classList.add('nav--animation-left');
    arrowLeft.style.opacity = null;
}

function showAchievements() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    achievements.removeAttribute('hidden');
    achievements.classList.add('nav--animation-right');
    achievements.classList.remove('nav--animation-left');
    arrowLeft.style.opacity = '0';
}

function hideAchievements() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    achievements.classList.remove('nav--animation-right');
    achievements.classList.add('nav--animation-left');
    arrowLeft.style.opacity = null;
}

function showContact() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    contact.removeAttribute('hidden');
    contact.classList.add('nav--animation-right');
    contact.classList.remove('nav--animation-left');
    arrowLeft.style.opacity = '0';
}

function hideContact() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    contact.classList.remove('nav--animation-right');
    contact.classList.add('nav--animation-left');
    arrowLeft.style.opacity = null;
}

function showSettings() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    settings.removeAttribute('hidden');
    settings.classList.add('nav--animation-right');
    settings.classList.remove('nav--animation-left');
    arrowLeft.style.opacity = '0';
}

function hideSettings() {
    const arrowLeft = document.querySelector('.header__nav-switcher--close');
    settings.classList.remove('nav--animation-right');
    settings.classList.add('nav--animation-left');
    arrowLeft.style.opacity = null;
}

if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0);
    counterGlasses.innerHTML = `${parseInt(0)}`;
} else {
    counterGlasses.innerHTML = `${localStorage.getItem(key)}`;
    let glass = `${parseInt(localStorage.getItem(key))}`;
    let percentOfDrunkWater = `${Math.ceil(((glass * unit) / avarage) * 100)}%`;
    let percentProgressBar = `${Math.ceil(((glass * unit) / avarage) * 100)}`;
    percent.innerHTML = percentOfDrunkWater;
    let glassUnit = glass * unit;
    summary.textContent = `${glassUnit}ML / ${avarage}ML`;
    progressBar.style.width = `${percentProgressBar}%`;
    if (percentProgressBar > 100) {
        progressBar.style.width = "100%";
    }
    statisticVolumeValue.innerHTML = `${glassUnit}ML / DAY`;
    statisticComplationValue.textContent = `${percentOfDrunkWater}`;
    statisticFrequencyValue.innerHTML = `${glass} / DAY`;
    achievementValue.innerHTML = `${avarage}ML`;
}

function addGlass() {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
    counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key))}`;
    let glass = `${parseInt(localStorage.getItem(key))}`;
    let percentOfDrunkWater = `${Math.ceil(((glass * unit) / avarage) * 100)}%`;
    let percentProgressBar = `${Math.ceil(((glass * unit) / avarage) * 100)}`;
    percent.innerHTML = percentOfDrunkWater;
    let glassUnit = glass * unit;
    summary.innerHTML = `${glassUnit}ML / ${avarage}ML`;
    progressBar.style.width = `${percentProgressBar}%`;
    if (percentProgressBar > 100) {
        progressBar.style.width = "100%";
    }
    statisticVolumeValue.innerHTML = `${glassUnit}ML / DAY`;
    statisticComplationValue.textContent = `${percentOfDrunkWater}`;
    statisticFrequencyValue.innerHTML = `${glass} / DAY`;
    achievementValue.innerHTML = `${avarage}ML`;

    if (glass > 5 && glass < 10) {
        heart.style.animationDuration = "1s";
    } else if (glass >= 10 && glass < 14) {
        heart.style.animationDuration = ".8s";
    } else if (glass >= 14) {
        heart.style.animationDuration = ".6s";
    } else {
        heart.style.animationDuration = "1.2s";
    }
}

function removeGlass() {
    if (localStorage.getItem(key) < 1) {
        counterGlasses.innerHTML = `${parseInt(0)}`;
    } else {
        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key) - 1)}`;
        localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
        let glass = `${parseInt(localStorage.getItem(key))}`;
        let percentOfDrunkWater = `${Math.ceil(((glass * unit) / avarage) * 100)}%`;
        let percentProgressBar = `${Math.ceil(((glass * unit) / avarage) * 100)}`;
        percent.innerHTML = percentOfDrunkWater;
        let glassUnit = glass * unit;
        summary.textContent = `${glassUnit}ML / ${avarage}ML`;
        progressBar.style.width = `${percentProgressBar}%`;
        if (percentProgressBar > 100) {
            progressBar.style.width = "100%";
        }
        statisticVolumeValue.innerHTML = `${glassUnit}ML / DAY`;
        statisticComplationValue.textContent = `${percentOfDrunkWater}`;
        statisticFrequencyValue.innerHTML = `${glass} / DAY`;
        achievementValue.innerHTML = `${avarage}ML`;

        if (glass > 5 && glass < 10) {
            heart.style.animationDuration = "1s";
        } else if (glass >= 10 && glass < 14) {
            heart.style.animationDuration = ".8s";
        } else if (glass >= 14) {
            heart.style.animationDuration = ".6s";
        } else {
            heart.style.animationDuration = "1.2s";
        }
    }
}

btnRemoveGlass.addEventListener('click', removeGlass);
btnAddGlass.addEventListener('click', addGlass);
switcherMenu.addEventListener('click', toggleMenu);
statisticsLink.addEventListener('click', showStatistics);
achievementsLink.addEventListener('click', showAchievements);
hidePartStatistics.addEventListener('click', hideStatistics);
hidePartAchievements.addEventListener('click', hideAchievements);
contactLink.addEventListener('click', showContact);
hidePartContact.addEventListener('click', hideContact);
settingsLink.addEventListener('click', showSettings);
hidePartSettings.addEventListener('click', hideSettings);

