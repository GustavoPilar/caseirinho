const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const cake = 'Bolo de Maçã';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = ['teste', 'teste1', 'teste2', 'teste3'];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}
