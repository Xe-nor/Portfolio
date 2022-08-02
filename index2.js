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


const scriptURL =
  "https://script.google.com/macros/s/AKfycbzwK-kRsdCg21ndt7xIDaKY7DLcnw0OahGlkhxbfk2qtfPZY0hhwA3ScjaswAu_PnV2/exec";
const forrm = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg")

forrm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(forrm) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function () {
        msg.innerHTML=""
      }, 5000)
      forrm.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});


 var form = document.getElementById("my-form");

 async function handleSubmit(event) {
   event.preventDefault();
   var status = document.getElementById("my-form-status");
   var data = new FormData(event.target);
   fetch(event.target.action, {
     method: form.method,
     body: data,
     headers: {
       Accept: "application/json",
     },
   })
     .then((response) => {
       if (response.ok) {
         status.innerHTML = "";
         form.reset();
       } else {
         response.json().then((data) => {
           if (Object.hasOwn(data, "errors")) {
             status.innerHTML = data["errors"]
               .map((error) => error["message"])
               .join(", ");
           } else {
             status.innerHTML =
               "Oops! There was a problem submitting your form";
           }
         });
       }
     })
     .catch((error) => {
       status.innerHTML = "Oops! There was a problem submitting your form";
     });
 }
 form.addEventListener("submit", handleSubmit);