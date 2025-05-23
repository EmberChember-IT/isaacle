// main.js
import { characters } from './characters.js';

// Управление модальными окнами
document.addEventListener('DOMContentLoaded', () => {
    // Правила игры
    const rulesModal = document.getElementById('rules-modal');
    const rulesBtn = document.getElementById('rules-btn');
    const rulesClose = document.querySelector('#rules-modal .close');
    
    rulesBtn.onclick = () => rulesModal.style.display = "block";
    rulesClose.onclick = () => rulesModal.style.display = "none";
    
    // Окно победы
    const playAgainBtn = document.getElementById('play-again');
    if (playAgainBtn) {
        playAgainBtn.onclick = () => {
            location.reload(); // Полная перезагрузка страницы
        };
    }
});

class IsaacleGame {
    constructor() {
        this.availableCharacters = [...characters];
        this.secretCharacter = this.getRandomCharacter();
        this.attempts = [];
        this.guessedCharacters = new Set();
        this.gameOver = false; // Флаг окончания игры
        console.log('Загадан персонаж:', this.secretCharacter.character);
        this.initGame();
        this.initWinElements(); // Инициализируем элементы победы
    }

    getRandomCharacter() {
        const randomIndex = Math.floor(Math.random() * this.availableCharacters.length);
        return { ...this.availableCharacters[randomIndex] };
    }

    initGame() {
        this.initDatalist();
        this.initEventListeners();
    }

    initDatalist() {
        const datalist = document.getElementById('characterList') || this.createDatalist();
        this.updateDatalist();
    }

