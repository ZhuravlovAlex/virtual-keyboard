const keyboards = {

/*------------ENG lang Object--------------*/	
"en":  [
	{
	small: '`', 
	shift: '~',
	code: 'Backquote',
	keycode: '192',
	functional: 'false',
	},
	{
	small: '1',
	shift: '!',
	code: 'Digit1',
	keycode: '49',
	functional: 'false',
	},
	{
	small: '2',
	shift: '@',
	code: 'Digit2',
	keycode: '50',
	functional: 'false',
	},
	{
	small: '3',
	shift: '#',
	code: 'Digit3',
	keycode: '51',
	functional: 'false',
	},
	{
	small: '4',
	shift: '$',
	code: 'Digit4',
	keycode: '52',
	functional: 'false',
	},
	{
	small: '5',
	shift: '%',
	code: 'Digit5',
	keycode: '53',
	functional: 'false',
	},
	{
	small: '6',
	shift: '^',
	code: 'Digit6',
	keycode: '54',
	functional: 'false',
	},
	{
	small: '7',
	shift: '&',
	code: 'Digit7',
	keycode: '55',
	functional: 'false',
	},
	{
	small: '8',
	shift: '*',
	code: 'Digit8',
	keycode: '56',
	functional: 'false',
	},
	{
	small: '9',
	shift: '(',
	code: 'Digit9',
	keycode: '57',
	functional: 'false',
	},
	{
	small: '0',
	shift: ')',
	code: 'Digit0',
	keycode: '48',
	functional: 'false',
	},
	{
	small: '-',
	shift: '_',
	code: 'Minus',
	keycode: '189',
	functional: 'false',
	},
	{
	small: '=',
	shift: '+',
	code: 'Equal',
	keycode: '187',
	functional: 'false',
	},
	{
	small: 'Backspace',
	shift: 'Backspace',
	code: 'Backspace',
	keycode: '8',
	functional: 'true',
	},
	{
	small: 'Tab',
	shift: 'Tab',
	code: 'Tab',
	keycode: '9',
	functional: 'true',
	},
	{
	small: 'q',
	shift: 'Q',
	code: 'KeyQ',
	keycode: '81',
	functional: 'false',
	},
	{
	small: 'w',
	shift: 'W',
	code: 'KeyW',
	keycode: '87',
	functional: 'false',
	},
	{
	small: 'e',
	shift: 'E',
	code: 'KeyE',
	keycode: '69',
	functional: 'false',
	},
	{
	small: 'r',
	shift: 'R',
	code: 'KeyR',
	keycode: '82',
	functional: 'false',
	},
	{
	small: 't',
	shift: 'T',
	code: 'KeyT',
	keycode: '84',
	functional: 'false',
	},
	{
	small: 'y',
	shift: 'Y',
	code: 'KeyY',
	keycode: '89',
	functional: 'false',
	},
	{
	small: 'u',
	shift: 'U',
	code: 'KeyU',
	keycode: '85',
	functional: 'false',
	},
	{
	small: 'i',
	shift: 'I',
	code: 'KeyI',
	keycode: '73',
	functional: 'false',
	},
	{
	small: 'o',
	shift: 'O',
	code: 'KeyO',
	keycode: '79',
	functional: 'false',
	},
	{
	small: 'p',
	shift: 'P',
	code: 'KeyP',
	keycode: '80',
	functional: 'false',
	},
	{
	small: '[',
	shift: '{',
	code: 'BracketLeft',
	keycode: '219',
	functional: 'false',
	},
	{
	small: ']',
	shift: '}',
	code: 'BracketRight',
	keycode: '221',
	functional: 'false',
	},
	{
	small: '\\',
	shift: '|',
	code: 'Backslash',
	keycode: '220',
	functional: 'false',
	},
	{
	small: 'Del',
	shift: 'Del',
	code: 'Deleteh',
	keycode: '46',
	functional: 'false',
	},
	{
	small: 'CapsLock',
	shift: 'CapsLock',
	code: 'CapsLock',
	keycode: '0',
	functional: 'true',
	},
	{
	small: 'a',
	shift: 'A',
	code: 'KeyA',
	keycode: '65',
	functional: 'false',
	},
	{
	small: 's',
	shift: 'S',
	code: 'KeyS',
	keycode: '83',
	functional: 'false',
	},
	{
	small: 'd',
	shift: 'D',
	code: 'KeyD',
	keycode: '68',
	functional: 'false',
	},
	{
	small: 'f',
	shift: 'F',
	code: 'KeyF',
	keycode: '70',
	functional: 'false',
	},
	{
	small: 'g',
	shift: 'G',
	code: 'KeyG',
	keycode: '71',
	functional: 'false',
	},
	{
	small: 'h',
	shift: 'H',
	code: 'KeyH',
	keycode: '72',
	functional: 'false',
	},
	{
	small: 'j',
	shift: 'J',
	code: 'KeyJ',
	keycode: '74',
	functional: 'false',
	},
	{
	small: 'k',
	shift: 'K',
	code: 'KeyK',
	keycode: '75',
	functional: 'false',
	},
	{
	small: 'l',
	shift: 'L',
	code: 'KeyL',
	keycode: '76',
	functional: 'false',
	},
	{
	small: ';',
	shift: ':',
	code: 'Semicolon',
	keycode: '186',
	functional: 'false',
	},
	{
	small: "'",
	shift: '"',
	code: 'Quote',
	keycode: '222',
	functional: 'false',
	},
	{
	small: 'Enter',
	shift: 'Enter',
	code: 'Enter',
	keycode: 13,
	functional: 'true',
	},
	
	{
	small: 'Shift',
	shift: 'Shift',
	code: 'ShiftLeft',
	keycode: '16',
	functional: 'true',
	},
	{
	small: 'z',
	shift: 'Z',
	code: 'KeyZ',
	keycode: '90',
	functional: 'false',
	},
	{
	small: 'x',
	shift: 'X',
	code: 'KeyX',
	keycode: '88',
	functional: 'false',
	},
	{
	small: 'c',
	shift: 'C',
	code: 'KeyC',
	keycode: '67',
	functional: 'false',
	},
	{
	small: 'v',
	shift: 'V',
	code: 'KeyV',
	keycode: '86',
	functional: 'false',
	},
	{
	small: 'b',
	shift: 'B',
	code: 'KeyB',
	keycode: '66',
	functional: 'false',
	},
	{
	small: 'n',
	shift: 'N',
	code: 'KeyN',
	keycode: '78',
	functional: 'false',
	},
	{
	small: 'm',
	shift: 'M',
	code: 'KeyM',
	keycode: '77',
	functional: 'false',
	},
	{
	small: ',',
	shift: '<',
	code: 'Comma',
	keycode: '188',
	functional: 'false',
	},
	{
	small: '.',
	shift: '>',
	code: 'Period',
	keycode: '190',
	functional: 'false',
	},
	{
	small: '/',
	shift: '?',
	code: 'Slash',
	keycode: '191',
	functional: 'false',
	},
	{
	small: '↑',
	shift: '↑',
	code: 'ArrowUp',
	keycode: '38',
	functional: 'true',
	},

	{
	small: 'Shift',
	shift: 'Shift',
	code: 'ShiftRight',
	keycode: '16',
	functional: 'true',
	},
	{
	small: 'Ctrl',
	shift: 'Ctrl',
	code: 'ControlLeft',
	keycode: '17',
	functional: 'true',
	},
	{
	small: 'Alt',
	shift: 'Alt',
	code: 'AltLeft',
	keycode: '18',
	functional: 'true',
	},
	{
	small: 'Space',
	shift: 'Space',
	code: 'Space',
	keycode: '32',
	functional: 'true',
	},
	{
	small: 'Alt',
	shift: 'Alt',
	code: 'AltRight',
	keycode: '225',
	functional: 'true',
	},
	{
	small: 'Ctrl',
	shift: 'Ctrl',
	code: 'ControlRight',
	keycode: '177',
	functional: 'true',
	},
	
	{
	small: '←',
	shift: '←',
	code: 'ArrowLeft',	
	keycode: '37',
	functional: 'true',
	},
	
	{
	small: '↓',
	shift: '↓',
	code: 'ArrowDown',
	keycode: '40',
	functional: 'true',
	},
	{
	small: '→',
	shift: '→',
	code: 'ArrowRight',
	keycode: '39',
	functional: 'true',
	},
	],

/*------------RU lang Object--------------*/
	"ru": [
		{
		small: 'ё',
		shift: 'Ё',
		code: 'Backquote',
		keycode: '192',
		functional: 'false',
		},
		{
		small: '1',
		shift: '!',
		code: 'Digit1',
		keycode: '49',
		functional: 'false',
		},
		{
		small: '2',
		shift: '"',
		code: 'Digit2',
		keycode: '50',
		functional: 'false',
		},
		{
		small: '3',
		shift: '№',
		code: 'Digit3',
		keycode: '51',
		functional: 'false',
		},
		{
		small: '4',
		shift: ';',
		code: 'Digit4',
		keycode: '52',
		functional: 'false',
		},
		{
		small: '5',
		shift: '%',
		code: 'Digit5',
		keycode: '53',
		functional: 'false',
		},
		{
		small: '6',
		shift: ':',
		code: 'Digit6',
		keycode: '54',
		functional: 'false',
		},
		{
		small: '7',
		shift: '?',
		code: 'Digit7',
		keycode: '55',
		functional: 'false',
		},
		{
		small: '8',
		shift: '*',
		code: 'Digit8',
		keycode: '56',
		functional: 'false',
		},
		{
		small: '9',
		shift: '(',
		code: 'Digit9',
		keycode: '57',
		functional: 'false',
		},
		{
		small: '0',
		shift: ')',
		code: 'Digit0',
		keycode: '48',
		functional: 'false',
		},
		{
		small: '-',
		shift: '_',
		code: 'Minus',
		keycode: '189',
		functional: 'false',
		},
		{
		small: '=',
		shift: '+',
		code: 'Equal',
		keycode: '187',
		functional: 'false',
		},
		{
		small: 'Backspace',
		shift: 'Backspace',
		code: 'Backspace',
		keycode: '8',
		functional: 'true',
		},
		{
		small: 'Tab',
		shift: 'Tab',
		code: 'Tab',
		keycode: '9',
		functional: 'true',
		},
		{
		small: 'й',
		shift: 'Й',
		code: 'KeyQ',
		keycode: '81',
		functional: 'false',
		},
		{
		small: 'ц',
		shift: 'Ц',
		code: 'KeyW',
		keycode: '87',
		functional: 'false',
		},
		{
		small: 'у',
		shift: 'У',
		code: 'KeyE',
		keycode: '69',
		functional: 'false',
		},
		{
		small: 'к',
		shift: 'К',
		code: 'KeyR',
		keycode: '82',
		functional: 'false',
		},
		{
		small: 'е',
		shift: 'Е',
		code: 'KeyT',
		keycode: '84',
		functional: 'false',
		},
		{
		small: 'н',
		shift: 'Н',
		code: 'KeyY',
		keycode: '89',
		functional: 'false',
		},
		{
		small: 'г',
		shift: 'Г',
		code: 'KeyU',
		keycode: '85',
		functional: 'false',
		},
		{
		small: 'ш',
		shift: 'Ш',
		code: 'KeyI',
		keycode: '73',
		functional: 'false',
		},
		{
		small: 'щ',
		shift: 'Щ',
		code: 'KeyO',
		keycode: '79',
		functional: 'false',
		},
		{
		small: 'з',
		shift: 'З',
		code: 'KeyP',
		keycode: '80',
		functional: 'false',
		},
		{
		small: 'х',
		shift: 'Х',
		code: 'BracketLeft',
		keycode: '219',
		functional: 'false',
		},
		{
		small: 'ъ',
		shift: 'Ъ',
		code: 'BracketRight',
		keycode: '221',
		functional: 'false',
		},
		{
		small: '\\',
		shift: '/',
		code: 'Backslash',
		keycode: '220',
		functional: 'false',
		},
		{
		small: 'Del',
		shift: 'Del',
		code: 'Deleteh',
		keycode: '46',
		functional: 'false',
		},
		{
		small: 'CapsLock',
		shift: 'CapsLock',
		code: 'CapsLock',
		keycode: '0',
		functional: 'true',
		},
		{
		small: 'ф',
		shift: 'Ф',
		code: 'KeyA',
		keycode: '65',
		functional: 'false',
		},
		{
		small: 'ы',
		shift: 'Ы',
		code: 'KeyS',
		keycode: '83',
		functional: 'false',
		},
		{
		small: 'в',
		shift: 'В',
		code: 'KeyD',
		keycode: '68',
		functional: 'false',
		},
		{
		small: 'а',
		shift: 'А',
		code: 'KeyF',
		keycode: '70',
		functional: 'false',
		},
		{
		small: 'п',
		shift: 'П',
		code: 'KeyG',
		keycode: '71',
		functional: 'false',
		},
		{
		small: 'р',
		shift: 'Р',
		code: 'KeyH',
		keycode: '72',
		functional: 'false',
		},
		{
		small: 'о',
		shift: 'О',
		code: 'KeyJ',
		keycode: '74',
		functional: 'false',
		},
		{
		small: 'л',
		shift: 'Л',
		code: 'KeyK',
		keycode: '75',
		functional: 'false',
		},
		{
		small: 'д',
		shift: 'Д',
		code: 'KeyL',
		keycode: '76',
		functional: 'false',
		},
		{
		small: 'ж',
		shift: 'Ж',
		code: 'Semicolon',
		keycode: '186',
		functional: 'false',
		},
		{
		small: 'э',
		shift: 'Э',
		code: 'Quote',
		keycode: '222',
		functional: 'false',
		},
		{
		small: 'Enter',
		shift: 'Enter',
		code: 'Enter',
		keycode: '13',
		functional: 'true',
		},
		{
		small: 'Shift',
		shift: 'Shift',
		code: 'ShiftLeft',
		keycode: '16',
		functional: 'true',
		},
		{
		small: 'я',
		shift: 'Я',
		code: 'KeyZ',
		keycode: '90',
		functional: 'false',
		},
		{
		small: 'ч',
		shift: 'Ч',
		code: 'KeyX',
		keycode: '88',
		functional: 'false',
		},
		{
		small: 'с',
		shift: 'С',
		code: 'KeyC',
		keycode: '67',
		functional: 'false',
		},
		{
		small: 'м',
		shift: 'М',
		code: 'KeyV',
		keycode: '86',
		functional: 'false',
		},
		{
		small: 'и',
		shift: 'И',
		code: 'KeyB',
		keycode: '66',
		functional: 'false',
		},
		{
		small: 'т',
		shift: 'Т',
		code: 'KeyN',
		keycode: '78',
		functional: 'false',
		},
		{
		small: 'ь',
		shift: 'Ь',
		code: 'KeyM',
		keycode: '77',
		functional: 'false',
		},
		{
		small: 'б',
		shift: 'Б',
		code: 'Comma',
		keycode: '188',
		functional: 'false',
		},
		{
		small: 'ю',
		shift: 'Ю',
		code: 'Period',
		keycode: '190',
		functional: 'false',
		},
		{
		small: '.',
		shift: ',',
		code: 'Slash',
		keycode: '191',
		functional: 'false',
		},
		{
		small: '↑',
		shift: '↑',
		code: 'ArrowUp',
		keycode: '38',
		functional: 'true',
		},
		{
		small: 'Shift',
		shift: 'Shift',
		code: 'ShiftRight',
		keycode: '16',
		functional: 'true',
		},
		{
		small: 'Ctrl',
		shift: 'Ctrl',
		code: 'ControlLeft',
		keycode: '17',
		functional: 'true',
		},
		{
		small: 'Alt',
		shift: 'Alt',
		code: 'AltLeft',
		keycode: '18',
		functional: 'true',
		},
		{
		small: 'Space',
		shift: 'Space',
		code: 'Space',
		keycode: '32',
		functional: 'true',
		},
		{
		small: 'Alt',
		shift: 'Alt',
		code: 'AltRight',
		keycode: '225',
		functional: 'true',
		},
		{
		small: 'Ctrl',
		shift: 'Ctrl',
		code: 'ControlRight',
		keycode: '177',
		functional: 'true',
		},
		
		{
		small: '←',
		shift: '←',
		code: 'ArrowLeft',
		keycode: '37',
		functional: 'true',
		},

		{
		small: '↓',
		shift: '↓',
		code: 'ArrowDown',
		keycode: '40',
		functional: 'true',
		},
		{
		small: '→',
		shift: '→',
		code: 'ArrowRight',
		keycode: '39',
		functional: 'true',
		},
	]
}

