const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');

title.textContent = 'Bolo de Fubá';
titleCake.textContent = 'Bolo de Fubá';
price.textContent = 'R$ 12,00'

newli = document.createElement('li');
newli.textContent = 'teste';
ingredientsList.append(newli);
