// Theme.js

document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("themeStylesheet");
    const savedTheme = localStorage.getItem("selectedTheme");

    // Detect if we are in a subfolder (like Pages/)
    const inSubFolder = window.location.pathname.toLowerCase().includes("/pages/");

    if (savedTheme) {
        // If in subfolder, go up one folder
        if (inSubFolder) {
            themeLink.setAttribute("href", "../" + savedTheme);
        } else {
            themeLink.setAttribute("href", savedTheme);
        }

        // Set dropdown value if on settings page
        const themeSelect = document.getElementById("themeSelect");
        if (themeSelect) {
            themeSelect.value = savedTheme;
        }
    }

    // If on settings page, save changes
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
        themeSelect.addEventListener("change", function () {
            localStorage.setItem("selectedTheme", this.value);
            if (inSubFolder) {
                themeLink.setAttribute("href", "../" + this.value);
            } else {
                themeLink.setAttribute("href", this.value);
            }
        });
    }
});
