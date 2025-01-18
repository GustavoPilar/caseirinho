const title = document.getElementById('title');
const titleCake = document.getElementById('title-cake');
const price = document.getElementById('price');
const ingredientsList = document.getElementById('ingredients');
const coberturaTitle = document.getElementById('coberturaTitle');
coberturaTitle.style.display = 'none';
const cake = 'Bolo de Fubá com Goiabada';

title.textContent = cake;
titleCake.textContent = cake;
price.textContent = 'R$ 18,90'

const ingredients = [
    'Fubá' ,
    'Ovos',
    'Farinha de Trigo',
    'Açúcar',
    'Óleo',
    'Leite',
    'Fermento em pó',
    'Goiabada',
];

for (let element of ingredients) {
    newli = document.createElement('li');
    newli.textContent = element;
    ingredientsList.append(newli);
}
