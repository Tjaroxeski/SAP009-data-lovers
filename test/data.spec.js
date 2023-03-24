import {filterByTags, orderChampionsByDifficulty, calculateDifficultyPercentage} from '../src/data.js';
const ashe = { 
  name: "Ashe",  
  info: {
    difficulty: 4,
  },
  tags: ["Marksman", "Support"],
};
const caitlyn = {
  name: "Caitlyn",
  info: {
    difficulty: 6,
  },
  tags: ["Marksman"],
};
const corki = {
  name: "Corki",
  info: {
    difficulty: 6,
  },
  tags: ["Marksman"],
};
const zed = {
  name: "Zed",
  info: {
    difficulty: 7,
  },
  tags:["Assassin", "Fighter"],
};
const blitzcrank ={
  name: "Blitzcrank",
  info: {
    difficulty: 4,
  },
  tags:["Tank", "Fighter"],
};
const ekko ={
  name:"Ekko",
  info: {
    difficulty: 8,
  },
  tags:["Assassin", "Fighter"],
};

const champions = [ashe, caitlyn, corki, blitzcrank, zed, ekko]
it("deve filtrar campeões por tags", () => {
  const result = filterByTags (champions, ["Support"]);
  expect(result).toEqual([ashe]);
});
describe("filterByTags", () =>{
  it("deve ser uma função", ()=> {
    expect (typeof filterByTags).toEqual("function")
  })
});
describe("orderChampionsByDifficulty", () => {
  it("deve ser uma função", () => {
    expect(typeof orderChampionsByDifficulty).toEqual("function");
  });

  it("deve buscar por dificuldade baixa", () => {
    const result = orderChampionsByDifficulty (champions, "easy-hard");
    expect(result).toEqual([ashe, blitzcrank]);
  });

  it("deve buscar por dificuldade alta", () => {
    const result = orderChampionsByDifficulty (champions, "hard-easy");
    expect(result).toEqual([caitlyn, corki, zed, ekko]);
  });
});

describe("calculateDifficultyPercentage", () => {
  it("deve ser uma função", () => {
    expect(typeof calculateDifficultyPercentage).toEqual("function");
  });
});

it("deve calcular a porcentagem pelo nível de dificuldade", () => {
  const champions = [ ashe, caitlyn, corki, blitzcrank, zed, ekko];
  const percentageEasyHard = calculateDifficultyPercentage (champions, "easy-hard");
  expect(percentageEasyHard).toEqual("33.33");

  const percentageHardEasy = calculateDifficultyPercentage(champions, "hard-easy");
  expect(percentageHardEasy).toEqual("66.67")
});
