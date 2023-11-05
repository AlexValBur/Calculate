const $display = document.getElementById('display');  // забрали все вводные
$btn = document.querySelectorAll('.btn');             // забрали все кнопки

let calculation = [];
let acсumalate;

function calculate(btn) {
    let value = btn.innerText;

    if(value === 'AC') {
        calculation = [];
        $display.value  = '';
    } 
    
    else if (value === '&larr'){

        calculation.pop();
        $display.value = calculation.join('');
    } 
    
    else if (value === '='){
        $display.value =  eval(accumalate);
   }

    else if (value === '%'){
    
        $display.value = parseFloat(calculation.join(''))/100
        calculation = [];
   }

    else {
         calculation.push(value);
         accumalate = calculation.join('');
         $display.value = accumalate;

    }
}
$btn.forEach(button => button.addEventListener('click',  ()=>calculate(button)))
  

const calculate2 = {
    sum: '+',
    subtraction: '-',
    div: '/',
    mult: '*',
}


function calc(a,b,operation){

    if(calculate2.sum === operation){
        sum(a,b)
    }
    
     else if(calculate2.subtraction === operation){
        subtr(a,b)
    }
    function sum(a,b){
        return a+b
    }

    function subtr(a,b) {
        return a-b
        
    }
       
    
}