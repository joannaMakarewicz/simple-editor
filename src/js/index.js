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
const history = document.querySelector(".history__area--js");

const dateFromLocalTable=JSON.parse(localStorage.getItem('actualDate'));
const informationFromLocalTable=JSON.parse(localStorage.getItem('actualInformation'));

const tableDate = [dateFromLocalTable];
const tableInformation = [informationFromLocalTable];

console.log(tableDate);
console.log(tableInformation);

if (dateFromLocalTable && informationFromLocalTable) {
  history.innerHTML += `<li>${tableDate} ${tableInformation}</li>`;
} else {
  history.innerHTML = "";
}

save.addEventListener("click", (e) => {
const newInformation = localStorage.setItem("information", textarea.value);
const newData = localStorage.setItem("date", mainDate );
const newDateToUse=localStorage.getItem('date');
const newInformationToUse=localStorage.getItem('information');
tableDate.push(newDateToUse);
tableInformation.push(newInformationToUse);
console.log(tableDate);
console.log(tableInformation);
const newDateForLocalTable=localStorage.setItem('actualDate', JSON.stringify(tableDate));
const newInformationForLocalTable=localStorage.setItem('actualInformation', JSON.stringify(tableInformation));
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("information");
});
