const button_on = document.getElementById("bulb-on");
const button_off = document.getElementById("bulb-off");
const lightbulb = document.getElementById("lightbulb");

button_on.addEventListener("click", () => {
  lightbulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"
});

button_off.addEventListener("click", () => {
  lightbulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"
});