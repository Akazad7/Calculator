let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-result').innerHTML = '';
displayResult();
//function to calculate
function updateCalculation(value) {
  calculation += value;
  displayResult();
}
//function to show the result
function displayResult(){
  document.querySelector('.js-result').innerHTML = calculation;
}