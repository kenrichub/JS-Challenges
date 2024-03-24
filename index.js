// MEDIUM CHALLENGES

function calcTime (seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60

    if (timerMinutes < 10) {
        timerMinutes = '0' + timerMinutes
    }

    if (timerSeconds < 10) {
        timerSeconds = '0' + timerSeconds
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(120))
