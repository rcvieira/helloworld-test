const soma = require('./helloworld');

test('Soma 1 + 2 deve ser 3', () => {
    expect(soma(1,2)).toBe(3);
});

test('Soma 0 + 2 deve ser 2', () => {
    expect(soma(0,2)).toBe(2);
});