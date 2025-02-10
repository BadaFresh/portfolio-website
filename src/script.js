function lightToDark(theme){
    document.getElementById('theme-icon').src = theme === 'dark' ? 'img/light-dark.gif' : 'img/dark-light';
}

(() => {
    'use strict'

    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getStoredTheme = () => localStorage.getItem('theme')

    const setTheme = theme => {
        document.documentElement.setAttribute('data-bs-theme', theme)
        document.getElementById('theme-icon').src = theme === 'dark' ? 'img/dark.png' : 'img/light.png'
        document.getElementById('scrollph').src = theme === 'dark' ? 'img/scroll-phone-dark.gif' : 'img/scroll-phone-light.gif'
        document.getElementById('theme-toggle').style.backgroundColor = theme === 'dark' ? "#38393a" : "#f8f9fa"

    }

    // Immediately apply the theme when the page loads
    const currentTheme = getStoredTheme() || 'dark'  // Default to dark if no theme is stored
    setTheme(currentTheme)

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelectorAll("#section1").forEach(element => {
                element.style.opacity = "1";
                element.style.transform = "translateX(0)";
                type();
            });
        }, 1000);

        const themeButton = document.getElementById('theme-toggle')

        themeButton.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
            document.getElementById('theme-icon').src = newTheme === 'dark' ? 'img/light-dark.gif' : 'img/dark-light.gif'
            setTimeout(() => {
                setTheme(newTheme)
            }, 559)
            setStoredTheme(newTheme)
        })
    })
})()

document.addEventListener("scroll", function() {
    contentApear();
    handleFirstScroll()
});

function contentApear(){
    document.querySelectorAll(".content-section").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
        }
    });
}
function handleFirstScroll() {
    document.querySelectorAll(".scroll").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
        const scrollph = document.querySelector("#scrollph");
        const scrollpc = document.querySelector("#scrollpc");
        if (window.innerWidth <= 768 && scrollph) {
            scrollph.style.opacity = "0"; // Change opacity
            scrollph.style.animation = "null"; // Change animation
        }
        else{
            scrollpc.style.opacity = "0"; // Change opacity
            scrollpc.style.animation = "null"; // Change animation
            scrollpc.style.innerHeight = "1px"; // Change animation
        }


        }
    });
}

// Attach the event listener
window.addEventListener("scroll", handleFirstScroll, { passive: true });

const text = "Computer Science student with a strong foundation in software development, experienced in website development, and passionate about AI and cybersecurity. Enthusiastic about learning and applying new technologies to solve real-world problems. Fluent in English, Italian, Ukrainian, and Russian, enabling effective collaboration in diverse environments."
let index=0;
function type() {
    if (index < text.length) {
        document.getElementById("descript").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here
    } else {
        document.getElementById("descript").style.borderRight = "none"; // Remove cursor after typing
    }
}