let counterNumber = 0;

const displayCounter = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
buttonMinus.addEventListener("click", () => {
  counterNumber -= 1; 
  displayCounter.textContent = counterNumber;
});
buttonPlus.addEventListener("click", () => {
  counterNumber += 1;
  displayCounter.textContent = counterNumber;
});
