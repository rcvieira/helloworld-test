const contaBancaria = require('./contaBancaria');
const ControladorMovimentacao = require('./transferencia');

test('deve fazer transferencia entre duas contas', () => {
    let contaOrigem = new contaBancaria('Kirk', 100);
    let contaDestino = new contaBancaria('Spock', 100);

    let controladorMovimentacao = new ControladorMovimentacao();
    controladorMovimentacao.transferir(contaOrigem, contaDestino, 20);

    expect(contaOrigem.saldo).toBe(80);
    expect(contaDestino.saldo).toBe(120);
});

test('deve lancar saldo Insuficiente', () => {
    let contaOrigem = new contaBancaria('Kirk', 100);
    let contaDestino = new contaBancaria('Spock', 100);

    let controladorMovimentacao = new ControladorMovimentacao();
    expect( () => {controladorMovimentacao.transferir(contaOrigem, contaDestino, 120)}).toThrow('Saldo Insuficiente');
    expect(contaOrigem.saldo).toBe(100);
    expect(contaDestino.saldo).toBe(100);
});
