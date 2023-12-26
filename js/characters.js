
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
        DLC: "Да",
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
        start: [" "]
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
        start: [" "]
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
        start: [" "]
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
        start: [" "]
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
        start: [" "]
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

//export default characters;

// Пример доступа к атрибутам первого персонажа
//console.log(characters[0].character); // Выведет "Персонаж 1"

