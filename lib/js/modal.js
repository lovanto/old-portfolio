// MODAL SETTINGS
const modalAurora = document.getElementById("modalAurora");
const modalPamAir = document.getElementById("modalPamAir");
const modalLibon = document.getElementById("modalLibon");
const modalSiBunda = document.getElementById("modalSiBunda");
const modalBlog = document.getElementById("modalBlog");
const modalGithubApp = document.getElementById("modalGithubApp");
const modalBookon = document.getElementById("modalBookon");
const modalMMA = document.getElementById("modalMMA");
const modalPortfolio = document.getElementById("modalPortfolio");
const modalCovid = document.getElementById("modalCovid");

const btnAurora = document.getElementById("btnAurora");
const btnPamAir = document.getElementById("btnPamAir");
const btnLibon = document.getElementById("btnLibon");
const btnSiBunda = document.getElementById("btnSiBunda");
const btnBlog = document.getElementById("btnBlog");
const btnGithubApp = document.getElementById("btnGithubApp");
const btnBookon = document.getElementById("btnBookon");
const btnMMA = document.getElementById("btnMMA");
const btnPortfolio = document.getElementById("btnPortfolio");
const btnCovid = document.getElementById("btnCovid");

const span1 = document.getElementsByClassName("close-modal")[0];
const span2 = document.getElementsByClassName("close-modal")[1];
const span3 = document.getElementsByClassName("close-modal")[2];
const span4 = document.getElementsByClassName("close-modal")[3];
const span5 = document.getElementsByClassName("close-modal")[4];
const span6 = document.getElementsByClassName("close-modal")[5];
const span7 = document.getElementsByClassName("close-modal")[6];
const span8 = document.getElementsByClassName("close-modal")[7];
const span9 = document.getElementsByClassName("close-modal")[8];
const span10 = document.getElementsByClassName("close-modal")[9];

btnAurora.onclick = function () {
    modalAurora.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnPamAir.onclick = function () {
    modalPamAir.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnLibon.onclick = function () {
    modalLibon.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnSiBunda.onclick = function () {
    modalSiBunda.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnBlog.onclick = function () {
    modalBlog.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnGithubApp.onclick = function () {
    modalGithubApp.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnBookon.onclick = function () {
    modalBookon.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnMMA.onclick = function () {
    modalMMA.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnPortfolio.onclick = function () {
    modalPortfolio.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}
btnCovid.onclick = function () {
    modalCovid.style.display = "block";
    pageWorks.style.display = "none";
    btnBack.style.display = "none";
}

span1.onclick = function () {
    modalAurora.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span2.onclick = function () {
    modalPamAir.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span3.onclick = function () {
    modalLibon.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span4.onclick = function () {
    modalSiBunda.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span5.onclick = function () {
    modalBlog.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span6.onclick = function () {
    modalGithubApp.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span7.onclick = function () {
    modalBookon.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span8.onclick = function () {
    modalMMA.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span9.onclick = function () {
    modalPortfolio.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}
span10.onclick = function () {
    modalCovid.style.display = "none";
    pageWorks.style.display = "block";
    btnBack.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modalAurora ||
        event.target == modalPamAir ||
        event.target == modalLibon ||
        event.target == modalSiBunda ||
        event.target == modalBlog ||
        event.target == modalGithubApp ||
        event.target == modalBookon ||
        event.target == modalMMA ||
        event.target == modalPortfolio ||
        event.target == modalCovid) {
        if (modalAurora.style.display == "block") {
            modalAurora.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalPamAir.style.display == "block") {
            modalPamAir.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalLibon.style.display == "block") {
            modalLibon.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalSiBunda.style.display == "block") {
            modalSiBunda.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalBlog.style.display == "block") {
            modalBlog.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalGithubApp.style.display == "block") {
            modalGithubApp.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalBookon.style.display == "block") {
            modalBookon.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalMMA.style.display == "block") {
            modalMMA.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalPortfolio.style.display == "block") {
            modalPortfolio.style.display = "none";
            pageWorks.style.display = "block";
        } else if (modalCovid.style.display == "block") {
            modalCovid.style.display = "none";
            pageWorks.style.display = "block";
        }
    }
}