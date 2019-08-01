!function(c){var e={};function t(n){if(e[n])return e[n].exports;var l=e[n]={i:n,l:!1,exports:{}};return c[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=c,t.c=e,t.d=function(c,e,n){t.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:n})},t.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},t.t=function(c,e){if(1&e&&(c=t(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var l in c)t.d(n,l,function(e){return c[e]}.bind(null,l));return n},t.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return t.d(e,"a",e),e},t.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n    window.addEventListener('load', function () {\r\n        navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n            // Registration was successful\r\n            console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n        }, function (err) {\r\n            // registration failed :(\r\n            console.log('ServiceWorker registration failed: ', err);\r\n        });\r\n    });\r\n}\r\n\r\nconst switcherMenu = document.querySelector('.header__nav-switcher-box--js'),\r\n    navigation = document.querySelector('.nav--js'),\r\n    menuIcon = document.querySelector('.header__nav-switcher--js'),\r\n    btnAddGlass = document.querySelector('.btn--add-js'),\r\n    btnRemoveGlass = document.querySelector('.btn--substract-js'),\r\n    counterGlasses = document.querySelector('.app__header-counter--js'),\r\n    hideAppPart = document.querySelector('.statistics__switcher-box--js'),\r\n    statistics = document.querySelector('.statistics--js'),\r\n    statisticsLink = document.querySelector('.nav__list-item-statistic--js');\r\n\r\nlet glasses = 0;\r\nconst maxGlasses = 10;\r\nconst key = new Date().toISOString().slice(0, 10);\r\n\r\nfunction toggleMenu() {\r\n    navigation.removeAttribute('hidden');\r\n    navigation.classList.toggle('nav--animation-right');\r\n    navigation.classList.toggle('nav--animation-left');\r\n    menuIcon.classList.toggle('header__nav-switcher--close');\r\n    menuIcon.classList.toggle('header__nav-switcher');\r\n}\r\n\r\nfunction showStatistics() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    statistics.removeAttribute('hidden');\r\n    statistics.classList.add('nav--animation-right');\r\n    statistics.classList.remove('nav--animation-left');\r\n    arrowLeft.style.opacity = '0';\r\n}\r\n\r\nfunction hideStatistics() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    statistics.classList.remove('nav--animation-right');\r\n    statistics.classList.add('nav--animation-left');\r\n    arrowLeft.style.opacity = null;\r\n}\r\n\r\nif (!localStorage.getItem(key)) {\r\n    localStorage.setItem(key, 0);\r\n    counterGlasses.innerHTML = `0/${maxGlasses}`;\r\n} else {\r\n    counterGlasses.innerHTML = `${localStorage.getItem(key)}/${maxGlasses}`;\r\n}\r\n\r\nfunction addGlass() {\r\n    if (localStorage.getItem(key) >= 10) {\r\n        counterGlasses.innerHTML = `10/${maxGlasses}`;\r\n    } else {\r\n        localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\r\n        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key))}/${maxGlasses}`;\r\n    }\r\n}\r\n\r\nfunction removeGlass() {\r\n    if (localStorage.getItem(key) < 1) {\r\n        counterGlasses.innerHTML = `0/${maxGlasses}`;\r\n    } else {\r\n        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key) - 1)}/${maxGlasses}`;\r\n        localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);\r\n    }\r\n}\r\n\r\nbtnRemoveGlass.addEventListener('click', removeGlass);\r\nbtnAddGlass.addEventListener('click', addGlass);\r\nswitcherMenu.addEventListener('click', toggleMenu);\r\nstatisticsLink.addEventListener('click', showStatistics);\r\nhideAppPart.addEventListener('click', hideStatistics);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DLENBQUM7QUFDRCxrQ0FBa0MsMEJBQTBCLEdBQUcsV0FBVztBQUMxRTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFdBQVc7QUFDcEQsS0FBSztBQUNMO0FBQ0Esc0NBQXNDLG9DQUFvQyxHQUFHLFdBQVc7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQsS0FBSztBQUNMLHNDQUFzQyx3Q0FBd0MsR0FBRyxXQUFXO0FBQzVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHN3aXRjaGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1zd2l0Y2hlci1ib3gtLWpzJyksXHJcbiAgICBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi0tanMnKSxcclxuICAgIG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1qcycpLFxyXG4gICAgYnRuQWRkR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1hZGQtanMnKSxcclxuICAgIGJ0blJlbW92ZUdsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tc3Vic3RyYWN0LWpzJyksXHJcbiAgICBjb3VudGVyR2xhc3NlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBfX2hlYWRlci1jb3VudGVyLS1qcycpLFxyXG4gICAgaGlkZUFwcFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljc19fc3dpdGNoZXItYm94LS1qcycpLFxyXG4gICAgc3RhdGlzdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLS1qcycpLFxyXG4gICAgc3RhdGlzdGljc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0LWl0ZW0tc3RhdGlzdGljLS1qcycpO1xyXG5cclxubGV0IGdsYXNzZXMgPSAwO1xyXG5jb25zdCBtYXhHbGFzc2VzID0gMTA7XHJcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgbmF2aWdhdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdi1zd2l0Y2hlci0tY2xvc2UnKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2LXN3aXRjaGVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTdGF0aXN0aWNzKCkge1xyXG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1jbG9zZScpO1xyXG4gICAgc3RhdGlzdGljcy5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgc3RhdGlzdGljcy5jbGFzc0xpc3QuYWRkKCduYXYtLWFuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgc3RhdGlzdGljcy5jbGFzc0xpc3QucmVtb3ZlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBhcnJvd0xlZnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVN0YXRpc3RpY3MoKSB7XHJcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtc3dpdGNoZXItLWNsb3NlJyk7XHJcbiAgICBzdGF0aXN0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICBzdGF0aXN0aWNzLmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLWxlZnQnKTtcclxuICAgIGFycm93TGVmdC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxufVxyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIDApO1xyXG4gICAgY291bnRlckdsYXNzZXMuaW5uZXJIVE1MID0gYDAvJHttYXhHbGFzc2VzfWA7XHJcbn0gZWxzZSB7XHJcbiAgICBjb3VudGVyR2xhc3Nlcy5pbm5lckhUTUwgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpfS8ke21heEdsYXNzZXN9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkR2xhc3MoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA+PSAxMCkge1xyXG4gICAgICAgIGNvdW50ZXJHbGFzc2VzLmlubmVySFRNTCA9IGAxMC8ke21heEdsYXNzZXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpO1xyXG4gICAgICAgIGNvdW50ZXJHbGFzc2VzLmlubmVySFRNTCA9IGAke3BhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpfS8ke21heEdsYXNzZXN9YDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlR2xhc3MoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA8IDEpIHtcclxuICAgICAgICBjb3VudGVyR2xhc3Nlcy5pbm5lckhUTUwgPSBgMC8ke21heEdsYXNzZXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnRlckdsYXNzZXMuaW5uZXJIVE1MID0gYCR7cGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAtIDEpfS8ke21heEdsYXNzZXN9YDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIC0gMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ0blJlbW92ZUdsYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlR2xhc3MpO1xyXG5idG5BZGRHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdsYXNzKTtcclxuc3dpdGNoZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbnN0YXRpc3RpY3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1N0YXRpc3RpY3MpO1xyXG5oaWRlQXBwUGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVTdGF0aXN0aWNzKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);