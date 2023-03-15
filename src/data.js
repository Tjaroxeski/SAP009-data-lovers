
function filterByTags(champions, tags) {
  const filteredChampions = champions.filter((champion) => {
    return tags.some(tag => champion.tags.includes(tag));
  });
  return filteredChampions;
}


function orderChampionsByDifficulty(champions, order) {
  const championsArray = Object.values(champions);

  if (order === "easy-hard") {
    championsArray.sort((a, b) => a.info.difficulty - b.info.difficulty);
  } else if (order === "hard-easy") {
    championsArray.sort((a, b) => b.info.difficulty - a.info.difficulty);
  }
  
  return championsArray;
}

export {filterByTags, orderChampionsByDifficulty} ;


