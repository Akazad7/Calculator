let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-result').innerHTML = '';
displayResult();
function updateCalculation(value) {
  calculation += value;
  displayResult();
}
function displayResult(){
  document.querySelector('.js-result').innerHTML = calculation;
}