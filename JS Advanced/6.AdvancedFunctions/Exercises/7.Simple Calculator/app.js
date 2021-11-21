function calculator() {

        let number1;
        let number2;
        let resultBox;
        

    function init(num1, num2, resultInput) {
        number1 = document.querySelector(num1);
        number2 = document.querySelector(num2);
        resultBox = document.querySelector(resultInput);
    };
    function add() {
        resultBox.value = Number(number1.value) + Number(number2.value);

    };
   function subtract() {
        resultBox.value = Number(number1.value) - Number(number2.value);
    };
    return {
        init,
        add,
        subtract,
    }

}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




