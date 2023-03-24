
function filterByTags(champions, tags) {
  const filteredChampions = champions.filter((champion) => {
    return tags.some(tag => champion.tags.includes(tag));
  });
  return filteredChampions;
}

function orderChampionsByDifficulty(champions, order) {
  console.log(order);
  if (order === "easy-hard") {
    
    champions.sort((a, b) => a.info.difficulty - b.info.difficulty);
  } else if (order === "hard-easy") {
    champions.sort((a, b) => b.info.difficulty - a.info.difficulty);
  }
  console.log(champions);
  return champions;
}

function calculateDifficultyPercentage(champions, difficulty) {
  const filteredChampions = champions.filter((champion) => {
    if( difficulty === "easy-hard") {
      return champion.info.difficulty <=5 
    }else {
      return champion.info.difficulty >5 }
  });
  const percentage = (filteredChampions.length / champions.length) * 100;
  return percentage.toFixed(2);
}

export { filterByTags, orderChampionsByDifficulty, calculateDifficultyPercentage };

