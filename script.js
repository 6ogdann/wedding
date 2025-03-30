var localWeddingDate = new Date(2025, 4, 11, 0, 0, 0); 
var weddingDate = localWeddingDate.getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + (days === 1 ? " dan " : " dana ") +
        hours + (hours === 1 ? " sat " : " sata ") +
        minutes + (minutes === 1 ? " minut " : " minuta ") +
        seconds + (seconds === 1 ? " sekunda" : " sekunde");
}

updateCountdown();
setInterval(updateCountdown, 1000);
