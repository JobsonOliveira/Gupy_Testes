"use strict";
class Verificador {
    observador(texto) {
        const resposta = {
            'aparicoes': 0,
            'mensagem': 'A letra "A/a" não está presente na string fornecida!'
        };
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === 'a') {
                resposta.aparicoes++;
                resposta.mensagem = 'A letra "A/a" está presente na string fornecida!';
            }
        }
        return resposta;
    }
    constructor(texto) {
        const resultado = this.observador(texto);
        const mensagem = document.querySelector('#vr_resultado_mensagem');
        const quantidade = document.querySelector('#vr_resultado_quantidade');
        mensagem.innerHTML = resultado.mensagem;
        quantidade.innerHTML = `Número de aparições: ${resultado.aparicoes}`;
    }
}
document.querySelector('#vr_botao')?.addEventListener('click', () => {
    const texto = document.querySelector('#vr_texto');
    new Verificador(texto.value.toLowerCase());
});
