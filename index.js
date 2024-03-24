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
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxNumber <= arr[i]) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

console.log(getMax([100, 0, 200, -100, 5, 1000]));

// HARD CHALLENGES //

function showStars(num) {
  let ratings = "";
  for (let i = 1; i <= Math.floor(num); i++) {
    ratings += "*";
    if (i !== Math.floor(num)) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(num)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showStars(3.5));

async function getPost(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json();
  const posts = result.filter((element) => element.userId === userId);
  console.log(posts);
}

getPost(4);

async function firstSixIncomplete() {
  const todoPromise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todoResult = await todoPromise.json();
  const incomplete = todoResult
    .filter((element) => element.completed === false)
    .slice(0, 6);
  console.log(incomplete);
}
firstSixIncomplete();
