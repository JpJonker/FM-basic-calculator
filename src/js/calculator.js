var userInput = document.querySelector('.calculator-display');

var firstInput = '';
var operator = '';
var secondInput = '';

var result = '';

function buttonClicked (value) {
    switch(value) {

        case 'del':
            userInput.innerHTML = '0';
            return; 

        case 'plus':
            operator = '+';

            if ( firstInput === '') {
                firstInput = userInput.innerHTML
                userInput.innerHTML = '0';
                return
            }

            firstInput = userInput.innerHTML;
            userInput.innerHTML = '0';

            return;

        case 'minus': 
            operator = '-';

            if ( firstInput === '') {
                firstInput = userInput.innerHTML
                userInput.innerHTML = '0';
                return
            }

            firstInput = userInput.innerHTML;
            userInput.innerHTML = '0';
            return;

        case 'divide': 
            operator = '/';

            if ( firstInput === '') {
                firstInput = userInput.innerHTML
                userInput.innerHTML = '0';
                return
            }

            firstInput = userInput.innerHTML;
            userInput.innerHTML = '0';
            return;

        case 'multiply': 
            operator = '*';

            if ( firstInput === '') {
                firstInput = userInput.innerHTML
                userInput.innerHTML = '0';
                return
            }

            firstInput = userInput.innerHTML;
            userInput.innerHTML = '0';
            return;

        case 'reset': 
            userInput.innerHTML = '0';
            firstInput = '';
            operator = '';
            secondInput = '';
            return;

        case 'calculate': 
            secondInput = userInput.innerHTML;
            
            firstInput = Number(firstInput)
            secondInput = Number(secondInput)

            switch (operator) {
                case '+':
                    result = firstInput + secondInput;
                    userInput.innerHTML = `${result}`;
                    return

                case '-':
                    result = firstInput - secondInput;
                    userInput.innerHTML = `${result}`;
                    return

                case '/':
                    result = firstInput / secondInput;
                    userInput.innerHTML = `${result}`;
                    return

                case '*':
                    result = firstInput * secondInput;
                    userInput.innerHTML = `${result}`;
                    return 
            }
        
            if (result === '') {
                return
            }

            

            return

    }

    if (userInput.innerHTML === '0') {
        userInput.innerHTML = value;
        return
    }

    userInput.innerHTML += value;
}

