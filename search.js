const page = document.querySelectorAll(".page");
const pageTitle = document.querySelectorAll(".page-title");
const pageDescription = document.querySelectorAll(".page-description");

let params = new URLSearchParams(document.location.search);
let searchParameter = params.get("search");
document.getElementById('js-search').value = searchParameter;
match();

function match() {
    const matchParameter = document.getElementById('js-search').value;
    console.log(pageTitle.length);
    for (var i = 0; i < pageTitle.length; i++) {
        console.log(i);
        const matchTitle = pageTitle[i].innerHTML.replace(/[() ]/g,'').toUpperCase();
        const matchDescription = pageDescription[i].innerHTML.replace(/[() ]/g,'').toUpperCase();
        if (
            matchTitle.indexOf(matchParameter.toUpperCase()) > -1 ||
            matchDescription.indexOf(matchParameter.toUpperCase()) > -1) {
                page[i].style.display = "";
                console.log("returned " + i);
        }
        else {
            page[i].style.display = "none";
        }
    }
}