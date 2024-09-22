"use strict";
class Verificador {
    VerificaFabonaci(numero) {
        let valor = 1;
        let resultAnt = 0;
        let sequencia = [0, 1];
        let resposta = {
            'status': `O número ${numero} não existe na sequência!`,
            'fabonaci': {}
        };
        while (numero >= resultAnt) {
            let proxVal = resultAnt + valor;
            sequencia.push(proxVal);
            resultAnt = valor;
            valor = proxVal;
        }
        ;
        if (sequencia.includes(numero)) {
            resposta.status = `O número ${numero} existe na sequência!`;
        }
        resposta.fabonaci = sequencia;
        return resposta;
    }
    constructor(numero) {
        const resultado = this.VerificaFabonaci(numero);
        const resultadoMensagem = document.querySelector('#fb_resultado_mensagem');
        const resultadoSequencia = document.querySelector('#fb_resultado_sequencia');
        resultadoMensagem.innerHTML = resultado.status;
        resultadoSequencia.innerHTML = `Sequênica de Fibonacci: <br>${resultado.fabonaci}`;
    }
}
const verificar = document.querySelector('#sh_botao');
verificar?.addEventListener('click', () => {
    let input = document.querySelector('#fb_entrada_numero');
    const numero = parseInt(input.value);
    new Verificador(numero);
});
// console.log(resultado);