let lang = 'en';
let shift = false;
let capslock = false;

let textarea = null;
let main = null;
let ctrl = false;

document.addEventListener("DOMContentLoaded",() => {
	createKeyboard();
});

function createKeys(lang, container) {
	const keyboard = keyboards[lang];

	for (let i = 0; i < keyboard.length; i++) {
		const key = document.createElement('button');
		key.setAttribute('type', 'button');
		key.textContent = keyboard[i].small;
		key.dataset.code = keyboard[i].code;

		switch(keyboard[i].small) {
			case 'Backspace':
				key.classList.add('rectangle-big_black');
				key.addEventListener('click', remove);
				break;
			case 'CapsLock':
				key.classList.add('rectangle-big_black');
				key.addEventListener('click', toggleCapslock);
				break;
			case 'Enter':
				key.classList.add('rectangle-big_black');
				key.addEventListener('click', () => {
					textarea.textContent += '\n';
				});
				break;
			case 'Shift':
				key.classList.add('rectangle-big_black');
				key.addEventListener('click', toggleShift);
				break;
			case 'Space':
				key.classList.add('rectangle-spase_grey');
				key.addEventListener('click', () => {
					textarea.textContent += ' ';
				});
				break;
			case 'Alt':
				key.classList.add('square_black');
				key.addEventListener('click', () => {
					if (ctrl) toggleLanguage();
				})
				break;
			case "Del":
				key.classList.add('square_black');
				break;
			case "→":
				key.classList.add('square_black');
				break;
			case "↓":
				key.classList.add('square_black');
				break;
			case "←":
				key.classList.add('square_black');
				break;
			case "↑":
				key.classList.add('square_black');
				break;
			case "Tab":
				key.classList.add('square_black');
				key.addEventListener('click', () => {
					textarea.textContent += '\t';
				});
				break;
			/*case 'ShiftRight':
				key.classList.add('rectangle-small_black');
				break;*/
			case 'Ctrl':
				key.classList.add('rectangle-small_black');
				key.addEventListener('click', () => {
					ctrl = !ctrl;
				})
				break;

			default:
				if (keyboard[i].code.startsWith('Digit')) {
					if (shift) key.textContent = keyboard[i].shift;
					else key.textContent = keyboard[i].small;
				} else key.textContent = shift || capslock ? keyboard[i].shift : keyboard[i].small;
				key.classList.add('square_grey');
				key.addEventListener('click', type);
				break;
		} 

		container.append(key);
	}
}

