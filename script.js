let myTurn = document.querySelectorAll(".hasan div");
let myTurnNumber = 0;
let botTurn = Math.floor(Math.random() * 3 + 1);
let myElement = document.querySelector(".rock").cloneNode(true);
let myText = "";
let you = 0;
let bot = 0;

if (botTurn == 1) {
  myElement = document.querySelector(".rock").cloneNode(true);
} else if (botTurn == 2) {
  myElement = document.querySelector(".paper").cloneNode(true);
} else {
  myElement = document.querySelector(".scissors").cloneNode(true);
}

if (localStorage.getItem("player") != null) {
  you = localStorage.getItem("player");
  bot = localStorage.getItem("bot");
}

document.querySelector(".you").innerHTML = you;
document.querySelector(".bot").innerHTML = bot;
document.querySelector(".resetScore").addEventListener("click", () => {
  document.querySelector(".you").innerHTML = 0;
  document.querySelector(".bot").innerHTML = 0;
  you = 0;
  bot = 0;
  localStorage.clear();
});
myTurn.forEach(function (ele) {
  ele.addEventListener("click", function () {
    myTurn.forEach(function (el) {
      el.style.display = "none";
    });
    this.style.display = "block";

    if (this.classList.contains("rock")) myTurnNumber = 1;
    else if (this.classList.contains("paper")) myTurnNumber = 2;
    else myTurnNumber = 3;
    document.querySelector(".hasan").appendChild(myElement);

    if (myTurnNumber == botTurn) myText = "Draw";
    else if (myTurnNumber == 1) {
      if (botTurn == 3) myText = "You Win";
      else myText = "You Lose";
    } else if (myTurnNumber == 2) {
      if (botTurn == 1) myText = "You Win";
      else myText = "You Lose";
    } else {
      if (botTurn == 2) myText = "You Win";
      else myText = "You Lose";
    }

    console.log(myText);
    if (myText == "You Win") {
      you++;
    } else if (myText == "You Lose") {
      bot++;
    } else {
      you++;
      bot++;
    }

    localStorage.clear();
    localStorage.setItem("player", you);
    localStorage.setItem("bot", bot);
    document.querySelector(
      ".statue"
    ).innerHTML = `${myText} <br> <div class="btn text-warning m-3">Play again ?</div>`;

    document.querySelector(".btn").addEventListener("click", function () {
      location.reload();
    });
  });
});
