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

//use button save for archive text from textarea:

save.addEventListener("click", (e) => {
  myHistoryInfo.innerHTML = "";
  const actualHistory = `<div class="history__secondContainer history__secondContainer--js">
  <img class="history__edit history__edit--js" src="simple-editor/edit.svg" />
  <img class="history__reset history__reset--js" src="simple-editor/reset.svg" />
  <p class="history__date">${space.textContent}</p>
  <p class="history__information history__information--js">${myData.value}</p>
  </div>`;
  myHistory.innerHTML += actualHistory;
  localStorage.setItem("wholeHistory", myHistory.innerHTML);
  localStorage.removeItem("myTextarea");
});

//reset single text from archive:
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

//edit single text from archive:

const edits = document.querySelectorAll(".history__edit--js");
const textToEdit = document.querySelector(".history__information--js");

function editAll() {
  const lastChild = this.parentElement.lastElementChild;
 myData.innerHTML=lastChild.textContent;
  this.parentElement.parentElement.removeChild(this.parentElement);
  localStorage.setItem("wholeHistory", myHistory.innerHTML);
  if (myHistory.children.length < 1) {
    myHistoryInfo.innerHTML = "There are no available history";
    return;
  }
}

edits.forEach((edit) => {
  edit.addEventListener("click", editAll);
});

//reset from textarea without saving
const reset = document.querySelector('.reset--js');


reset.addEventListener('click', (e) => {
 localStorage.removeItem("myTextarea");
 this.parentElement.parentElement.removeChild(this.parentElement);
  localStorage.removeItem("wholeHistory");
})