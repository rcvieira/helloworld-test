class ControladorMovimentacao {

    transferir(contaOrigem, contaDestino, valor) {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
    }
};

module.exports = ControladorMovimentacao;