let displayTheme;
displayTheme = localStorage.getItem('displayTheme');

console.log(localStorage.getItem('displayTheme'));
if (displayTheme === 'light') {
    executeLightMode();
} else {
    executeDarkMode();
}
console.log(localStorage.getItem('displayTheme'));

function toggleTheme() {
    console.log(localStorage.getItem('displayTheme'));
    if (displayTheme === 'light') {
        executeDarkMode();
    } else {
        executeLightMode();
    }
}

function executeLightMode() {
    document.documentElement.style.setProperty('--bg-color', '#F6F9F5');
    document.documentElement.style.setProperty('--accent-color', '#324545');
    document.documentElement.style.setProperty('--visual-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--subtext-color', '#5f5f5f');
    document.documentElement.style.setProperty('--link-color', '#117E6A');
    document.documentElement.style.setProperty('--command-color', '#992995');
    document.getElementById("js-theme-logo").src="Logos/Theme Logo Light.svg";
    document.getElementById("js-theme-logo").style.width = "85%";
    document.getElementById("js-search-logo").src="Logos/Search Logo Light.svg";
    localStorage.setItem('displayTheme', 'light');
    displayTheme = localStorage.getItem('displayTheme');
}

function executeDarkMode() {
    document.documentElement.style.setProperty('--bg-color', '#181C16');
    document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
    document.documentElement.style.setProperty('--visual-color', '#000000');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--subtext-color', '#9f9f9f');
    document.documentElement.style.setProperty('--link-color', '#64BAAA');
    document.documentElement.style.setProperty('--command-color', '#C859C5');
    document.getElementById("js-theme-logo").src="Logos/Theme Logo Dark.svg";
    document.getElementById("js-theme-logo").style.width = "95%";
    document.getElementById("js-search-logo").src="Logos/Search Logo Dark.svg";
    localStorage.setItem('displayTheme', 'dark');
    console.log(localStorage.getItem('displayTheme'));
    displayTheme = localStorage.getItem('displayTheme');
}

let searchQuery = "";

function openSearch() {
    console.log("opened search");

    document.getElementById("js-taylorbowl-logo").style.display = "none";
    document.getElementById("js-search-button").style.display = "none";
    document.getElementById("js-theme-button").style.display = "none";
    document.getElementById("js-search-input").style.display = "inline";
    document.getElementById("js-new-search-button").style.display = "inline";
}

function processQuery() {
    searchQuery = document.querySelector('.search-input').value;
    console.log(searchQuery);
    if (event.key === "Escape" && searchQuery.length === 0) {
        closeSearch();
    }
    else if (event.key === "Enter") {
        redirect();
    }
}

function closeSearch() {
        console.log("closed search");

        document.getElementById("js-taylorbowl-logo").style.display = "flex";
        document.getElementById("js-search-button").style.display = "inline";
        document.getElementById("js-theme-button").style.display = "inline";
        document.getElementById("js-search-input").style.display = "none";
        document.getElementById("js-new-search-button").style.display = "none";
    }
    
function redirect() {
    if (searchQuery.trim().length === 0) {
        alert("Please input a search");
    }
    else {
        searchQuery = document.querySelector('.search-input').value;
        const redirectLink = "https://taylorbowl.wiki/search?search=" + searchQuery.trim();
        window.location.href = redirectLink;
    }
}
