import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();
const space = document.querySelector('.date--js')

function myDate() {
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const days = date.getDate();
const month = date.getMonth();
space.innerHTML=`${days}.${month}.${year}` + " " + `${hour}:${minute}:${seconds}`;
}
setInterval(myDate, 1000);
myDate();