function createKeyboard() {
	const elementMain = document.createElement("div");
	const elementTextarea = document.createElement("textarea");
	const elementTextChangeLang = document.createElement("h3");

	textarea = elementTextarea;
	main = elementMain;
	
	elementTextChangeLang.textContent = 'Change language Ctrl+Alt'

	elementMain.classList.add("keyboard_body");
	elementTextarea.classList.add("keyboard_output");
	elementTextChangeLang.classList.add("langEngToRu");

	createKeys(lang, elementMain);
	document.body.append(elementMain);
	document.body.prepend(elementTextarea);
	document.body.append(elementTextChangeLang);
	
}

function toggleLanguage() {
	lang = lang === 'en' ? 'ru' : 'en';
	shift = false;
	capslock = false;
	ctrl = false;
	main.innerHTML = '';
	createKeys(lang, main);
}

function toggleShift() {
	shift = !shift;
	main.innerHTML = '';
	createKeys(lang, main);
}

function toggleCapslock() {
	capslock = !capslock;
	main.innerHTML = '';
	createKeys(lang, main);
}

function type() {
	textarea.textContent += this.textContent;
}

function remove() {
	textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);
}

document.addEventListener('keydown', (event) => {
	const code = event.code;
	const button = document.querySelector(`[data-code="${code}"]`);
	button.classList.add('active');

	switch(code) {
		case 'Tab':
			textarea.textContent += '\t';
			break;
		case 'Enter':
			textarea.textContent += '\n'
			break;
		case 'Space':
			textarea.textContent += ' ';
			break;
		case 'Shift':
			break;
		case 'Capslock':
			break;
		default:
			textarea.textContent += button.textContent;
			break;
	}

	
})

document.addEventListener('keyup', (event) => {
	const code = event.code;
	const button = document.querySelector(`[data-code="${code}"]`);
	if (!button) return;
	button.classList.remove('active');
})
