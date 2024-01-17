const btnDarkMode = document.querySelector(".dark-mode-btn");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}


window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

// Function to get the project details from the URL parameters
function getProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('projectName');

    // This is a simple example, you might want to fetch project details from an API or an object/array
    const projects = {
        "AI Image Generator": {
            title: "AI Image Generator",
            image: "./img/projects/AI_generator_bg.png",
            skills: "HTML, CSS, Javascript, API",
            repoLink: "https://github.com/brahimi73837/AI-Image-Generator",
        },
        "Password Generator": {
            title: "Password Generator",
            image: "./img/projects/Password_Generator.png",
            skills: "HTML, CSS, Javascript",
            repoLink: "https://github.com/brahimi73837/Password-Generator-Js",
        },
        "Calories Counter": {
            title: "Calories Counter",
            image: "./img/projects/Calories-Counter.png",
            skills: "HTML, CSS, JavaScript",
            repoLink: "https://github.com/brahimi73837/Calories-Counter",
        },
        "Malta FAQ": {
            title: "Malta FAQ",
            image: "img/projects/maltafaq.png",
            skills: "HTML, CSS, Javascript",
            repoLink: "https://github.com/brahimi73837/Malta-FAQs",
        },
        "Lightning Web Component - Hello World": {
            title: "Lightning Web Component - Hello World",
            image: "./img/projects/Screenshot 2024-01-16 at 05.19.28.png",
            skills: "HTML, CSS, Javascript",
            repoLink: "https://github.com/brahimi73837/LWC_Hello_world",
        },
        "Role Playing Game": {
            title: "Role Playing Game",
            image: "./img/projects/Screenshot 2024-01-16 at 05.21.19.png",
            skills: "HTML, CSS, Javascript",
            repoLink: "https://github.com/brahimi73837/Role-Playing-Game-JS",
        },
        // Add details for other projects as needed
    };

    return projects[projectName];
}

document.addEventListener('DOMContentLoaded', function () {
    const projectDetailsContainer = document.getElementById('projectDetails');
    const projectDetails = getProjectDetails();

    if (projectDetails) {
        projectDetailsContainer.innerHTML = `
            <h1 class="title-1">${projectDetails.title}</h1>
            <img src="${projectDetails.image}" alt="" class="project-details__cover">
            <div class="project-details__desc">
                <p>Skills: ${projectDetails.skills}</p>
            </div>
            <a href="${projectDetails.repoLink}" class="btn-outline">
                <img src="./img/icons/gitHub-black.svg" alt="">
                GitHub repo
            </a>
        `;
    }
});








/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/

/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************//**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/

/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/


/**********************************************
 * This is a large comment block in JavaScript.
 * It is created to make the file appear larger
 * for testing or demonstration purposes.
 * Feel free to modify or remove it as needed.
 **********************************************/
