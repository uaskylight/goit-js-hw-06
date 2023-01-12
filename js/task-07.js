const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");
input.addEventListener("change", (e) => {
  text.style.fontSize = `${e.target.value}px`;
});
