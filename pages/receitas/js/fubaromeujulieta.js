const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturasList = document.getElementById('cobertura-list');
const cake = 'Bolo Vulcão Fubá Romeu e Julieta';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'PERGUNTAR VALOR'

const ingredients = [
    'Vazio'
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}

const coberturas = [
    'Vazio'
];

for (let element of coberturas) {
    newLi = document.createElement('li');
    newLi.textContent = element;
    coberturasList.append(newLi);
}
