import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

//current date&time function

const space = document.querySelector(".date--js");

function myDate() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const days = date.getDate();
  const month = date.getMonth();
  space.innerHTML =
    `${days}.${month}.${year}` + ", " + `${hour}:${minute}:${seconds}`;
}
setInterval(myDate, 1000);
myDate();

//Archive of text:

const save = document.querySelector(".save--js");
const myData = document.querySelector(".form__content--js");
const myHistory = document.querySelector(".history__container--js");
const myHistoryInfo = document.querySelector(".history__info--js");
const myReset = document.querySelector(".history__reset--js");
const secondContainers = document.querySelector(".history__secondContainer--js"
);

//check if sth is in localStorage and put into textarea if true:
if (localStorage.getItem("myTextarea") !== null) {
  myData.value = localStorage.getItem("myTextarea");
}
myData.addEventListener("input", (e) => {
  localStorage.setItem("myTextarea", myData.value);
});

if (localStorage.getItem("wholeHistory") !== null) {
  myHistory.innerHTML = localStorage.getItem("wholeHistory");
} else {
  myHistoryInfo.innerHTML = "There are no available history";
}

save.addEventListener("click", (e) => {
  myHistoryInfo.innerHTML = "";
  const actualHistory = `<div class="history__secondContainer history__secondContainer--js">
  <img class="history__edit" src="../src/assets/icons/edit.svg" />
  <img class="history__reset history__reset--js" src="../src/assets/icons/reset.svg" />
  <p class="history__date">${space.textContent}</p>
  <p class="history__information">${myData.value}</p>
  </div>`;
  myHistory.innerHTML += actualHistory;
  localStorage.setItem("wholeHistory", myHistory.innerHTML);
  localStorage.removeItem("myTextarea");
});

//Archive-reset:
const resets = document.querySelectorAll(".history__reset--js");

function resetAll() {
  const containerNew = document.querySelector(".history__secondContainer--js");
  this.parentElement.parentElement.removeChild(this.parentElement);
  localStorage.removeItem("wholeHistory");
  if (myHistory.children.length < 1) {
    myHistoryInfo.innerHTML = "There are no available history";
    return;
  }
}

resets.forEach((reset) => {
  reset.addEventListener("click", resetAll);
});

