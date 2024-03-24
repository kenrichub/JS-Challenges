// MEDIUM CHALLENGES

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes < 10) {
    timerMinutes = "0" + timerMinutes;
  }

  if (timerSeconds < 10) {
    timerSeconds = "0" + timerSeconds;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(120));

function getMax(arr) {
  let maxNumber = arr[0]
    for (let i = 1; i < arr.length; i++) {
    if (maxNumber <= arr[i]) {
        maxNumber = arr[i]
    }
  }
  return maxNumber
}

console.log(getMax([100, 0, 200, -100, 5, 1000]));

