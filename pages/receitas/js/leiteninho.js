const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturasList = document.getElementById('cobertura-list');
const cake = 'Bolo de Leite Ninho';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = [
    'Ovos',
    'Açúcar', 
    'Óleo',
    'Leite',
    'Farinha de trigo', 
    'Fermento em pó', 
    'Leite ninho',
    'Essência de baunilha'
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}

const coberturas = [
    'Leite condensado', 
    'Creme de leite',
    'Leite ninho',
    'Margarina'
];

for (let element of coberturas) {
    newLi = document.createElement('li');
    newLi.textContent = element;
    coberturasList.append(newLi);
}
