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
  const max = characters.length;
  return Math.floor(Math.random() * (max + 1));
};

const generateTwoCharacters = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  console.log(num1);
  console.log(num2);

  while (num1 === num2) {
    num2 = generateRandomNumber();
  }

  //   return [num1, num2];
  twoCharacters = [characters[num1], characters[num2]];
};

let twoCharacters = [characters[0], characters[1]];

const renderTwoCharacters = (twoCharacters) => {
  listEl.textContent = "";
  resultEl.textContent = "";
  twoCharacters.forEach(renderEachChar);
};

const handleClick = (event) => {
  event.preventDefault();

  console.log(event.target);
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
  } else {
    resultEl.textContent = `oh no ! ${message}`;
  }

  // generate two new characters and display them

  generateTwoCharacters();
  console.log("after", twoCharacters);
  setTimeout(() => {
    renderTwoCharacters(twoCharacters);
  }, 4000);
};

const listEl = document.querySelector(".game__list");
const resultEl = document.querySelector(".game__result");
renderTwoCharacters(twoCharacters);

const buttons = document.querySelectorAll(".game__button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
