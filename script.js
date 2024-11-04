//top Menu slider
const menu = document.querySelector(".menu-icon");

menu.onclick = function(){

    const subMenu = document.querySelector(".sub-navigation.mobile");
    subMenu.classList.toggle("show-menu");
}