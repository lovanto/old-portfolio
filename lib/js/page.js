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
        btnBack.style.color = "black";
        copyright.style.display = "none";
        info.style.display = "none";
    } else {
        pageWorks.style.display = "none";
        pageMain.style.display = "block";
        btnWorks.style.display = "block";
        btnAbout.style.display = "block";
        btnBack.style.display = "none";
        btnBack.style.color = "white";
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