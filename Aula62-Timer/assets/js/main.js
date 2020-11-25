const lblTimer = document.querySelector('.lblTimer');
const btnStart = document.querySelector('.btnStart');
const btnPause = document.querySelector('.btnPause');
const btnReset = document.querySelector('.btnReset');
let timer;

btnStart.addEventListener('click',  btnStartClicked);
btnPause.addEventListener('click',  btnPauseClicked);
btnReset.addEventListener('click',  btnResetClicked);

function btnStartClicked(e) {
    timer = setInterval(() => {
        const text = lblTimer.innerHTML;
        let nHour = Number(text.split(":")[0]);
        let nMin = Number(text.split(":")[1]);
        let nSec = Number(text.split(":")[2]);
    
        nSec += 1;
        if (nSec >= 60) {
            nSec = 0;
            nMin += 1;
        }
        if (nMin >= 60) {
            nMin = 0;
            nHour += 1;
        }
    
        let sHour = nHour.toString();
        let sMin = nMin.toString();
        let sSec = nSec.toString();
    
        sHour = addZeroToLeftIfNecessary(sHour);
        sMin = addZeroToLeftIfNecessary(sMin);
        sSec = addZeroToLeftIfNecessary(sSec);
    
        lblTimer.innerHTML = `${sHour}:${sMin}:${sSec}`;
    }, 1000);
    if (lblTimer.classList.contains("timerStopped")) lblTimer.classList.remove("timerStopped");
    lblTimer.classList.add("timerRunning");
}

function btnPauseClicked(e) {
    clearInterval(timer);
    if (lblTimer.classList.contains("timerRunning")) lblTimer.classList.remove("timerRunning");
    lblTimer.classList.add("timerStopped");
}

function btnResetClicked(e) {
    clearInterval(timer);
    if (lblTimer.classList.contains("timerRunning")) lblTimer.classList.remove("timerRunning");
    lblTimer.classList.add("timerStopped");
    lblTimer.innerHTML = "00:00:00";
}

function addZeroToLeftIfNecessary(numStr) {
    return (Number(numStr) < 10) ? `0${numStr}` : numStr;
}

