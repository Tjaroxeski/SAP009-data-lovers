import {filterByTags} from '../src/data.js';
const ashe={ 
  name: "Ashe",  
  tags: ["Marksman", "Support"],
}
const caitlyn = {
  name: "Caitlyn",
  tags: ["Marksman"],

}

const corki= {
  name: "Corki",
  tags: ["Marksman"],
}
const champions=[ashe, caitlyn, corki]
it ("deve filtrar campeões por tags",()=>{
  const resultado = filterByTags(champions,["Support"])
  expect(resultado).toEqual([ashe])
});
