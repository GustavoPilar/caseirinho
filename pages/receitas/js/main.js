const params = new URLSearchParams(window.location.search);
const page = params.get('page');

console.log(page);

function loadScript(scriptname) {
    const script = document.createElement('script');
    script.src = `js/${scriptname}.js`;
    script.onload = () => console.log('carregou');
    script.onerror = () => console.log('não carregou');
    document.body.appendChild(script);
}

if (page != null) {
    loadScript(page);
}
else {
    const title = document.getElementById('title');
    const titleCake = document.getElementById('title-cake');
    const price = document.getElementById('price');
    const ingredientsList = document.getElementById('ingredients');

    title.textContent = 'Em construção';
    titleCake.textContent = 'Em construção';
    price.textContent = 'R$ 0,00'

    newli = document.createElement('li');
    newli.textContent = 'vazio';
    ingredientsList.append(newli);
}
