const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("ul");

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click',toggleButton);