const textElement = document.getElementById('text');
const content = "This is the text content you want to spell out. Replace this with your desired text content."; // Replace with your desired content
const words = content.split(' ');
let currentWordIndex = 0;
let currentLetterIndex = 0;
let delay = 150;

function spellOutText() {
  if (currentWordIndex >= words.length) {
    return;
  }

  const currentWord = words[currentWordIndex];
  const currentLetter = currentWord[currentLetterIndex];

  textElement.innerHTML += currentLetter;

  if (currentLetterIndex < currentWord.length - 1) {
    currentLetterIndex++;
  } else {
    currentLetterIndex = 0;
    currentWordIndex++;
    textElement.innerHTML += ' ';
  }

  if (currentWordIndex < words.length) {
    setTimeout(spellOutText, delay);
  }
}

spellOutText();
