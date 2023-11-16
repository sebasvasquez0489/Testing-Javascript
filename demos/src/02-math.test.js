
// Importar el archivo JS a evaluar
const {sum, multiply, divide, divideZero} = require('./02-math');


//test = Define la pueba a hacer
	//Ejecución de la prueba en el código

	/*expect= Define y compara que el resultado esperado a partir de la pueba realizada
	sea igual al obtenido despues de la ejecución*/

	//expect(/*Resultado de la ejecución*/).toBe(/*Resultado de la prueba*/);

test('adds 10 + 15 should be 25', () => {
  const response = sum(10,15)
  expect(response).toBe(25)
});

test('should be 18', () => {
  const response = multiply(6,3)
  expect(response).toBe(18)
});

test('should divide', () => {
  const response = divide(10,5)
  expect(response).toBe(2)
});


test('should divide zero', () => {
  const response = divideZero(5,0)
  expect(response).toBeNull();
})

