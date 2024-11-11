function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling and active link logic can remain the same
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Hide the mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                document.getElementById("nav-menu").classList.remove("show");
            }
        });
    });

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 70;
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});

