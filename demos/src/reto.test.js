const areaCuadrado = require('./reto');

test('should be 16', () => {
  const response = areaCuadrado(2, 2)
  expect(response).toBe(16);
});
