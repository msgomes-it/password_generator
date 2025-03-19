
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    document.getElementById('update-info').innerText = 'Atualizado em: ' + formattedDate;
}


window.onload = updateDateTime;
