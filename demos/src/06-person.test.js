// Aquí implementaremos los hooks y los grupos (describe) con una clase de pruebas.

const Person = require('./06-person');

// Se agrupan las pruebas de rango IMC
describe('Test for person', () => {
  // Se instancia el objeto persona para automatizar.
  let person;
  // Asignamos datos a la nueva persona.
  beforeEach(() => {
    person = new Person('Sebastian', 45, 1.7);
  });
  // Cambiamos los datos de la persona para este rango/caso.
  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
