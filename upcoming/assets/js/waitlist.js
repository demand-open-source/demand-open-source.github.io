var modal = document.getElementById("myModal");
var buttons = document.getElementsByClassName("btn-click");
var closeButtons = document.getElementsByClassName("close");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        modal.style.display = "flex";
    };
}

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        modal.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
