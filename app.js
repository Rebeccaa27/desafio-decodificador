function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}

function textoCriptografar() {
    let textoOriginal = document.querySelector('#input').innerText;
    let textoCriptografado = '';
    let i = 0;

    while (i < textoOriginal.length) {
        let letra = textoOriginal[i];
        let letraCriptografada = letra;

        if (letra === 'a') {
            letraCriptografada = 'ai';
        } else if (letra === 'e') {
            letraCriptografada = 'enter';
        } else if (letra === 'i') {
            letraCriptografada = 'imes';
        } else if (letra === 'o') {
            letraCriptografada = 'ober';
        } else if (letra === 'u') {
            letraCriptografada = 'ufat';
        }

        textoCriptografado += letraCriptografada;
        i++;
    }

    exibirTextoNatela('#mensagem1', textoCriptografado);
    document.querySelector('#input').innerText = textoCriptografado;
    mostrarBotaoCopiar();
    ocultarImagemETexto();
}

function textoDescriptografar() {
    let textoCriptografado = document.querySelector('#input').innerText;
    let textoDescriptografado = textoCriptografado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    exibirTextoNatela('#mensagem1', textoDescriptografado);
    document.querySelector('#input').innerText = textoDescriptografado;
}

function mostrarBotaoCopiar() {
    document.getElementById('copiar').style.display = 'block';
}

function ocultarImagemETexto() {
    document.getElementById('imagemParaOcultar').style.display = 'none';
    document.getElementById('mensagem2').style.display = 'none';
}

function botaoCopiar() {
    let texto = document.getElementById('mensagem1').innerText;
    navigator.clipboard.writeText(texto);
}

document.getElementById('input').addEventListener('focus', function () {
    if (this.innerText === 'Digite seu texto aqui') {
        this.innerText = '';
    }
});
