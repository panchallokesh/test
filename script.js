const generateButton = document.getElementById('generate-button');
const randomNumberBox = document.getElementById('random-number-box');

generateButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    randomNumberBox.innerText = randomNumber;
    randomNumberBox.style.display = 'block';
});