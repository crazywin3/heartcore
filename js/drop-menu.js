console.clear();

const app = (() => {
    let body;
    let menu;
    let menuTitle;
    let menuItems;

    const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuTitle = document.querySelector('.menu-title');
        menuItems = document.querySelectorAll('.nav__list-item');

        applyListeners();
    }

    const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
        menuTitle.addEventListener('click', () => toggleClass(body, 'nav-active'));
        setTimeout(function(){
            menuItems.style.removeProperty('transition-delay')
        }, 1000);
    }

    const toggleClass = (element, stringClass) => {
        if(element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else
            element.classList.add(stringClass);
    }

    init();
})();
