var localWeddingDate = new Date(2025, 4, 11, 1, 0, 0); 
var weddingDate = localWeddingDate.getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if(days > 1){
        document.getElementById("countdown").innerHTML += days + " dana ";
    }
    else {
        document.getElementById("countdown").innerHTML += days + " dan ";
    }
    if(hours > 1){
        document.getElementById("countdown").innerHTML += hours + " sata ";
    }
    else {
        document.getElementById("countdown").innerHTML += hours + " sat ";
    }
    if(minutes > 1){
        document.getElementById("countdown").innerHTML += minutes + " minuta ";
    }
    else {
        document.getElementById("countdown").innerHTML += minutes + " minut ";
    }
    if(seconds > 1){
        document.getElementById("countdown").innerHTML += seconds + " sekunde ";
    }
    else {
        document.getElementById("countdown").innerHTML += seconds + " sekunda";
    }
}

setInterval(updateCountdown, 1000);
