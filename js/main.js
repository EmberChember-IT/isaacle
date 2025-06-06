import { characters } from './characters.js';

class IsaacleGame {
    constructor() {
        // Кэширование DOM-элементов
        this.domElements = {
            inputField: document.getElementById('ent'),
            attemptsContainer: document.getElementById('attempts-container'),
            winModal: document.getElementById('win-modal'),
            rulesModal: document.getElementById('rules-modal'),
            rulesBtn: document.getElementById('rules-btn'),
            playAgainBtn: document.getElementById('play-again')
        };

        // Инициализация игры
        this.availableCharacters = [...characters];
        this.secretCharacter = this.getRandomCharacter();
        this.attempts = [];
        this.guessedCharacters = new Set();
        this.gameOver = false;

        console.log('Загадан персонаж:', this.secretCharacter.character);
        this.initGame();
    }

    getRandomCharacter() {
        const randomIndex = Math.floor(Math.random() * this.availableCharacters.length);
        return { ...this.availableCharacters[randomIndex] };
    }

    initGame() {
        this.createCustomDatalist();
        this.initEventListeners();
        this.setupModalHandlers();
    }

    createCustomDatalist() {
        this.customDatalist = document.createElement('div');
        this.customDatalist.className = 'datalist-dropdown';
        document.body.appendChild(this.customDatalist);
        this.positionDatalist();
        window.addEventListener('resize', () => this.positionDatalist());
    }

    positionDatalist() {
        const inputRect = this.domElements.inputField.getBoundingClientRect();
        this.customDatalist.style.width = `${inputRect.width}px`;
        this.customDatalist.style.left = `${inputRect.left + window.scrollX}px`;
        this.customDatalist.style.top = `${inputRect.bottom + window.scrollY}px`;
    }

    updateDatalist(input = '') {
        const normalizedInput = input.toLowerCase();
        const filteredChars = this.availableCharacters
            .filter(c => c.character.toLowerCase().includes(normalizedInput));
        
        this.customDatalist.innerHTML = filteredChars
            .map(c => {
                const highlightedName = this.highlightMatch(c.character, normalizedInput);
                return `<div class="datalist-option" data-value="${c.character}">
                    ${highlightedName}
                </div>`;
            })
            .join('');
        
        this.customDatalist.querySelectorAll('.datalist-option').forEach(option => {
            option.addEventListener('click', () => {
                const characterName = option.dataset.value;
                const character = this.handleGuess(characterName);
                if (character) {
                    this.addAttempt(character);
                    this.domElements.inputField.value = '';
                    this.hideDatalist();
                }
            });
        });
        
        filteredChars.length > 0 ? this.showDatalist() : this.hideDatalist();
    }

    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${this.escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    showDatalist() {
        this.positionDatalist();
        this.customDatalist.style.display = 'block';
        this.customDatalist.style.opacity = '1';
    }

    hideDatalist() {
        this.customDatalist.style.opacity = '0';
        setTimeout(() => {
            this.customDatalist.style.display = 'none';
        }, 200);
    }

    setupModalHandlers() {
        const { rulesBtn, rulesModal, winModal, playAgainBtn } = this.domElements;

        rulesBtn.onclick = () => rulesModal.style.display = "block";
        rulesModal.querySelector('.close').onclick = () => rulesModal.style.display = "none";
        winModal.querySelector('.close').onclick = () => this.closeWinModal();
        playAgainBtn.onclick = () => location.reload();

        window.onclick = (event) => {
            if (event.target === rulesModal) rulesModal.style.display = "none";
            if (event.target === winModal) this.closeWinModal();
        };
    }

    initEventListeners() {
        const { inputField } = this.domElements;

        inputField.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const input = e.target.value.trim();
                if (input) {
                    const character = this.handleGuess(input);
                    if (character) {
                        this.addAttempt(character);
                        e.target.value = '';
                        this.hideDatalist();
                    }
                }
            }
        });

        inputField.addEventListener('input', (e) => {
            this.updateDatalist(e.target.value);
        });

        inputField.addEventListener('blur', () => {
            setTimeout(() => this.hideDatalist(), 200);
        });
    }

    handleGuess(input) {
        const normalizedInput = input.toLowerCase();

        if (this.guessedCharacters.has(normalizedInput)) {
            this.showMessage('Этот персонаж уже был!', 'error');
            return null;
        }

        const character = this.availableCharacters.find(
            c => c.character.toLowerCase() === normalizedInput
        );

        if (!character) {
            this.showMessage('Персонаж не найден!', 'error');
            return null;
        }

        return character;
    }

    addAttempt(character) {
        if (this.gameOver) return;

        this.attempts.push(character);
        this.guessedCharacters.add(character.character.toLowerCase());
        this.removeCharacterFromAvailable(character.character);

        this.domElements.attemptsContainer.prepend(
            this.createCharacterRow(character)
        );

        if (character.character === this.secretCharacter.character) {
            this.endGame(true);
        }
    }

    createCharacterRow(character) {
        const row = document.createElement('div');
        row.className = 'character-row';

        // Иконка персонажа
        const iconCell = document.createElement('div');
        iconCell.className = 'character-icon';
        const iconImg = document.createElement('img');
        iconImg.src = `assets/icons/${character.character.toLowerCase().replace(/ /g, '_')}.png`;
        iconImg.alt = character.character;
        iconImg.onerror = () => {
            iconImg.remove();
            iconCell.textContent = character.character;
        };
        iconCell.appendChild(iconImg);
        row.appendChild(iconCell);

        // Характеристики
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

    getColorClass(key, value) {
        if (key === 'start') {
            const secretStart = this.secretCharacter.start;
            
            // Проверяем полное совпадение (зеленый)
            const isExactMatch = 
                secretStart.length === value.length && 
                value.every(item => secretStart.includes(item));
            
            // Проверяем хотя бы одно совпадение (желтый)
            const hasAnyMatch = 
                value.some(item => secretStart.includes(item));
            
            return isExactMatch ? 'green' : hasAnyMatch ? 'yellow' : 'red';
        }
        return this.secretCharacter[key] === value ? 'green' : 'red';
    }

    endGame(isWin) {
        this.gameOver = true;
        this.domElements.inputField.disabled = true;
        this.domElements.inputField.placeholder = isWin ? "Вы победили!" : "Игра окончена";
        
        if (isWin) {
            this.showWinModal();
            document.querySelector('.play-again-container').style.display = 'block';
        }
    }

    showWinModal() {
        const { winModal } = this.domElements;
        const title = winModal.querySelector('.win-title');
        const attempts = winModal.querySelector('.attempts-count');
        const characterInfo = winModal.querySelector('.character-info');
        
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
        
        winModal.style.display = "block";
    }

    removeCharacterFromAvailable(name) {
        this.availableCharacters = this.availableCharacters.filter(
            char => char.character.toLowerCase() !== name.toLowerCase()
        );
        this.updateDatalist(this.domElements.inputField.value);
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

    closeWinModal() {
        this.domElements.winModal.style.display = 'none';
    }
}

// Запуск игры
document.addEventListener('DOMContentLoaded', () => {
    window.game = new IsaacleGame();
});