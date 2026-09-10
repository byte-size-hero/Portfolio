const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {

            menuButton.textContent = "×";

        } else {

            menuButton.textContent = "☰";

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ================= THEME ================= */

const themeButton = document.getElementById("themeButton");

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


function updateThemeIcon() {

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☾";

    } else {

        themeButton.textContent = "☼";

    }

}


if (themeButton) {

    updateThemeIcon();


    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");


        const isLight =
            document.body.classList.contains("light-mode");


        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );


        updateThemeIcon();

    });

}


/* ================= TYPING EFFECT ================= */

const typingText =
    document.getElementById("typingText");


const typingWords = [

    "Building toward AI/ML Engineering",

    "Learning AI Automation",

    "Building with Python",

    "Exploring Machine Learning",

    "Creating AI Workflows"

];


let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;

        }

    } else {

        characterIndex--;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 35 : 70
    );

}


setTimeout(
    typeEffect,
    1000
);


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .experience-card, .education-card, .training-card, .career-card, .stat-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* ================= REVEAL CLASS ================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;


document.head.appendChild(
    revealStyle
);


/* ================= PREVENT PLACEHOLDER LINKS ================= */

document.querySelectorAll(
    'a[href="PROJECT_LINK"], a[href="YOUR_GITHUB_URL"], a[href="YOUR_LINKEDIN_URL"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const destination =
            link.getAttribute("href");

        if (
            destination === "PROJECT_LINK" ||
            destination === "YOUR_GITHUB_URL" ||
            destination === "YOUR_LINKEDIN_URL"
        ) {

            event.preventDefault();

            alert(
                "Replace this placeholder with your actual link."
            );

        }

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cMuhammad Abdullah — Portfolio",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "Python • AI • Machine Learning • Automation"
);