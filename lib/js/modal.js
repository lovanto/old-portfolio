// MODAL SETTINGS
var modalAurora = document.getElementById("modalAurora");
var modalPamAir = document.getElementById("modalPamAir");
var modalLibon = document.getElementById("modalLibon");
var modalSiBunda = document.getElementById("modalSiBunda");
var modalBlog = document.getElementById("modalBlog");
var modalGithubApp = document.getElementById("modalGithubApp");
var modalBookon = document.getElementById("modalBookon");
var modalMMA = document.getElementById("modalMMA");

var btnAurora = document.getElementById("btnAurora");
var btnPamAir = document.getElementById("btnPamAir");
var btnLibon = document.getElementById("btnLibon");
var btnSiBunda = document.getElementById("btnSiBunda");
var btnBlog = document.getElementById("btnBlog");
var btnGithubApp = document.getElementById("btnGithubApp");
var btnBookon = document.getElementById("btnBookon");
var btnMMA = document.getElementById("btnMMA");

var span = document.getElementsByClassName("close-modal")[0];
var span1 = document.getElementsByClassName("close-modal")[1];
var span2 = document.getElementsByClassName("close-modal")[2];
var span3 = document.getElementsByClassName("close-modal")[3];
var span4 = document.getElementsByClassName("close-modal")[4];
var span5 = document.getElementsByClassName("close-modal")[5];
var span6 = document.getElementsByClassName("close-modal")[6];
var span7 = document.getElementsByClassName("close-modal")[7];

btnAurora.onclick = function () {
    modalAurora.style.display = "block";
}
btnPamAir.onclick = function () {
    modalPamAir.style.display = "block";
}
btnLibon.onclick = function () {
    modalLibon.style.display = "block";
}
btnSiBunda.onclick = function () {
    modalSiBunda.style.display = "block";
}
btnBlog.onclick = function () {
    modalBlog.style.display = "block";
}
btnGithubApp.onclick = function () {
    modalGithubApp.style.display = "block";
}
btnBookon.onclick = function () {
    modalBookon.style.display = "block";
}
btnMMA.onclick = function () {
    modalMMA.style.display = "block";
}

span.onclick = function () {
    modalAurora.style.display = "none";
}
span1.onclick = function () {
    modalPamAir.style.display = "none";
}
span2.onclick = function () {
    modalLibon.style.display = "none";
}
span3.onclick = function () {
    modalSiBunda.style.display = "none";
}
span4.onclick = function () {
    modalBlog.style.display = "none";
}
span5.onclick = function () {
    modalGithubApp.style.display = "none";
}
span6.onclick = function () {
    modalBookon.style.display = "none";
}
span7.onclick = function () {
    modalMMA.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalAurora ||
        event.target == modalPamAir ||
        event.target == modalLibon ||
        event.target == modalSiBunda ||
        event.target == modalBlog ||
        event.target == modalGithubApp ||
        event.target == modalBookon ||
        event.target == modalMMA) {
        if (modalAurora.style.display == "block") {
            modalAurora.style.display = "none";
        } else if (modalPamAir.style.display == "block") {
            modalPamAir.style.display = "none";
        } else if (modalLibon.style.display == "block") {
            modalLibon.style.display = "none";
        } else if (modalSiBunda.style.display == "block") {
            modalSiBunda.style.display = "none";
        } else if (modalBlog.style.display == "block") {
            modalBlog.style.display = "none";
        } else if (modalGithubApp.style.display == "block") {
            modalGithubApp.style.display = "none";
        } else if (modalBookon.style.display == "block") {
            modalBookon.style.display = "none";
        } else if (modalMMA.style.display == "block") {
            modalMMA.style.display = "none";
        }
    }
}