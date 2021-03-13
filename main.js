const input = document.querySelector('.input'),
			unitOfMeasure = document.querySelector('.type');
			// for operations('^x')
		  let tempVar = '';

function insert(num) {
	input.value += num;
}

function clean() {
	input.value = '';
	tempVar = '';
}

function back() {
	input.value = input.value.substring(0, input.value.length-1);
}

function equal() {
	// line 122
	if (input.value.includes('^')) {
		let tmp = input.value.split('^');
		let num = eval(tempVar),
					degree = +tmp[1];
		input.value = Math.pow(num, degree);
		tempVar = '';
		return;
	}
	if (eval(input.value) == Infinity) {
		input.value = '0';
	}
	if (input.value) {
		input.value = eval(input.value);
	}
}

// Pi / e
function constant(name) {
	if (name == 'pi')
		input.value += Math.PI.toFixed(12);
	if (name == 'e')
		input.value += Math.E.toFixed(12);
}

// percent
function percent() {
	if (input.value) {
		input.value = eval(input.value) / 100;
	}
}

// switch rad / deg
function radOrDeg() {
	if (unitOfMeasure.textContent == 'deg') {
		unitOfMeasure.textContent = 'rad'
	} else if (unitOfMeasure.textContent == 'rad') {
		unitOfMeasure.textContent = 'deg'
	}
}

// trigonometry
function trig(name) {
	if (input.value) {
		switch(name) {
			case 'sin':
				if (unitOfMeasure.textContent == 'deg') {
					input.value = parseFloat(Math.sin(input.value * Math.PI / 180).toFixed(8).toString());
				} else {
					input.value = parseFloat(Math.sin(input.value).toFixed(8).toString());
				}
				break;
		}
		switch(name) {
			case 'cos':
				if (unitOfMeasure.textContent == 'deg') {
					input.value = parseFloat(Math.cos(input.value * Math.PI / 180).toFixed(8).toString());
				} else {
					input.value = parseFloat(Math.cos(input.value).toFixed(8).toString());
				}
				break;
		}
		switch(name) {
			case 'tan':
				if (unitOfMeasure.textContent == 'deg') {
					input.value = parseFloat(Math.tan(input.value * Math.PI / 180).toFixed(8).toString());
				} else {
					input.value = parseFloat(Math.tan(input.value).toFixed(8).toString());
				}
				break;
		}
		switch(name) {
			case 'ctg':
				if (unitOfMeasure.textContent == 'deg') {
					input.value = parseFloat(1 / Math.tan(input.value * Math.PI / 180).toFixed(8).toString());
				} else {
					input.value = parseFloat(1 / Math.tan(input.value).toFixed(8).toString());
				}
				break;
		}
	}
}

// logarithms
function log (name) {
	if (input.value) {
		switch(name) {
			case 'log':
				input.value = Math.log10(input.value);
				break;
			case 'ln':
				input.value = Math.log(input.value);
				break;
		}
	}
}

// operations

function operations(name) {
	switch(name) {
		case '^x':
			// line 21-27
			tempVar = input.value;
			input.value += '^';
			break;
		case '^2':
			input.value = Math.pow(input.value, 2);
			break;
		case '^-1':
			input.value = Math.pow(input.value, -1);
			break;
		case 'sqrt':
			input.value = Math.sqrt(input.value);
			break;
	}
}

// factorial

function getRecursion(n) {
	return (n != 1) ? n * getRecursion(n - 1) : 1;
}

function factorial() {
	input.value = getRecursion(input.value);
}

// dark mode
const checkBox = document.querySelector('.switch label');

function darkMode() {
	const body = document.body,
				container = document.querySelector('.container'),
				item = document.querySelectorAll('.item'),
				itemInput = document.querySelectorAll('.item.input'),
				inputHold = document.querySelectorAll('.dark-item.input::placeholder');

	
	body.classList.toggle('dark-body');
	container.classList.toggle('dark-container');

	item.forEach(item => {
		item.classList.toggle('dark-item');
	});

	itemInput.classList.toggle('dark-item.input');
	inputHold.classList.toggle('dark-item.input::placeholder');

}

checkBox.addEventListener('click', darkMode);