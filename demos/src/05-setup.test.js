// describe reune un conjunto de bruebas, mejora la lectura del código y la encapsulación.
describe('group 1', () => {
  // Este corre antes de toda la prueba.
  beforeAll(() => {
    console.log('beforeAll');
    // up dataBase
  });
  // Este corre despues de toda la prueba.
  afterAll(() => {
    console.log('afterAll');
    // down database
  });
  // Este corre antes de cada una de las pruebas.
  beforeEach(() => {
    console.log('beforEach');
  });
  // Este corre despues de cada una de las pruebas.
  afterEach(() => {
    console.log('afterEach');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });
  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });
    test('case 3', () => {
      console.log('case3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
