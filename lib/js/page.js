function showAbout() {
    var pageAbout = document.getElementById("about");
    var pageMain = document.getElementById("main");
    var btnWorks = document.getElementById("btn-works");
    var btnAbout = document.getElementById("btn-about");
    var btnBack = document.getElementById("btn-back");

    if (pageAbout.style.display === "none") {
        pageAbout.style.display = "block";
        pageMain.style.display = "none";
        btnWorks.style.display = "none";
        btnAbout.style.display = "block";
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
    var pageMain = document.getElementById("main");
    var pageWorks = document.getElementById("works");
    var btnWorks = document.getElementById("btn-works");
    var btnAbout = document.getElementById("btn-about");
    var btnBack = document.getElementById("btn-back");

    if (pageWorks.style.display === "none") {
        pageWorks.style.display = "block";
        pageMain.style.display = "none";
        btnWorks.style.display = "block";
        btnAbout.style.display = "none";
        btnBack.style.display = "block";
    } else {
        pageWorks.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
    }
}