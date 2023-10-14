let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let evaluated = false;
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            evaluated = true;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
            evaluated = false;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            evaluated = false;
        }

        else {
			if (evaluated && !isNaN(e.target.innerHTML)) {
				string = "";
			}
            string += e.target.innerHTML;
            input.value = string;
            evaluated = false;
        }

    })
})
