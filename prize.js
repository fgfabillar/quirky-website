function displayElements() {
    document.body.style.backgroundColor = '#FFFFDD';
    var h1Element = document.createElement('h1');
    h1Element.textContent = "GUESS THE WORD";
    h1Element.style.color = '#D2DE32';
    h1Element.style.fontSize = '65px';
    h1Element.style.fontFamily = 'Dela Gothic One, sans-serif';
    document.getElementById('landingPage').appendChild(h1Element);

    var emojis = ['😄', '😁', '😆', '😂', '😊', '😍', '🥰', '😎'];
    var currentIndex = 0;

    function updateEmoji() {
        h1Element.textContent = "GUESS THE WORD " + emojis[currentIndex];
        currentIndex = (currentIndex + 1) % emojis.length;
    }

    updateEmoji();

    var intervalId = setInterval(updateEmoji, 1000);

    var h2Element = document.createElement('h2');
    h2Element.textContent = 'CONGRATULATIONS FOR WINNING THE GAME! 🎉';
    h2Element.style.fontSize = '50px';
    h2Element.style.color = '#61A3BA';
    h2Element.style.fontFamily = 'Lilita One, sans-serif';
    h2Element.style.marginTop = '10px';
    document.getElementById('landingPage').appendChild(h2Element);

    var img = document.createElement('img');
    img.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM1bWw4b3c4ejl5bWZocTJkNjE2b3l4bzBxZ3pkZ3hsZ2JpdHdzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PtfccZBHY2VBm/giphy.gif';
    img.style.width = '455px';
    img.style.height = '455px';

    document.getElementById('landingPage').appendChild(img);
}

displayElements();

function cashCreate() {
    const cash = document.createElement('div');
    cash.classList.add('cash');
    cash.innerText = "💵";
    cash.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(cash);

    setTimeout(() => {
        cash.remove();
    }, 5000);
}

window.onload = function() {
    cashCreate();
    setInterval(cashCreate, 300);
};
