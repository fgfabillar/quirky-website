document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playButton').addEventListener('click', function() {
        document.getElementById('landingPage').style.transition = 'opacity 0.1s ease';
        document.getElementById('landingPage').style.opacity = '0';
        
        setTimeout(function() {
            document.body.style.backgroundColor = '#FFFFDD';
        
            var h1Element = document.querySelector('h1');
            h1Element.textContent = "GUESS THE WORD";
            h1Element.style.color = '#D2DE32';
            h1Element.style.fontSize = '65px';
            h1Element.style.fontFamily = 'Dela Gothic One, sans-serif';
        
    
            var emojis = ['😄', '😁', '😆', '😂', '😊', '😍', '🥰', '😎'];
            var currentIndex = 0;
        
            function updateEmoji() {
                h1Element.textContent = "GUESS THE WORD " + emojis[currentIndex];
                currentIndex = (currentIndex + 1) % emojis.length;
            }
        
            updateEmoji();
        
            var intervalId = setInterval(updateEmoji, 1000);
        
            var img = document.createElement('img');
            img.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTRuYm9oaWN2ZmJ1NTh1Z2o4MnBldTVuamhsZmJienh5dnJ6ZTJraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MFsqcBSoOKPbjtmvWz/giphy.gif';
            img.style.width = '430px';
            img.style.height = '430px';

            document.getElementById('landingPage').appendChild(img);
        
            var h2Element = document.createElement('h2');
            h2Element.textContent = 'ARE YOU READY TO WIN?';
            h2Element.style.fontSize = '45px';
            h2Element.style.color = '#61A3BA';
            h2Element.style.fontFamily = 'Lilita One, sans-serif';
            document.getElementById('landingPage').appendChild(h2Element);
        

            var yesButton = document.createElement('button');
            yesButton.textContent = 'YES!';
            yesButton.id = 'yesButton';
            
            yesButton.style.padding = '20px 50px';
            yesButton.style.fontSize = '20px';
            yesButton.style.fontFamily = 'Bungee, sans-serif';
            yesButton.style.color = '#FFFFFF';
            yesButton.style.backgroundColor = '#EEC759';
            yesButton.style.borderRadius = '10px';
            yesButton.style.border = 'none';
            yesButton.style.cursor = 'pointer';
            document.getElementById('landingPage').appendChild(yesButton);
        
            document.getElementById('playButton').style.display = 'none';
        
            document.getElementById('landingPage').style.opacity = '1';

            document.getElementById('yesButton').addEventListener('click', function() {
                document.getElementById('landingPage').style.transition = 'opacity 0.1s ease';
                document.getElementById('landingPage').style.opacity = '0';
                
                setTimeout(function() {
                    window.location.href = 'birthday.html';
                }, 500);
            });
        }, 500);
    });
});

/* Resources
    Memes:  https://giphy.com
    Coding: https://www.codecademy.com, https://www.w3schools.com, https://chat.openai.com, https://www.youtube.com

Submitted by:
    Fatima Grace Fabillar
    N01625596
    Creative Coding WDGD-150-0NB
    Tuesday 12:35-3:15PM */
