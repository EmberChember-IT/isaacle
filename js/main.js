// Создаем объекты для представления персонажей

const characters = [
    {
        character: "Isaac",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Bomb"]
    },
    {
        character: "Azazel",
        sex: "Мужской",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Card"]
    },
    {
        character: "Apollyon",
        sex: "Не определен",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Afterbirth+",
        start: ["Active"]
    },
    {
        character: "Bethany",
        sex: "Женский",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Heart"]
    },
    {
        character: "Jacob and Esau",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["None"]
    },
    {
        character: "Eve",
        sex: "Женский",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Passive"]
    },
    {
        character: "The Forgotten",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Afterbirth+",
        start: ["None"]
    },
    {
        character: "Judas",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Coin"]
    },
    {
        character: "Cain",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Passive", "Key", "Trinket"]
    },
    {
        character: "Keeper",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Afterbirth",
        start: ["Active", "Bomb", "Coin", "Trinket"]
    },
    {
        character: "Lazarus",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Passive", "Pill"]
    },
    {
        character: "Lilith",
        sex: "Женский",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Afterbirth",
        start: ["Active", "Passive"]
    },
    {
        character: "The Lost",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Coin"]
    },
    {
        character: "Magdalene",
        sex: "Женский",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Pill"]
    },
    {
        character: "Samson",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Passive", "Trinket"]
    },
    {
        character: "???",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active"]
    },
    {
        character: "Tainted Azazel",
        sex: "Мужской",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Card"]
    },
    {
        character: "Tainted Isaac",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Bomb"]
    },
    {
        character: "Tainted Apollyon",
        sex: "Не определен",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active"]
    },
    {
        character: "Tainted Bethany",
        sex: "Женский",
        life: "Живой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Heart"]
    },
    {
        character: "Tainted Jacob",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active"]
    },
    {
        character: "Tainted Eve",
        sex: "Женский",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active"]
    },
    {
        character: "Tainted Forgotten",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["None"]
    },
    {
        character: "Tainted Judas",
        sex: "Мужской",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Coin"]
    },
    {
        character: "Tainted Cain",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Key"]
    },
    {
        character: "Tainted Keeper",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["Bomb"]
    },
    {
        character: "Tainted Lazarus",
        sex: "Мужской",
        life: ["Живой", "Неживой"],
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active"]
    },
    {
        character: "Tainted Lilith",
        sex: "Женский",
        life: "Неживой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["None"]
    },
    {
        character: "Tainted Lost",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["Card", "Coin"]
    },
    {
        character: "Tainted Magdalene",
        sex: "Женский",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active"]
    },
    {
        character: "Tainted Samson",
        sex: "Мужской",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["None"]
    },
    {
        character: "Tainted ???",
        sex: "Не определен",
        life: "Неживой",
        HP: "Не может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Bomb"]
    },
    {
        character: "Tainted Eden",
        sex: "Не определен",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Repentance",
        start: ["Active", "Passive", "Bomb", "Key", "Coin", "Trinket", "Pill", "Card"]
    },
    {
        character: "Eden",
        sex: "Не определен",
        life: "Живой",
        HP: "Может иметь контейнеры",
        DLC: "Rebirth",
        start: ["Active", "Passive", "Bomb", "Key", "Coin", "Trinket", "Pill", "Card"]
    },

];

 function showCharacterList() {
    // Показать выпадающий список
    const characterInput = document.getElementById('ent');
    characterInput.setAttribute('list', 'characterList');
}


/*
const characterInput = document.getElementById('ent');
const characterList = document.getElementById('characterList');
let listVisible = false; // Флаг для отслеживания видимости списка

characterInput.addEventListener('input', function() {
    // Показать выпадающий список при вводе текста
    if (characterInput.value.trim() !== '' && !listVisible) {
        characterList.setAttribute('style', 'display: block;');
        listVisible = true;
    } else if (characterInput.value.trim() === '' && listVisible) {
        characterList.setAttribute('style', 'display: none;');
        listVisible = false;
    }
});
*/

// Функция для сравнения двух объектов персонажей
function areCharactersEqual(char1, char2) {
    return Object.entries(char1).every(([key, value]) => char2[key] === value);
}
//Выбор рандомного персонажа
let  char = ['Isaac', 'Magdalene', 'Cain', 'Judas', '???', 'Eve', 'Samson', 'Azazel', 'Lazarus', 'Eden', 'The Lost', 'Lilith', 'Keeper', 'Apollyon', 'The Forgotten', 'Bethany', 'Jacob and Esau', 'Tainted Isaac', 'Tainted Magdalene', 'Tainted Cain', 'Tainted Judas', 'Tainted ???', 'Tainted Eve', 'Tainted Samson', 'Tainted Azazel', 'Tainted Lazarus', 'Tainted Eden', 'Tainted Lost', 'Tainted Lilith', 'Tainted Keeper', 'Tainted Apollyon', 'Tainted Forgotten', 'Tainted Bethany', 'Tainted Jacob'];

