document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll("header nav a");

    // Add event listener for each link
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            // Scroll to the section smoothly
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight the active link based on scroll position
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 70; // Adjusted for header height

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});

