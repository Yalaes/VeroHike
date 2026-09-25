//Toogle menu when burger button is clicked 
//toogle sections when menu items are clicked

const menuButton = document.querySelector('#menu-button');
const mainMenu = document.querySelector('#main-menu');

// sections to be toggled when menu items are clicked
const sections = document.querySelectorAll('section');  
// get all menu items that have a data-section attribute
const menuItems = document.querySelectorAll('[data-section]');


menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('menu-open');
});

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        const sectionId = menuItem.dataset.section;
        const targetSection = document.querySelector(`#${sectionId}`);

        sections.forEach((section) => {
            section.classList.remove("active");
        });

        targetSection.classList.add("active");

        mainMenu.classList.remove("menu-open");
    });
});
