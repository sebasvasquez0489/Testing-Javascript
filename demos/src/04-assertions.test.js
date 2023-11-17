//* Matches-Assertios

// Manejando test en forma de objeto.
// Para testear objetos se usa .toEqual.
test('test obj', () => {
  const data = { name: 'sebas' };
  // Manipulación del objeto.
  data.lastName = 'vasquez';
  expect(data).toEqual({ name: 'sebas', lastName: 'vasquez' });
// Espero que el objeto de arriba sea igual a este.
});

// Manejando con valor "null"
test('null', () => {
  const data = null;
  // Un nulo está definido como nulo.
  expect(data).toBeNull();
  // Un definido es otro tipo de dato en JS.
  expect(data).toBeDefined();
  // Podemos usar negaciones.
  expect(data).not.toBeUndefined();
});

// Manejando con valor "Booleano"
test('boleans', () => {
// Booleanos directos.
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  // Datos considerados como booleanos.
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

// Manejando valors "string" y "arrays"
test('string', () => {
// Podemos preguntar si coincide una parte arbitraria con la cadena.
  expect('Sebastian').toMatch('Sebas');
});

test('list / arrays', () => {
// Podemos preguntar si contiene una parte arbitraria con el arreglo.
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
