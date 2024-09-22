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
    document.documentElement.style.setProperty('--link-color', '#117E6A');
    document.documentElement.style.setProperty('--command-color', '#992995');
    // Sets the theme and search logos to light mode variants.
    document.getElementById("js-theme-logo").src="Logos/Theme Logo Light.svg";
    document.getElementById("js-theme-logo").style.width = "85%";
    document.getElementById("js-search-logo").src="Logos/Search Logo Light.svg";
    document.getElementById("js-new-search-logo").src="Logos/Search Logo Light.svg";
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
    document.documentElement.style.setProperty('--link-color', '#ADEEF2');
    document.documentElement.style.setProperty('--command-color', '#DA7EFF');
    // Sets the theme and search logos to dark mode variants.
    document.getElementById("js-theme-logo").src="Logos/Theme Logo Dark.svg";
    document.getElementById("js-theme-logo").style.width = "95%";
    document.getElementById("js-search-logo").src="Logos/Search Logo Dark.svg";
    document.getElementById("js-new-search-logo").src="Logos/Search Logo Dark.svg";
    // Sets dark mode as the current mode in local storage, for reference when switching pages.
    localStorage.setItem('displayTheme', 'dark');
    // Sets dark mode as the current mode in JS.
    displayTheme = localStorage.getItem('displayTheme');
}

// To open and close the search bar, and redirect users.

// Function openSearch opens the search bar when the toggle search button is pressed.
function openSearch() {
    // Hides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "none";
    // Hides the toggle search button.
    document.getElementById("js-search-button").style.display = "none";
    // Hides the theme button.
    document.getElementById("js-theme-button").style.display = "none";
    // Unhides the search bar.
    document.getElementById("js-search-input").style.display = "inline";
    // Unhides the input search button.
    document.getElementById("js-new-search-button").style.display = "inline";
    // Automatically focuses the user on the search bar.
    document.getElementById("js-search-input").focus();
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

// Function closeSearch closes the search bar when the search bar is unfocused or the user presses escape while there is no text.
function closeSearch() {
    // Unhides the TaylorBowl logo.
    document.getElementById("js-taylorbowl-logo").style.display = "flex";
    // Unhides the toggle search button.
    document.getElementById("js-search-button").style.display = "inline";
    // Unhides the theme button.
    document.getElementById("js-theme-button").style.display = "inline";
    // Hides the search bar.
    document.getElementById("js-search-input").style.display = "none";
    // Hides the input search button.
    document.getElementById("js-new-search-button").style.display = "none";
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
}
