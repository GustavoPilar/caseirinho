const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturaTitle = document.getElementById('coberturaTitle');
coberturaTitle.style.display = 'none';
const cake = 'Bolo de Maçã com Nozes (FIT)';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'PERGUNTAR VALOR'

const ingredients = [
    'Ovos',
    'Óleo', 
    'Açúcar Mascavo', 
    'Maçãs',
    'Farinha de Trigo', 
    'Canela em pó',  
    'Nozes',
    'Fermento em pó'
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}
