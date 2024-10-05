"use strict";

// To toggle between light and dark mode.

// Creates variable "displayTheme" that stores the current mode.
let displayTheme;
// Retrieves previously set mode.
displayTheme = localStorage.getItem('displayTheme');
// If no theme has been set, defaults to dark.
if (displayTheme === 'light') {
    executeLightMode();
} else {
    executeDarkMode();
}

// Function toggleTheme toggles between modes.
function toggleTheme() {
    // If current mode is light, switches to dark mode.
    if (displayTheme === 'light') {
        executeDarkMode();
    }
    // If current mode is dark, switches to light mode. 
    else {
        executeLightMode();
    }
}

// Function executeLightMode switches to light mode.
function executeLightMode() {
    // Sets the colour themes for background, accent, visual, and texts to light mode.
    document.documentElement.style.setProperty('--bg-color', '#EBF1F4');
    document.documentElement.style.setProperty('--accent-color', '#324545');
    document.documentElement.style.setProperty('--visual-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--subtext-color', '#5f5f5f');
    document.documentElement.style.setProperty('--link-color', '#574FFF');
    document.documentElement.style.setProperty('--command-color', '#B7BFC2');
    // Sets the theme logo to light mode variant.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Light.svg";
    document.getElementById("js-theme-logo").style.width = "86%";
    // Sets the search logo to light mode variant.
    document.getElementById("js-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-search-button").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-new-button").src = "Logos/New Logo Light.svg";
    // Sets light mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'light');
    // Sets light mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// Function executeDarkMode switches to dark mode.
function executeDarkMode() {
    // Sets the colour themes for background, accent, visual, and texts to dark mode.
    document.documentElement.style.setProperty('--bg-color', '#1C1E1C');
    document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
    document.documentElement.style.setProperty('--visual-color', '#111211');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--subtext-color', '#9F9F9F');
    document.documentElement.style.setProperty('--link-color', '#A59DF1');
    document.documentElement.style.setProperty('--command-color', '#3F4240');
    // Sets the theme logo to dark mode variant.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Dark.svg";
    document.getElementById("js-theme-logo").style.width = "95%";
    // Sets search logo to dark mode variant.
    document.getElementById("js-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-search-button").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-new-button").src = "Logos/New Logo Dark.svg";
    // Sets dark mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'dark');
    // Sets dark mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// To add functions for the header. Opens and closes the search bar, processes search queries, and opens and closes the menu.

// Function openSearch opens the search bar when the toggle search button is pressed.
function openSearch() {
    // Hides the toggle search button.
    document.getElementById("js-open-search-button").style.display = "none";
    // Hides the theme button.
    document.getElementById("js-theme-button").style.display = "none";
    // Unhides the search bar.
    document.getElementById("js-search-input").style.display = "inline";
    // Unhides the input search button.
    document.getElementById("js-enter-search-button").style.display = "inline";
    // Automatically focuses the user on the search bar.
    document.getElementById("js-search-input").focus();
    // Adds search bar close function when escape is pressed while open.
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-search-input").style.display == "inline") {
                closeSearch();
            }}})
}

// Function closeSearch closes the search bar when the search bar is unfocused or the user presses escape while there is no text.
function closeSearch() {
    // Unhides the toggle search button.
    document.getElementById("js-open-search-button").style.display = "inline";
    // Unhides the theme button.
    document.getElementById("js-theme-button").style.display = "inline";
    // Hides the search bar.
    document.getElementById("js-search-input").style.display = "none";
    // Hides the input search button.
    document.getElementById("js-enter-search-button").style.display = "none";
}

// Creates variable "searchQuery" that processes user inputs in the search bar.
// Function processQuery redirects users or closes the search bar, depending on input.
function processQuery() {
    let searchQuery;
    // Sets searchQuery as user input in the search bar.
    searchQuery = document.getElementById('js-search-input').value;
    // If the user presses escape while there is no text, closes the search bar.
    if (event.key === "Escape" && searchQuery.length === 0) {
        closeSearch();
    }
    // If the user presses enter while there is text, redirects the user to the search page.
    if (event.key === "Enter") {
        redirect(searchQuery);
    }
}
    
// Function redirect() redirects the user based on search bar input.
function redirect(searchQuery) {
    // If there is no content in the search bar, alert the user that an input is necessary.
    if (searchQuery.trim().length === 0) {
        alert("Please input a search.");
    }
    // If there is content in the search bar, redirect the user to the search page.
    else {
        // Sets searchQuery as the search bar input.
        searchQuery = document.getElementById('js-search-input').value;
        // Creates constant "redirectLink" that is the link for the search page with query parameter "search" set to search bar input.
        const redirectLink = "https://taylorbowl.wiki/search?search=" + searchQuery.trim();
        // Redirects the user to the link stored in redirectLink.
        window.location.href = redirectLink;
    }
}
