const clock = document.querySelector("#clock");

setInterval(() => {

  let date = new Date();
  clock.textContent = date.toLocaleTimeString();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// am pm
// let ampm = hours >= 12 ? 'PM' : 'AM';
// 12 hour format
// hours = hours % 12 || 12;
// clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`

}, 1000);


