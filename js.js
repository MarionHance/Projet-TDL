let field = document.getElementById('app-field');
let btn = document.getElementById('app-btn');
let listItems = document.getElementById('app-listItems');
let today_container = document.querySelector('.today');
let this_week_container = document.querySelector('.this-week');
let this_month_container = document.querySelector('.this-month');



// On gère l'event clic
btn.addEventListener('click', () => {
	var option_value = document.querySelector('#text');
	console.log(option_value);
	var value_option = option_value.options[option_value.selectedIndex].value;
	console.log(value_option);

	//on récupère le text de l'input
	//on récupère la valeur de l'input
	let text = field.value;
	// console.log(text);

	//apres il faut penser à utiliser .createElement()

	if (text === '') {
	} else if (value_option === 'today') {
		let newLi = document.createElement('li');
		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		today_container.appendChild(newLi);
		// On veut supprimer le text de l'input
		field.value = '';
	} else if (value_option === 'this_week') {
		let newLi = document.createElement('li');
		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		this_week_container.appendChild(newLi);
		// On veut supprimer le text de l'input
		field.value = '';
	} else if (value_option === 'this_month') {
		let newLi = document.createElement('li');
		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		this_month_container.appendChild(newLi);
		// On veut supprimer le text de l'input
		field.value = '';
	}
	
});

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('darkmode', () => {
	document.body.classList.toggle('dark');
});

function toggleTheme() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementsByTagName('link')[0];

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute('href') == 'style.css') {
		theme.setAttribute('href', 'dark.css');
	} else {
		theme.setAttribute('href', 'style.css');
	}
}