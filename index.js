const numberInputs = document.getElementsByClassName('number-input');
const resultElement = document.getElementsByClassName('result')[0];
// const selectElement = document.getElementsByTagName('select')[0];
 const operation = document.getElementsByClassName('text-input')[0]


function clickHandler(){
  
  const num1 = Number(numberInputs[0].value);
  const num2 = Number(numberInputs[1].value);

var result = null
switch(operation.value){
    case '+':
    result = num1 + num2; 
    break;

    case '-':
    result = num1 - num2; 
    break;

    case '/':
    result = num1 / num2; 
    break;

    case '**':
    result = num1 ** num2; 
    break;

    case '%':
    result = num1 % num2; 
    break;
}
resultElement.value=result;

}