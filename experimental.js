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
    document.documentElement.style.setProperty('--command-color', '#AAB7BE');
    // Sets the theme and search logos to light mode variants.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Light.svg";
    document.getElementById("js-theme-logo").style.width = "86%";
    document.getElementById("js-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Light.svg";
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Light.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Light.svg";
    document.getElementById("js-menu-theme-logo").src = "Logos/Theme Logo Light.svg";
    document.getElementById("js-menu-search-logo").src = "Logos/Search Logo Light.svg";
    var togglerImages = document.getElementsByClassName("toggler-image");
    for (var i = 0; i < togglerImages.length; i+= 1) {
        togglerImages[i].src = "Logos/Mobile Toggler Light.svg";
    }
    document.getElementById("js-mode-text").innerHTML = "Dark Mode";
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
    document.documentElement.style.setProperty('--visual-color', '#000000');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--subtext-color', '#9F9F9F');
    document.documentElement.style.setProperty('--link-color', '#A59DF1');
    document.documentElement.style.setProperty('--command-color', '#4F524F');
    // Sets the theme and search logos to dark mode variants.
    document.getElementById("js-theme-logo").src = "Logos/Theme Logo Dark.svg";
    document.getElementById("js-theme-logo").style.width = "95%";
    document.getElementById("js-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-new-search-logo").src = "Logos/Search Logo Dark.svg";
    document.getElementById("js-menu-logo").src = "Logos/Menu Logo Dark.svg";
    document.getElementById("js-close-menu-logo").src = "Logos/Menu Logo Dark.svg";
    document.getElementById("js-menu-theme-logo").src = "Logos/Theme Logo Dark.svg";
    document.getElementById("js-menu-search-logo").src = "Logos/Search Logo Dark.svg";
    var togglerImages = document.getElementsByClassName("toggler-image");
    for (var i = 0; i < togglerImages.length; i+= 1) {
        togglerImages[i].src = "Logos/Mobile Toggler Dark.svg";
    }
    document.getElementById("js-mode-text").innerHTML = "Light Mode";
    // Sets dark mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'dark');
    // Sets dark mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// To add functions for the header. Opens and closes the search bar, processes search queries, and opens and closes the menu.

// Function openSearch opens the search bar when the toggle search button is pressed.
function openSearch() {
    // Hides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "none";
    // Hides the toggle search button.
    document.getElementById("js-lg-open-search-button").style.display = "none";
    // Hides the theme button.
    document.getElementById("js-lg-theme-button").style.display = "none";
    // Hides the menu button.
    document.getElementById("js-open-menu-button").style.display = "none";
    // Unhides the search bar.
    document.getElementById("js-lg-search-input").style.display = "inline";
    // Unhides the input search button.
    document.getElementById("js-lg-enter-search-button").style.display = "inline";
    // Automatically focuses the user on the search bar.
    document.getElementById("js-lg-search-input").focus();
}

// Function closeSearch closes the search bar when the search bar is unfocused or the user presses escape while there is no text.
function closeSearch() {
    // Unhides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "flex";
    // Unhides the toggle search button.
    document.getElementById("js-lg-open-search-button").style.display = "inline";
    // Unhides the theme button.
    document.getElementById("js-lg-theme-button").style.display = "inline";
    document.getElementById("js-open-menu-button").style.display = "inline";
    // Hides the search bar.
    document.getElementById("js-lg-search-input").style.display = "none";
    // Hides the input search button.
    document.getElementById("js-lg-enter-search-button").style.display = "none";
}

// Creates variable "searchQuery" that processes user inputs in the search bar.
let searchQuery = "";
// Function processQuery redirects users or closes the search bar, depending on input.
function processQuery() {
    // Sets searchQuery as user input in the search bar.
    searchQuery = document.querySelector('.search-input').value;
    // If the user presses escape while there is no text, closes the search bar.
    if (event.key === "Escape" && searchQuery.length === 0) {
        closeSearch();
    }
    // If the user presses enter while there is text, redirects the user to the search page.
    if (event.key === "Enter") {
        redirect();
    }
}
    
// Function redirect() redirects the user based on search bar input.
function redirect() {
    // If there is no content in the search bar, alert the user that an input is necessary.
    if (searchQuery.trim().length === 0) {
        alert("Please input a search.");
    }
    // If there is content in the search bar, redirect the user to the search page.
    else {
        // Sets searchQuery as the search bar input.
        searchQuery = document.querySelector('.search-input').value;
        // Creates constant "redirectLink" that is the link for the search page with query parameter "search" set to search bar input.
        const redirectLink = "https://taylorbowl.wiki/search?search=" + searchQuery.trim();
        // Redirects the user to the link stored in redirectLink.
        window.location.href = redirectLink;
    }
}

// To open and close the menu.



/*
// To hide and unhide content related to Ephemera and Perpetua.

// Creates variable "visible" that stores if the toggle content is visible. Defaults to false when a page is first opened.
let visible = false

// Function toggleVisibility() toggles between visible and invisible.
function toggleVisibility() {
    // If currently visible, makes toggle content invisible and vice versa.
    visible ? makeInvisible() : makeVisible();
}

// Function makeVisible() sets toggle content as visible.
function makeVisible() {
    // Sets toggle content as visible.
    document.getElementById("js-toggle-content").style.display = "inline";
    // Sets toggle content in the contents page as visible.
    document.getElementById("js-toggle-contents-page").style.display = "inline";
    // Sets the toggler text to "[hide]" to indicate its new function of hiding toggle content when pressed.
    document.getElementById("js-toggler").innerHTML = "[hide]";
    // Sets "visible" to true.
    visible = true;
    // In console, logs the text "made visible". 
    console.log("made visible");
}

// Function makeInvisible() sets toggle content as invisible.
function makeInvisible() {
    // Sets toggle content as invisible.
    document.getElementById("js-toggle-content").style.display = "none";
    // Sets toggle content in the contents page as invisible.
    document.getElementById("js-toggle-contents-page").style.display = "none";
    // Sets the toggler text to "[show]" to indicate its new function of unhiding toggle content when pressed.
    document.getElementById("js-toggler").innerHTML = "[show]";
    // Sets "visible" to false.
    visible = false;
    // In console, logs the text "made invisible".
    console.log("made invisible");
*/

// To hide and unhide content.

function toggleContent(section) {
    let sectionID = "js-toggle-content-" + section;
    let togglerID = "js-toggler-" + section;
    let sectionStatus = window.getComputedStyle(document.getElementById(togglerID)).getPropertyValue("transform");
    if (sectionStatus == "none") {
        showContent(sectionID, togglerID);
    }
    else {
        hideContent(sectionID, togglerID);
    }
}

function hideContent(sectionID, togglerID) {
    document.getElementById(sectionID).style.display = "none";
    document.getElementById(togglerID).style.transform = "none";
}

function showContent(sectionID, togglerID) {
    document.getElementById(sectionID).style.display = "block";
    document.getElementById(togglerID).style.transform = "rotate(180deg)";
}

// To open and close the menu.

function openMenu() {
    // Opens the menu.
    document.getElementById("js-page-cover").style.display = "block";
    document.getElementById("js-menu").style.display = "block";
    escapeMenu();
}

function closeMenu() {
    // Closes the menu.
    document.getElementById("js-page-cover").style.display = "none";
    document.getElementById("js-menu").style.display = "none";
}

function escapeMenu() {
    document.body.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            if (document.getElementById("js-page-cover").style.display == "block") {
                closeMenu();
            }
            else if (document.getElementById("js-lg-search-input").style.display == "inline") {
                closeSearch();
            }}})}
