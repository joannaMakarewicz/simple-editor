import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
import moment from "moment";

const mainDate = moment().format("MMMM Do YYYY, h:mm:ss a");
const dateTemporary = document.querySelector(".date--js");
dateTemporary.innerHTML = mainDate;

const textarea = document.querySelector(".textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");
const historyDate = document.querySelector(".history__date--js");
const historyContent = document.querySelector(".history__content--js");


historyDate.innerHTML = localStorage.getItem("date");
historyContent.innerHTML = localStorage.getItem("information");

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("information", textarea.value);
  localStorage.setItem("date", mainDate);
  historyDate.innerHTML = localStorage.getItem("date");
  historyContent.innerHTML = localStorage.getItem("information");

});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("information");
});
