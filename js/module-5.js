const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout (str) {
const keybord =  str.split(''); 
const fullKeyboard = [keybord.slice(0, 12), keybord.slice(12, 23), keybord.slice(23)]
return fullKeyboard
};
const KeyboardLayoutEn = addKeyboardLayout(alphabetEn);
console.log (addKeyboardLayout(alphabetEn));

const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const KeyboardLayoutRu = addKeyboardLayout(alphabetRu);
console.log (addKeyboardLayout(alphabetRu));

const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const KeyboardLayoutUa = addKeyboardLayout(alphabetUa);
console.log (addKeyboardLayout(alphabetUa));

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

keyboard.layouts.en.topRow = KeyboardLayoutEn [0];
keyboard.layouts.en.middleRow = KeyboardLayoutEn [1];
keyboard.layouts.en.bottomRow = KeyboardLayoutEn [2];
keyboard.layouts.ru.topRow = KeyboardLayoutRu [0];
keyboard.layouts.ru.middleRow = KeyboardLayoutRu [1];
keyboard.layouts.ru.bottomRow = KeyboardLayoutRu [2];
keyboard.layouts.ua.topRow = KeyboardLayoutUa [0];
keyboard.layouts.ua.middleRow = KeyboardLayoutUa [1];
keyboard.layouts.ua.bottomRow = KeyboardLayoutUa [2];

let ImputLang = 0;
do {
    ImputLang = prompt('Выберите язык en-0, ru-1, ua-2', 0) 
    if (ImputLang === '0' || ImputLang === '1' || ImputLang === '2' || ImputLang === null) break;
    else  alert("Недопустимое значение, проверте правильность ввода!");
} while (true);

ImputLang = Number(ImputLang);

keyboard.currentLang = keyboard.langs[ImputLang];

let userLengArr;
if (ImputLang === 0) {userLengArr = KeyboardLayoutEn};
if (ImputLang === 1) {userLengArr = KeyboardLayoutRu};
if (ImputLang === 2) {userLengArr = KeyboardLayoutUa};

function getRandomItem(arr){
const randomItem = Math.floor(Math.random() * arr.length);
return randomItem;
}
    
function getRandCharInAlph (arr, callback) {  
    const randomStr = callback(arr);
    const randomChar = callback(arr[randomStr]);  
    return (arr[randomStr][randomChar]);
}
      
const randomAlphabetChar = getRandCharInAlph(userLengArr, getRandomItem);

console.log (`Случайный символ из случайной строки языка ${keyboard.langs[ImputLang]} - ${randomAlphabetChar}`)
    