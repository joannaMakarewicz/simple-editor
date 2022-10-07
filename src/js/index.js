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
const historyInformation = document.querySelector(".history__information--js");



let tableInformation = [];
console.log(tableInformation);

if(informationFromLocalTable){
for (let element of tableInformation){
  historyInformation.innerHTML+=`<li>${element}</li>`}}else{
  historyInformation.innerHTML=`Brak wpisów`;
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  tableInformation.unshift(textarea.value);
  console.log(tableInformation);

  }
)

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("information");
});
