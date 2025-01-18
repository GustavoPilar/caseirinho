const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturaTitle = document.getElementById('coberturaTitle');
coberturaTitle.style.display = 'none';
const cake = 'Bolo de Banana com Doce de Leite';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = [
    'Bananas',
    'Ovos',
    'Farinha de Trigo',
    'Açúcar',
    'Óleo',
    'Fermento em pó',
    'Canela em pó',
    'Doce de Leite'
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}
