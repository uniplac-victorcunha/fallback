// Exemplo 1
document.getElementById('botaoMudarCor').addEventListener('click', function() {
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
});

// Exemplo 2
document.getElementById('botaoExibirTexto').addEventListener('click', function() {
    const texto = document.getElementById('entradaTexto').value;
    document.getElementById('saidaTexto').textContent = texto || 'Nenhum texto digitado.';
});

// Exemplo 3
let contador = 0;
document.getElementById('botaoAumentar').addEventListener('click', function() {
    contador++;
    document.getElementById('valorContador').textContent = contador;
});
document.getElementById('botaoDiminuir').addEventListener('click', function() {
    contador--;
    document.getElementById('valorContador').textContent = contador;
});

// Exemplo 4
document.getElementById('entradaCor').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const cor = this.value;
        document.body.style.backgroundColor = cor;
        this.value = '';
    }
});

// Exemplo 5
document.getElementById('formularioUsuario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('entradaNome').value;
    const email = document.getElementById('entradaEmail').value;
    const mensagem = document.getElementById('entradaMensagem').value;
    document.getElementById('saidaFormulario').innerHTML = `
        <strong>Nome:</strong> ${nome}<br>
        <strong>E-mail:</strong> ${email}<br>
        <strong>Mensagem:</strong> ${mensagem}
    `;
    this.reset();
});