    initWinElements() {
        // Создаем элементы, если их нет
        if (!document.getElementById('win-modal')) {
            const winModal = document.createElement('div');
            winModal.id = 'win-modal';
            winModal.className = 'modal';
            winModal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2 class="win-title">Поздравляем!</h2>
                    <div class="attempts-count"></div>
                    <div class="character-info"></div>
                </div>
            `;
            document.body.appendChild(winModal);
        }

        if (!document.querySelector('.play-again-container')) {
            const playAgainContainer = document.createElement('div');
            playAgainContainer.className = 'play-again-container';
            playAgainContainer.innerHTML = `
                <button id="play-again" class="play-again-btn">Играть снова</button>
            `;
            document.body.appendChild(playAgainContainer);
        }

        // Назначаем обработчики
        document.querySelector('#win-modal .close').onclick = () => this.closeWinModal();
        document.getElementById('play-again').onclick = () => location.reload();
        window.onclick = (event) => {
            if (event.target === document.getElementById('win-modal')) {
                this.closeWinModal();
            }
        };
    }

    closeWinModal() {
        const modal = document.getElementById('win-modal');
        if (modal) modal.style.display = 'none';
    }

    endGame(isWin) {
        this.gameOver = true;
        const input = document.getElementById('ent');
        if (input) {
            input.disabled = true;
            input.placeholder = isWin ? "Вы победили!" : "Игра окончена";
        }

        if (isWin) {
            this.showWinModal();
            const playAgainContainer = document.querySelector('.play-again-container');
            if (playAgainContainer) playAgainContainer.style.display = 'block';
        }
    }

    showWinModal() {
        const modal = document.getElementById('win-modal');
        if (!modal) return;

        const title = modal.querySelector('.win-title');
        const attempts = modal.querySelector('.attempts-count');
        const characterInfo = modal.querySelector('.character-info');

        if (title) title.textContent = "Поздравляем!";
        if (attempts) attempts.textContent = `Попыток: ${this.attempts.length}`;
        
        if (characterInfo) {
            characterInfo.innerHTML = `
                <h3>${this.secretCharacter.character}</h3>
                ${Object.entries(this.secretCharacter)
                    .filter(([key]) => key !== 'character')
                    .map(([key, value]) => `
                    <p><strong>${key}:</strong> ${
                        Array.isArray(value) ? value.join(', ') : value
                    }</p>
                    `).join('')}
            `;
        }
        
        modal.style.display = "block";
    }

    createDatalist() {
        const datalist = document.createElement('datalist');
        datalist.id = 'characterList';
        document.body.appendChild(datalist);
        document.getElementById('ent').setAttribute('list', 'characterList');
        return datalist;
    }

    updateDatalist() {
        const datalist = document.getElementById('characterList');
        if (datalist) {
            datalist.innerHTML = this.availableCharacters.map(
                c => `<option value="${c.character}">`
            ).join('');
        }
    }

    removeCharacterFromAvailable(name) {
        this.availableCharacters = this.availableCharacters.filter(
            char => char.character.toLowerCase() !== name.toLowerCase()
        );
        this.updateDatalist();
    }

    showMessage(text, type) {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('fade-out');
            setTimeout(() => message.remove(), 500);
        }, 2000);
    }

    getColorClass(key, value) {
        if (key === 'start') {
            const secretStart = this.secretCharacter.start;
            const isExactMatch = JSON.stringify(value) === JSON.stringify(secretStart);
            const hasPartialMatch = value.some(item => secretStart.includes(item));
            return isExactMatch ? 'green' : hasPartialMatch ? 'yellow' : 'red';
        }
        return this.secretCharacter[key] === value ? 'green' : 'red';
    }

    createCharacterRow(character) {
        const row = document.createElement('div');
        row.className = 'character-row';
        
        const nameCell = document.createElement('div');
        nameCell.className = 'character-name';
        nameCell.textContent = character.character;
        row.appendChild(nameCell);

        for (const [key, value] of Object.entries(character)) {
            if (key === 'character') continue;
            
            const cell = document.createElement('div');
            cell.className = `character-cell ${this.getColorClass(key, value)}`;
            cell.innerHTML = `
                <div class="property-name">${key}</div>
                <div class="property-value">${
                    Array.isArray(value) ? value.join(', ') : value
                }</div>
            `;
            row.appendChild(cell);
        }
        
        return row;
    }

    handleGuess(input) {
        const normalizedInput = input.toLowerCase();
        
        // Проверка на повторный ввод
        if (this.guessedCharacters.has(normalizedInput)) {
            this.showMessage('Этот персонаж уже был!', 'error');
            return null;
        }

        // Поиск персонажа
        const character = this.availableCharacters.find(
            c => c.character.toLowerCase() === normalizedInput
        );

        if (!character) {
            this.showMessage('Персонаж не найден!', 'error');
            return null;
        }

        // Добавляем в угаданные
        this.guessedCharacters.add(normalizedInput);
        this.removeCharacterFromAvailable(character.character);
        return character;
    }

    addAttempt(character) {
        this.attempts.push(character);
        const container = document.getElementById('attempts-container');
        container.prepend(this.createCharacterRow(character));
        
        if (character.character === this.secretCharacter.character) {
            setTimeout(() => this.showMessage('Поздравляем! Вы угадали персонажа!', 'success'), 300);
        }
    }

    addAttempt(character) {
        if (this.gameOver) return;
        
        this.attempts.push(character);
        this.guessedCharacters.add(character.character.toLowerCase());
        this.removeCharacterFromAvailable(character.character);
        
        const container = document.getElementById('attempts-container');
        container.prepend(this.createCharacterRow(character));
        
        // Проверка победы
        if (character.character === this.secretCharacter.character) {
            this.endGame(true);
        }
    }

    endGame(isWin) {
        this.gameOver = true;
        const input = document.getElementById('ent');
        input.disabled = true;
        input.placeholder = isWin ? "Вы победили!" : "Игра окончена";
        
        if (isWin) {
            // Показываем модальное окно только для победы
            this.showWinModal();
            
            // Показываем кнопку "Играть снова" под попытками
            document.querySelector('.play-again-container').style.display = 'block';
        }
    }

    showWinModal() {
        const modal = document.getElementById('win-modal');
        const title = modal.querySelector('.win-title');
        const attempts = modal.querySelector('.attempts-count');
        const characterInfo = modal.querySelector('.character-info');
        
        title.textContent = "Поздравляем!";
        attempts.textContent = `Попыток: ${this.attempts.length}`;
        
        characterInfo.innerHTML = `
            <h3>${this.secretCharacter.character}</h3>
            ${Object.entries(this.secretCharacter)
                .filter(([key]) => key !== 'character')
                .map(([key, value]) => `
                <p><strong>${key}:</strong> ${
                    Array.isArray(value) ? value.join(', ') : value
                }</p>
                `).join('')}
        `;
        
        modal.style.display = "block";
    }

    initEventListeners() {
        const inputField = document.getElementById('ent');
        
        inputField.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const input = e.target.value.trim();
                if (input) {
                    const character = this.handleGuess(input);
                    if (character) {
                        this.addAttempt(character);
                        e.target.value = '';
                    }
                }
            }
        });

        // Обновление datalist при вводе
        inputField.addEventListener('input', () => {
            const input = inputField.value.toLowerCase();
            const datalist = document.getElementById('characterList');
            
            if (datalist) {
                datalist.innerHTML = this.availableCharacters
                    .filter(c => c.character.toLowerCase().includes(input))
                    .map(c => `<option value="${c.character}">`)
                    .join('');
            }
        });
                // Закрытие модального окна
        document.querySelector('#win-modal .close').onclick = () => {
            document.getElementById('win-modal').style.display = "none";
        };

        // Закрытие по клику вне окна
        window.onclick = (event) => {
            if (event.target === document.getElementById('win-modal')) {
                document.getElementById('win-modal').style.display = "none";
            }
        };

        // Кнопка "Играть снова"
        document.getElementById('play-again').onclick = () => {
            location.reload();
        };
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    window.game = new IsaacleGame();
});