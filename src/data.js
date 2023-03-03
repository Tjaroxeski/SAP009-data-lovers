
function filterByTags(tags) {
  const filteredChampions = championsArray.filter((champion) => {
    return tags.some(tag => champion.tags.includes(tag));
  });
  return filteredChampions;
}



export {filterByTags} ;


