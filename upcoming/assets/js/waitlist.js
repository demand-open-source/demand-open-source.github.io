var modal = document.getElementById("myModal");
var buttons = document.getElementsByClassName("btn-click");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        modal.style.display = "flex";
    };
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}