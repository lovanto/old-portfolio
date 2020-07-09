const pageAbout = document.getElementById("about");
const pageMain = document.getElementById("main");
const pageWorks = document.getElementById("works");

const btnWorks = document.getElementById("btn-works");
const btnAbout = document.getElementById("btn-about");
const btnBack = document.getElementById("btn-back");

const copyright = document.getElementById("copyright");
const info = document.getElementById("info");

pageAbout.style.display = "none";
pageWorks.style.display = "none";

function showAbout() {
    if (pageAbout.style.display === "none") {
        pageAbout.style.display = "block";
        pageMain.style.display = "none";
        btnWorks.style.display = "none";
        btnAbout.style.display = "none";
        btnBack.style.display = "block";
    } else {
        pageAbout.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
    }
}

function showWorks() {
    if (pageWorks.style.display === "none") {
        pageWorks.style.display = "block";
        pageMain.style.display = "none";
        btnWorks.style.display = "none";
        btnAbout.style.display = "none";
        btnBack.style.display = "block";
        copyright.style.display = "none";
    } else {
        pageWorks.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
        copyright.style.display = "block";
    }
}

function backAction() {
    if (pageAbout.style.display === "block") {
        showAbout();
    } else if (pageWorks.style.display === "block") {
        showWorks();
    }
}