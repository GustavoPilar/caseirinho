const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturasList = document.getElementById('cobertura-list');
const cake = 'Bolo Piscininha de Leite Ninho';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = [
    'Ovo',
    'Açúcar',
    'Água',
    'Óleo', 
    'Leite Ninho', 
    'Farinha de Trigo', 
    'Fermento em Pó', 
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}

const coberturas = [
    'Leite Condensado',
    'Leite Ninho',
    'Margarina',
    'Creme de Leite'
];

for (let element of coberturas) {
    newLi = document.createElement('li');
    newLi.textContent = element;
    coberturasList.append(newLi);
}