let rndm = char[Math.floor(Math.random() * char.length)];

console.log(rndm)
//Выбор рандомного персонажа

let rndmCharacter = characters.find(character => character.character === rndm);

if (rndmCharacter) {
    // Переменная rndm теперь содержит параметры случайно выбранного персонажа
    let rndm = { ...rndmCharacter };
    console.log(`Параметры для ${rndm}:`, rndm);
} else {
    console.log(`Персонаж с именем ${rndm} не найден.`);
}

// Инициализация массива entryCharacters
let entryCharacters = [];
let entryCharacter;




// Функция для определения класса цвета для каждого параметра
function getColorClass(key, value, colorClass) {
    // Проверяем, является ли параметр 'start'
    if (key === 'start') {
        // Преобразуем массив в строку
        const startValueString = value.join(',');
        const rndmStartValues = rndmCharacter.start.join(',');

        // Разбиваем строку на массив и сравниваем каждый элемент
        const startValues = startValueString.split(',');

        // Если параметр полностью совпадает, возвращаем 'green'
        if (startValues.join(',') === rndmStartValues) {
            return 'green';
        }

        // Если хотя бы одно значение совпадает, возвращаем 'yellow'
        if (startValues.some(startValue => rndmStartValues.includes(startValue))) {
            return 'yellow';
        }
    }

    // В остальных случаях, сравниваем параметр с rndmCharacter
    return rndmCharacter[key] === value ? 'green' : 'red';
}

// Функция для вывода параметра "start" в интерфейс с цветовыми обозначениями
function displayCharacterInfo(parentElement, characterData, colorClass) {
    const element = document.createElement('div');
    element.classList.add('character-info'); // добавляем класс для стилизации
    parentElement.appendChild(element);

    for (const [key, value] of Object.entries(characterData)) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${key}: ${value}`;

        // Определение класса цвета для каждого параметра
        const currentColorClass = getColorClass(key, value, colorClass);
        paragraph.classList.add(currentColorClass);

        element.appendChild(paragraph);
    }

    parentElement.insertBefore(element, parentElement.firstChild);

    // Флаг, отслеживающий, был ли параметр "start" уже выведен
    let startDisplayed = false;

// Отображение параметра "start" в соответствующем контейнере
    if ('start' in entryCharacter && !startDisplayed) {
        const startElement = document.getElementById('entry-info-start');
        if (startElement) {
            const paragraph = document.createElement('p');
            paragraph.textContent = `start: ${entryCharacter['start'].join(', ')}`;
            const currentColorClass = getColorClass('start', entryCharacter['start'], colorClass);
            paragraph.classList.add(currentColorClass);

            // Добавляем элемент в начало контейнера
            startElement.insertBefore(paragraph, startElement.firstChild);

            // Устанавливаем флаг в true после первого вывода
            startDisplayed = true;
        }
    }
}
// Сравнение переменных и вывод параметров в интерфейс
function compareValues() {

    let entry = document.getElementById('ent').value.toLowerCase();

    let entryCharacterData = characters.find(character => character.character.toLowerCase() === entry);

    if (entryCharacterData) {
        entryCharacter = { ...entryCharacterData };
        entryCharacters.push(entryCharacter); // Сохраняем введенного персонажа и его параметры

        // Отображаем параметры в интерфейсе
        const allEntryInfoElement = document.getElementById('all-entry-info');
        displayCharacterInfo(allEntryInfoElement, entryCharacter, 'yellow');
    } else {
        console.log(`Персонаж с именем ${entry} не найден.`);
    }

    if (rndmCharacter && entryCharacter) {
        console.log("Продолжайте гадать");

        // Очищаем вывод для entry-info-start
        const startElement = document.getElementById('entry-info-start');
        if (startElement) {
            startElement.innerHTML = '';

        }
    }
}



// Вызываем функцию compareValues() после того, как пользователь введет значение
document.getElementById('ent').addEventListener('keyup', event => {
    if (event.keyCode === 13) { // Проверяем, что нажата клавиша Enter
        compareValues();
        document.getElementById('ent').value = "";
    }
});

