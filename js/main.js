const textField = document.querySelector(".joke-container__joke-text");
const button = document.querySelector(".icon-box");
const id = document.querySelector(".joke-container__id");

async function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  textField.innerText = data.joke;
}

function setRandomID() {
  let number = Math.floor(Math.random() * 100);

  id.innerText = "Joke ID #" + `${number}`;
}

fetchJoke();
setRandomID();

button.addEventListener("click", () => {
  setRandomID();
  fetchJoke();
});
