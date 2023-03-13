
function filterByTags(champions, tags) {
  const filteredChampions = champions.filter((champion) => {
    return tags.some(tag => champion.tags.includes(tag));
  });
  return filteredChampions;
}

function sortByDifficulty(data) {
  const result = Object.values(data).sort((a, b) => a.info.difficulty - b.info.difficulty);
 return result;
  // console.log(result);
}
// function orderByDifficulty(champions) {
//   // Cria um array a partir dos valores do objeto
//   const championArray = Object.values(champions);
  
//   // Ordena o array com base no nível de dificuldade
//   championArray.sort((a, b) => a.info.difficulty - b.info.difficulty);
  
//   return championArray;
// }
// console.log("ola");
// interactionCards.innerHTML = championsHTML;

// inputChampions.addEventListener("keyup", showCards);

// function filterByTags(checkbox) {
//   return checkbox.filter(function( ){
//     return numero %2 ===0;
//   });
// }
export {filterByTags, sortByDifficulty} ;


