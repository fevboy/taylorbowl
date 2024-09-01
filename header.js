let searchQuery = "";

function openSearch() {
    console.log("opened search");

    document.getElementById("js-taylorbowl-logo-image").style.display = "none";
    document.getElementById("js-taylorbowl-logo-text").style.display = "none";
    document.getElementById("js-search-button").style.display = "none";
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

        document.getElementById("js-taylorbowl-logo-image").style.display = "inline";
        document.getElementById("js-taylorbowl-logo-text").style.display = "inline";
        document.getElementById("js-search-button").style.display = "inline";
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