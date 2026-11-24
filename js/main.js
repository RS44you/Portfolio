// Menu de navigation mobile
const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


function setMenuOpen(isOpen) {

    navLinks.classList.toggle("active", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");

}


if (menuButton && navLinks) {

    menuButton.setAttribute("aria-expanded", "false");


    // Ouvre / ferme le menu avec le bouton ☰
    menuButton.addEventListener("click", () => {

        setMenuOpen(!navLinks.classList.contains("active"));

    });


    // Referme le menu dès qu'on choisit une section
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => setMenuOpen(false));

    });


    // Referme le menu avec la touche Échap
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") setMenuOpen(false);

    });

}
