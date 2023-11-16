function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function divideZero(a, b) {
  if(b === 0){
    return null;
  }
  return a / b;
}


module.exports = {
  sum,
  multiply,
  divide,
  divideZero
};
