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
    } else {
        pageWorks.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
    }
}

function backAction() {
    if (pageAbout.style.display === "block") {
        showAbout();
    } else if (pageWorks.style.display === "block") {
        showWorks();
    }
}