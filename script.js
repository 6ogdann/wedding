var weddingDate = new Date("May 11, 2025 01:00:00").getTime();

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
