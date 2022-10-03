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
const historyInformation = document.querySelector(".history__information--js");

const dateFromLocalTable=JSON.parse(localStorage.getItem('actualDate'));
const informationFromLocalTable=JSON.parse(localStorage.getItem('actualInformation'));

const tableDate = [dateFromLocalTable];
const tableInformation = [informationFromLocalTable];

console.log(tableDate);
console.log(tableInformation);

for (let i=0; i<tableDate.length;i++){
  historyDate.innerHTML =tableDate; 
  historyInformation.innerHTML =tableInformation;
};



save.addEventListener("click", (e) => {
const newInformation = localStorage.setItem("information", textarea.value);
const newData = localStorage.setItem("date", mainDate );
const newDateToUse=localStorage.getItem('date');
const newInformationToUse=localStorage.getItem('information');
tableDate.unshift(newDateToUse);
tableInformation.unshift(newInformationToUse);
console.log(tableDate);
console.log(tableInformation);
const newDateForLocalTable=localStorage.setItem('actualDate', JSON.stringify(tableDate));
const newInformationForLocalTable=localStorage.setItem('actualInformation', JSON.stringify(tableInformation));
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("information");
});
