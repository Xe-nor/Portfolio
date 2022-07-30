const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programmer.";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web developer.";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Web designer.";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Gamer.";
  }, 9000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 12000);



var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openexperience() {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  btn2.style.color = "#ababab";
  btn1.style.color = "red";
  btn3.style.color = "#ababab";
}
function openeducation() {

  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  btn1.style.color = "#ababab";
  btn3.style.color = "#ababab";
  btn2.style.color = "red";
}
function opencertificates() {

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  btn2.style.color = "#ababab";
  btn1.style.color = "#ababab";
  btn3.style.color = "red";
}




var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}
