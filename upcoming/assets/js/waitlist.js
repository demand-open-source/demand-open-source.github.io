var modal = document.getElementById("my-modal");
var buttons = document.getElementsByClassName("btn-click");
var closeButtons = document.getElementsByClassName("close");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        modal.style.display = "flex";
        document.documentElement.style.overflow = 'hidden';
    };
}

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        modal.style.display = "none";
        document.documentElement.style.overflow = '';
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.documentElement.style.overflow = '';
    }
}


countdown(
    new Date(2025, 4, 28, 23, 59, 59, 999),
    function(ts) {
        var days = ts.days;
        var hours = String(ts.hours).padStart(2, '0');
        var minutes = String(ts.minutes).padStart(2, '0');
        var seconds = String(ts.seconds).padStart(2, '0');
        var formattedTime = `${days} days`;
        document.getElementById('countdown').innerHTML = formattedTime;
    },
    countdown.DAYS);

countdown(
    new Date(2025, 2, 28, 23, 59, 59, 999),
    function(ts) {
        var days = ts.days;
        var hours = String(ts.hours).padStart(2, '0');
        var minutes = String(ts.minutes).padStart(2, '0');
        var seconds = String(ts.seconds).padStart(2, '0');
        var formattedTime = `${days} days`;
        document.getElementById('countdown-2').innerHTML = '-' + formattedTime;
    },
    countdown.DAYS);
