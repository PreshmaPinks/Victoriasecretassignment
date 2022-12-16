let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9];

function CardShuffle() {
  const shuffledArr = arr.sort((a, b) => 0.5 - Math.random());
  GenerateLayout(shuffledArr);
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
