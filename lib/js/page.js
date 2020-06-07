function showAbout() {
    var pageAbout = document.getElementById("about");
    var pageMain = document.getElementById("main");
    if (pageAbout.style.display === "none") {
        pageAbout.style.display = "block";
        pageMain.style.display = "none";
    } else {
        pageAbout.style.display = "none";
        pageMain.style.display = "block";
    }
}