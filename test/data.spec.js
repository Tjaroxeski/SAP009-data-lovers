import {filterByTags,orderChampionsByDifficulty} from '../src/data.js';
const ashe={ 
  name: "Ashe",  
  tags: ["Marksman", "Support"],
  info: {
    attack: 7,
    difficulty: 4
  }

}
const caitlyn = {
  name: "Caitlyn",
  tags: ["Marksman"],
  info: {
    attack: 8,
    difficulty: 6
  }
}

const corki= {
  name: "Corki",
  tags: ["Marksman"],
  info: {
    attack: 8,
    difficulty: 6
  }
}
const zed ={
  name: "Zed",
  tags:["Assassin", "Fighter"],
  info: {
    attack: 9,
    difficulty: 7
  }
}

const Blitzcrank ={
  name: "Blitzcrank",
  tags:["Tank", "Fighter"],
  info: {
    attack: 4,
    difficulty: 4
  }
} 
const Ekko ={
  name:"Ekko",
  tags:["Assassin", "Fighter"],
  info: {
    attack: 5,
    difficulty: 8
  }
}





const champions=[ashe, caitlyn, corki,Blitzcrank,zed,Ekko]
it ("deve filtrar campeões por tags",()=>{
  const resultado = filterByTags(champions,["Support"])
  expect(resultado).toEqual([ Ekko,ashe])
});

  
describe('orderChampionsByDifficulty', () => {
  it('deve ser uma função', () => {
    expect(typeof 'orderChampionsByDifficulty').toBe("function");
  });

  it('deve buscar por dificuldade baixa', () => {

    const resultado = orderChampionsByDifficulty (champions,"easy-hard" );
    expect(resultado).toEqual([Blitzcrank,ashe]);
  })

  

  it('deve buscar por dificuldade alta', () => {
   
    const resultado = orderChampionsByDifficulty (champions, "hard-easy");
    expect(resultado).toEqual([Ekko,zed]);
  })
});

//testando o cálculo de porcentagem
describe('allChampions'() => {
  it('deve ser uma função', () => {
    expect(typeof ).toBe("function");
  });
  it('retorna a porcentagem da pesquisa do usuário', () => {
    expect(allChampions()).toBe("orderChampionsByDifficulty");
  })
});