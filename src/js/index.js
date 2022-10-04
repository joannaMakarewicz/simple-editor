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

const informationFromLocalTable = JSON.parse(
  localStorage.getItem("actualInformation")
);


const tableInformation = [];

if(informationFromLocalTable!=null){
console.log(informationFromLocalTable);
for(let i=0;i<informationFromLocalTable.length; i++){
historyInformation.innerHTML+=`<p>${informationFromLocalTable[i]}</p>`};}
else{
    console.log(`Brak wpisów`);
    historyInformation.innerHTML=`Brak wpisów`;
}


 


save.addEventListener("click", (e) => {
  e.preventDefault();
  const newInformation = localStorage.setItem("information", textarea.value);
  const newInformationToUse = localStorage.getItem("information");
  tableInformation.push(newInformationToUse);
  console.log(tableInformation);

  for (let i = tableInformation.length - 1; i < tableInformation.length; i++) {
    historyInformation.innerHTML += `<p>${tableInformation[i]}</p>`;
  }

  const tableForUse = localStorage.setItem(
    "actualInformation",
    JSON.stringify(tableInformation)
  );
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("information");
});