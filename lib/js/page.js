var pageAbout = document.getElementById("about");
var pageMain = document.getElementById("main");
var pageWorks = document.getElementById("works");

var btnWorks = document.getElementById("btn-works");
var btnAbout = document.getElementById("btn-about");
var btnBack = document.getElementById("btn-back");

var copyright = document.getElementById("copyright");
var info = document.getElementById("info");

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
        info.style.display = "none";
    } else {
        pageWorks.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
        copyright.style.display = "block";
        info.style.display = "block";
    }
}

function backAction() {
    if (pageAbout.style.display === "block") {
        showAbout();
    } else if (pageWorks.style.display === "block") {
        showWorks();
    }
}