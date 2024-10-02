const form = document.getElementById('form-agenda');
const contatoNome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal()
})

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (contatoNome.includes(inputNome.value)) {
        alert(`O nome : ${inputNome.value} ja foi inserido`);
    } else if (numero.includes(+inputNumero.value)) {
        alert(`esse numero : ${inputNumero.value} ja foi inserido`);
    } else {
        contatoNome.push(inputNome.value)
        numero.push(parseFloat(inputNumero.value))
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }
    
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = somaDeContatos();


    document.getElementById('contador').innerHTML = mediaFinal;
}

function somaDeContatos() {
    let contatos = 0;

    for (let i = 0; i < contatoNome.length; i++) {
        contatos += 1;
    }

    return contatos;
}