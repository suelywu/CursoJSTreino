//Improved code after seeing teacher's solution

const lblTimer = document.querySelector('.lblTimer');
let seconds = 0;
let timer;

document.addEventListener('click', function(ev) {
    const el = ev.target;
    if (el.classList.contains("btnStart")) btnStartClicked
    else if (el.classList.contains("btnPause")) btnPauseClicked
    else if (el.classList.contains("btnReset")) btnResetClicked
});

function btnStartClicked(e) {
    // start timer
    timer = setInterval(() => {
        seconds++;
        lblTimer.innerHTML = getTimeFromSeconds(seconds)
    }, 1000);
    if (lblTimer.classList.contains("timerStopped")) lblTimer.classList.remove("timerStopped");
    lblTimer.classList.add("timerRunning");
}

function btnPauseClicked(e) {
    // stop timer
    clearInterval(timer);
    if (lblTimer.classList.contains("timerRunning")) lblTimer.classList.remove("timerRunning");
    lblTimer.classList.add("timerStopped");
}

function btnResetClicked(e) {
    // stop and reset timer
    clearInterval(timer);
    seconds = 0;
    if (lblTimer.classList.contains("timerRunning")) lblTimer.classList.remove("timerRunning");
    lblTimer.classList.add("timerStopped");
    lblTimer.innerHTML = getTimeFromSeconds(0);
}

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
       hour12: false,
       timeZone: 'UTC' 
    });
}
