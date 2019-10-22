const ContaBancaria = require('./contaBancaria');

let conta = null;

beforeEach(() => {
    conta = new ContaBancaria('Kirk', 100);
});

test('Deve criar uma conta bancária com saldo positivo', () => {
    expect(conta.nome).toBe('Kirk');
    expect(conta.saldo).toBe(100);
});

test('Deve fazer saque de 20 na conta bancaria', () => {
    conta.sacar(20);
    expect(conta.saldo).toBe(80);
});

test('Deve fazer saque de 50 na conta bancaria', () => {
    conta.sacar(50);
    expect(conta.saldo).toBe(50);
});

test('Saque de 150 na conta bancaria nao altera o saldo e reporta saldo insuficiente', () => {
    expect(() => {conta.sacar(150)} ).toThrow('Saldo Insuficiente');
    expect(conta.saldo).toBe(100);
});

test('Saque de 0 na conta bancaria nao altera o saldo e reporta valor invalido', () => {
    expect(() => {conta.sacar(0)} ).toThrow('Valor Invalido');
    expect(conta.saldo).toBe(100);
});

test('Saque menor que 0 na conta bancaria nao altera o saldo e reporta valor invalido', () => {
    expect(() => {conta.sacar(-1)} ).toThrow('Valor Invalido');
    expect(conta.saldo).toBe(100);
});