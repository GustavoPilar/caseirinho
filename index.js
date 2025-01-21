function redirect(dataPage) {
    window.location.href = `pages/receitas/receita.html?page=${dataPage}`;
}

function showOptions() {
    const navbar = document.getElementById('navOption');
    navbar.classList.toggle('d-none');
    navbar.classList.toggle('d-block');
}
