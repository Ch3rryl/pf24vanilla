const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("ul");
const heroSection = document.getElementById("hero-section");



function toggleButton() {

    navList.classList.toggle('show');

    const isMenuVisible = navList.classList.contains('show');
    
        // If the menu is visible, move the hero section down
        if (isMenuVisible) {
            heroSection.style.transform = "translateY(220px)";
        } else {
            heroSection.style.transform = "translateY(0)";
        }
}

hamburgerBtn.addEventListener('click',toggleButton);

projectImage.addEventListener('mouseover', viewProjectDetails);

