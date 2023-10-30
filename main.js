let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");

setInterval(() => {
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();



  sec.style.transform = `rotate(${seconds * 6}deg)  ` 
  min.style.transform = `rotate(${(minutes * 6) + (seconds/10)}deg)  ` 
  hour.style.transform = `rotate(${(hours * 30)+(minutes/2)}deg)  ` 
},1000);
