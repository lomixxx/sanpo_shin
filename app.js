const whereList = [
  "３駅先で電車を降りて",
  "別の場所で",
  "立ったまま",
  "みんな集まって",
  "少し離れて"
];

const whatList = [
  "かっこいい漢字を探そう",
  "相談する",
  "1手進める",
  "役割を決める",
  "休憩する"
];

const whereEl = document.getElementById("where");
const whatEl = document.getElementById("what");
const startBtn = document.getElementById("startBtn");

let isRunning = false;

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function spin() {
  if (isRunning) return;
  isRunning = true;

  let count = 0;
  const max = 20 + Math.floor(Math.random() * 10);

  const interval = setInterval(() => {
    whereEl.textContent = randomPick(whereList);
    whatEl.textContent = randomPick(whatList);
    count++;

    if (count > max) {
      clearInterval(interval);
      isRunning = false;
    }
  }, 80);
}

startBtn.addEventListener("click", spin);
