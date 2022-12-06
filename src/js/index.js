import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

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

//check if sth is in localStorage and put into textarea if true:
if (localStorage.getItem("myTextarea") !== null) {
  myData.value = localStorage.getItem("myTextarea");
}
myData.addEventListener("input", (e) => {
  localStorage.setItem("myTextarea", myData.value);
});

if(localStorage.getItem("wholeHistory") !== null) {
myHistory.style.display='grid';
myHistory.innerHTML = localStorage.getItem("wholeHistory");
}else{
  myHistory.style.display='block';
  myHistory.innerHTML='There are no avaible history'
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  
  const actualHistory = 
  `<img class="history__edit" src="../src/assets/icons/edit.svg" />
  <img class="history__reset" src="../src/assets/icons/reset.svg" />
  <ul class="history__list history__list--js">
  <li class="history__information"><p class="history__information--date">${space.textContent}</p>${myData.value}</li></ul>`;
  myHistory.innerHTML += actualHistory;
  localStorage.setItem("wholeHistory", myHistory.innerHTML);
});
