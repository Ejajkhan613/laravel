let countSearch = 1;
let countAbout = 1;
let softwarebtnCount = 1;

let search = document.querySelector("#search");
let searchDiv = document.querySelector("#searchDiv");
search.addEventListener("click", function () {
    countSearch++;
    if (countSearch % 2 == 0) {
        searchDiv.innerHTML = ""
        let input = document.createElement("input");
        input.style.border = "2px solid teal";
        searchDiv.style.display = "inline";
        input.setAttribute("placeholder", "Search");
        input.style.padding = "5px"
        input.style.borderRadius = "5px";
        searchDiv.append(input);
    } else {
        searchDiv.innerHTML = "";
    }
})






let aboutus = document.querySelector("#about");
aboutus.addEventListener("click", function () {
    countAbout++;
    if (countAbout % 2 == 0) {
        let list = document.querySelector(".aboutusMain");
        list.style.display = "block";
    } else {
        let list = document.querySelector(".aboutusMain");
        list.style.display = "none";
    }
})






let softwarebtn = document.querySelector("#softwarebtn");

softwarebtn.addEventListener("click", function () {
    softwarebtnCount++;
    if (softwarebtnCount % 2 == 0) {
        let showsoftwareMenu = document.querySelector("#softwareCont");
        showsoftwareMenu.style.display = "block";
    } else {
        let showsoftwareMenu = document.querySelector("#softwareCont");
        showsoftwareMenu.style.display = "none";
    }
})


let redirectLoginPage = document.querySelectorAll(".RedirectLoginPage").forEach(elem => {
    elem.addEventListener("click", function () {
        window.location.href = "/project/login.html";
    })
})


