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
    console.log('nenhum');
}
