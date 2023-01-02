const btnMenu = document.querySelector("#btn_menu");
const nav = document.querySelector("#nav");
const menuItem = document.querySelectorAll(".menu_item");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

menuItem.forEach(item => {
    item.onclick = () => nav.classList.remove("active");
});