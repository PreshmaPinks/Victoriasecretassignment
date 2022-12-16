let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9];

function CardShuffle() {
  const shuffledArr = ShuffleArray(arr);
  GenerateLayout(shuffledArr);
}

function ShuffleArray(arr) {
  let shuffled = arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}

function CardSort() {
  GenerateLayout(arr.sort());
}

function GenerateLayout(layoutArr) {
  document.getElementById("cardParent").innerHTML = "";
  layoutArr.forEach((item) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(item));
    div.classList.add("numberCardContainer", `index${item}`);
    document.getElementById("cardParent").appendChild(div);
  });
}

GenerateLayout(arr);
