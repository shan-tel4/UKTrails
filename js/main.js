document.addEventListener("DOMContentLoaded", function () {
const navBar = document.getElementById("navbar");

window.toggleMenu = function (button) {
    button.classList.toggle("is-active");

    if (button.classList.contains("is-active")) {
    navBar.style.right = "0";
    } else {
    navBar.style.right = "-250px";
    }
};
});


