function showpage2() {
    document.getElementById("page2").style.display = "block";
    document.getElementById("page1").style.display = "none";
}
function showpage3() {
    document.getElementById("page3").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "none";
}
function showpage4() {
    document.getElementById("page4").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "none";
}
function showpage5() {
    document.getElementById("page5").style.display = "block";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "none";
}
function choice() {
    if (document.getElementById("result").onclick) {
        document.getElementById("page5").style.display = "none";
        document.getElementById("page4").style.display = "none";
        document.getElementById("page3").style.display = "none";
        document.getElementById("page2").style.display = "none";
        document.getElementById("page1").style.display = "block";
        swal({ title: "Sweet!", text: "Your Cake will be Ready in 15 minutes", imageUrl: "../img/van.png" });
    }
}
