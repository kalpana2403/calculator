let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = "";
let evaluated = false;
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            expression = eval(expression).toString();
            input.value = expression;
            evaluated = true;
        }

        else if (e.target.innerHTML == 'AC') {
            expression = "";
            input.value = expression;
            evaluated = false;
        }

        else if (e.target.innerHTML == 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
            evaluated = false;
        }

        else {
			if (evaluated && !isNaN(e.target.innerHTML)) {
				expression = "";
			}
            expression += e.target.innerHTML;
            input.value = expression;
            evaluated = false;
        }

    })
})
