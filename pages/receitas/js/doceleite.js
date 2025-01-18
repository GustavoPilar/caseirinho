const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturasList = document.getElementById('cobertura-list');
const cake = 'Bolo de Doce de Leite';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = [
    'Ovos',
    'Doce de Leite', 
    'Manteiga',  
    'Farinha de Trigo',
    'Leite',
    'Fermento em pó'
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}

const coberturas = [
    'Creme de Leite',
    'Doce de Leite'
];

for (let element of coberturas) {
    newLi = document.createElement('li');
    newLi.textContent = element;
    coberturasList.append(newLi);
}
