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

    var h1rainbowEmojis = document.createElement('h1');
    h1rainbowEmojis.style.fontSize = '325px';
    h1rainbowEmojis.style.margin = '20px';
    h1rainbowEmojis.style.padding = '10px';
    document.getElementById('landingPage').appendChild(h1rainbowEmojis);

    var emojis2 = ['💚', '🩷', '💙', '💜', '💛', '🏳️‍🌈', '🌈'];
    var currentIndex2 = 0;

    function updateRainbowEmojis() {
        h1rainbowEmojis.textContent = emojis2[currentIndex2];
        currentIndex2 = (currentIndex2 + 1) % emojis2.length;
    }

    updateRainbowEmojis();

    var intervalId2 = setInterval(updateRainbowEmojis, 1000);

    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Type your answer';
    inputBox.id = 'guessInput';
    inputBox.style.marginTop = '20px';
    inputBox.style.marginBottom = '10px';
    inputBox.style.border = 'solid 1px gray';
    inputBox.style.borderRadius = '5px';
    inputBox.style.padding = '15px';
    inputBox.style.fontSize = '20px';
    inputBox.style.color = 'black';
    document.getElementById('landingPage').appendChild(inputBox);

    var submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submitButton';
    submitButton.style.marginTop = '20px';
    submitButton.style.padding = '10px 20px';
    submitButton.style.fontSize = '20px';
    submitButton.style.fontFamily = 'Bungee, sans-serif';
    submitButton.style.color = '#FFFFFF';
    submitButton.style.backgroundColor = '#EEC759';
    submitButton.style.borderRadius = '10px';
    submitButton.style.border = 'none';
    submitButton.style.cursor = 'pointer';
    document.getElementById('landingPage').appendChild(submitButton);

    document.getElementById('submitButton').addEventListener('click', function() {
        var guess = document.getElementById('guessInput').value.toLowerCase();
        if (guess === 'rainbow' || guess === 'color' || guess === 'colors') {
            var correctGifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHd0aGp4a2lycTlrd3ZwMmhncHRqa3JwYWhiY2l3cXZ0ZjRvODk1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4HodBpDmoMA5p9bG/giphy.gif';
            displayGifWithButton(correctGifUrl, 'Next');
        } else {
            var incorrectGifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2tlZWZxNjZlcmhqOXk3NHprbmdoajFpYXpjbHk0dGt6aGI5cjZ0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oI9JZafyqsXc1FcjK/giphy.gif';
            displayGifWithButton(incorrectGifUrl, 'Close');
        }
    });

    function displayGifWithButton(gifUrl, buttonText) {
        var container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';
        container.style.background = 'rgba(0, 0, 0, 0.5)';
        container.style.padding = '40px';
        container.style.borderRadius = '10px';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        container.style.zIndex = '9999';
        container.style.width = '500px';
        container.style.maxWidth = '100%';

        var gifImage = document.createElement('img');
        gifImage.src = gifUrl;
        gifImage.style.width = '500px';
        gifImage.style.height = '400px';
        gifImage.style.display = 'block';
        gifImage.style.margin = '0 auto';
        gifImage.style.marginBottom = '40px'; 
        container.appendChild(gifImage);

        var button = document.createElement('button');
        button.textContent = buttonText;
        button.style.marginTop = '20px';
        button.style.padding = '10px 30px';
        button.style.fontSize = '20px';
        button.style.fontFamily = 'Bungee, sans-serif';
        button.style.color = '#FFFFFF';
        button.style.backgroundColor = '#EEC759';
        button.style.borderRadius = '10px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.display = 'block';
        button.style.margin = '0 auto';
        container.appendChild(button);

        document.body.appendChild(container);

        button.addEventListener('click', function() {
            if (buttonText === 'Next') {
                window.location.href = "music.html";
            } else {
                document.body.removeChild(container);
            }
        });
    }
}

displayElements();

