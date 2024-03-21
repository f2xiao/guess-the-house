import HpApi from "./HpApi.js";

const hpApi = new HpApi();
const characters = await hpApi.getCharacters();
console.log(characters);

/*<ul class="game__list">
    <li class="game__item"></li>
    <li class="game__item"></li>
</ul> */

const createElwClass = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

const createNewCharEl = () => {
  const liEl = createElwClass("li", "game__item");
  const pEl = createElwClass("p", "game__name");
  const imgEl = createElwClass("img", "game__img");

  liEl.appendChild(pEl);
  liEl.appendChild(imgEl);

  return { liEl, pEl, imgEl };
};

const renderEachChar = ({ name, image }) => {
  const { liEl, pEl, imgEl } = createNewCharEl();
  pEl.textContent = name;
  imgEl.src = image;
  listEl.appendChild(liEl);
};

const generateRandomNumber = () => {
  const max = characters.length - 1;
  return Math.floor(Math.random() * (max + 1));
};

const generateTwoCharacters = () => {
  const num1 = generateRandomNumber();
  let num2 = generateRandomNumber();
  console.log(num1);
  console.log(num2);

  while (num1 === num2) {
    num2 = generateRandomNumber();
  }

  twoCharacters = [characters[num1], characters[num2]];
};

let twoCharacters = [];
generateTwoCharacters();

const renderTwoCharacters = (twoCharacters) => {
  listEl.textContent = "";
  resultEl.textContent = "";
  twoCharacters.forEach(renderEachChar);
};

const handleClick = (event) => {
  event.preventDefault();
  round++;

  // console.log(event.target);
  console.log("before", twoCharacters);
  const sameHouse = twoCharacters[0].house === twoCharacters[1].house;
  const userChoice = event.target.dataset.choice === "true";

  console.log(userChoice);
  const message = sameHouse
    ? `They are in the same house: ${twoCharacters[0].house}.`
    : `${twoCharacters[0].name} belongs to ${twoCharacters[0].house} and ${twoCharacters[1].name} belongs to ${twoCharacters[1].house}`;

  //   check if the two characters have the same house name
  if (userChoice === sameHouse) {
    resultEl.textContent = `Congratulation! You are correct! ${message} `;
    score++;
  } else {
    resultEl.textContent = `oh no ! ${message}`;
  }

  scoreEl.textContent = `Your Score is: ${score}/${maxRound}`;

  // check how many rounds and score
  if (round == maxRound) {
    // buttons.forEach((button) => {
    //   button.removeEventListener("click", handleClick);
    // });
    alert(`game ends, you final score is ${score} / ${maxRound}`);
    setTimeout(function () {
      // Refresh the window
      window.location.reload();
    }, 0);
    return;
  }

  // generate two new characters and display them

  generateTwoCharacters();
  console.log("after", twoCharacters);
  setTimeout(() => {
    renderTwoCharacters(twoCharacters);
  }, 3000);
};

let round = 0;
let score = 0;
const maxRound = 5;
const listEl = document.querySelector(".game__list");
const resultEl = document.querySelector(".game__result");
const modalEl = document.querySelector(".game__modal");
const scoreEl = document.querySelector(".game__score");
renderTwoCharacters(twoCharacters);
scoreEl.textContent = `Your Score is: ${score}/${maxRound}`;

const buttons = document.querySelectorAll(".game__button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
