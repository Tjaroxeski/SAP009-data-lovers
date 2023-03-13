import data from "./data/lol/lol.js";
import {filterByTags, sortByDifficulty } from "./data.js";

const allChampions = data.data;
const inputChampions = document.getElementById("search");
const interactionCards = document.querySelector(".champions-cards");
const championsArray = Object.values(allChampions);

const inputRange = document.getElementById("myRange");
const difficultyText = document.getElementById("difficulty");

inputRange.addEventListener("input", function() {
  let value = parseInt(this.value);
  let difficultyLevel;

  if (value >= 1 && value <= 4) {
    difficultyLevel = "Fácil";
  } else if (value >= 5 && value <= 8) {
    difficultyLevel = "Médio";
  } else if (value >= 9 && value <= 10) {
    difficultyLevel = "Difícil";
  }
  difficultyText.innerText = `Escolha pelo nível de dificuldade ${ difficultyLevel}`
  console.log(`Valor do input range: ${value}. Dificuldade: ${difficultyLevel}`);
 
  const filteredByDiff= sortByDifficulty(championsArray);
  showCards(filteredByDiff);
});




const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedOptions = [];
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      selectedOptions.push(event.target.name);
    } else {
      const index = selectedOptions.indexOf(event.target.name);
      if (index > -1) {
        selectedOptions.splice(index, 1);
      }
    }
    const filtered = filterByTags(championsArray, selectedOptions)
    showCards(filtered);
  });
});

const translate = (tags) =>{
  switch (tags) {
  case "Assassin":
    return "Assassino";
  case "Marksman":
    return "Atirador";
  case "Mage":
    return "Mago";
  case "Support":
    return "Suporte";
  case "Tank":
    return "Tanque";
  }
}

function filterNames() {
  const filter = inputChampions.value.toUpperCase();
  const filteredList = championsArray.filter((champion) => {
    return champion.id.toUpperCase().includes(filter);
  });
  return filteredList;
}

function showCards(champions) {
  
  const championsHTML = champions
    .map((champion, index) => `
      <div class="card">
        <img id="${index}" class="posters" src="${champion.splash}" alt="champion image">
        <p class="champion-name">${champion.id}</p>
        <p id="champion-text" class="champion-title">${champion.title}</p>
        <p class="champion-power">Nível de Ataque: ${champion.info.attack}</p>
        <p class="champion-power">Nível de Defesa: ${champion.info.defense}</p>
        <p class="champion-power">Nível de Magia: ${champion.info.magic}</p>
        <p class="champion-power">Nível de Dificuldade: ${champion.info.difficulty}</p>
        <p>Função: ${champion.tags.map(translate).join("  ")}</p>  
      </div>
    `)
    .join("");
    
  
  interactionCards.innerHTML = championsHTML;
}
inputChampions.addEventListener("keyup", function(){
  const filteredChampions = filterNames();
  showCards(filteredChampions)
});









