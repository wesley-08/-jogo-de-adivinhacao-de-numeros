// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Selecionar os elementos HTML
const submitButton = document.getElementById('submit-button');
const userInput = document.getElementById('user-input');
const message = document.getElementById('message');

// Função que verifica o palpite do usuário
function checkGuess() {
    const userGuess = parseInt(userInput.value);
    if (isNaN(userGuess)) {
        message.textContent = 'Por favor, digite um número válido!';
        message.style.color = 'red';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Tente um número maior!';
        message.style.color = 'blue';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Tente um número menor!';
        message.style.color = 'blue';
    } else {
        message.textContent = 'Parabéns, você adivinhou o número!';
        message.style.color = 'green';
    }
}

// Adicionar um ouvinte de evento no botão
submitButton.addEventListener('click', checkGuess);
