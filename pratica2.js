import { countries } from "./countries.js";

const findCountry = (inputCountry) => {
  const pais = countries.find((pais) => {
    return pais.name.toLowerCase() === inputCountry.toLowerCase();
  });

  return pais;
};

console.log(findCountry(process.argv[2]));


// A função recebe um nome de país como entrada (inputCountry) e retorna o objeto correspondente a esse país a partir de um array chamado countries. 

// const findCountry: Declaração de uma constante chamada findCountry. Esta constante é uma função.

// (inputCountry) => { ... }: Esta é a sintaxe de uma função de flecha em JavaScript. A função recebe um parâmetro chamado inputCountry, que é o nome do país que será procurado.

// const pais = countries.find((pais) => { ... });: Declaração de uma constante chamada pais usando o método find do array countries. O método find é usado para encontrar o primeiro elemento no array que satisfaça a condição especificada.

// (pais) => { return pais.name.toLowerCase() === inputCountry.toLowerCase(); }: Uma função de flecha passada como argumento para o método find. Essa função verifica se o nome do país (pais.name) convertido para minúsculas é igual ao nome do país de entrada (inputCountry) também convertido para minúsculas. Isso é feito para garantir uma comparação sem diferenciar maiúsculas de minúsculas.

// return pais;: A função findCountry retorna o país encontrado. Se nenhum país correspondente for encontrado, a função retornará undefined.

// Em resumo, esta função procura um país no array countries com base no nome fornecido como entrada e retorna o objeto representando esse país, ou undefined se o país não for encontrado.