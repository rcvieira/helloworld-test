class ContaBancaria {

    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor > this.saldo)
            throw 'Saldo Insuficiente';

        if (valor <= 0) 
            throw 'Valor Invalido';

        this.saldo -= valor;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

module.exports = ContaBancaria;