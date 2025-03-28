<<<<<<< HEAD
var weddingDate = new Date("May 11, 2025 00:00:00").getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " dana " + (hours + 1) + " sati " + minutes + " minuta " + seconds + " sekundi";
}

updateCountdown();
=======
var weddingDate = new Date("May 11, 2025 00:00:00").getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " dana " + hours + " sati " + minutes + " minuta " + seconds + " sekundi";
}

updateCountdown();
>>>>>>> 1d03f9793794c58cec5f97a573b12f7839e89a40
setInterval(updateCountdown, 1000);