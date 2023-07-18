const formulario = document.getElementById('formulario');
const inputNome = document.getElementById('input-nome');
const inputTelefone = document.getElementById('input-telefone');
const btnSubmit = document.getElementById('btn-submit');
const arrayNomes = [];
const arrayTelefones = [];
let linhas ='';


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    if(arrayNomes.includes(inputNome.value)) {

        alert(`O nome ${inputNome.value} ja existe!`);

    } else {

        const numeroAtualInput = inputTelefone.value;
        const metadeNumero = numeroAtualInput.slice(0,5);
        const outraMetadeNumero = numeroAtualInput.slice(5,12);

        arrayNomes.push(inputNome.value);
        arrayTelefones.push(parseInt(numeroAtualInput));
        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${metadeNumero} -${outraMetadeNumero}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}