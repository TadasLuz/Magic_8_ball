var randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'As I see it, yes';
        break;
    case 2:
        eightBall = 'Reply hazy, try again';
        break;
    case 3:
        eightBall = 'Don\'t count on it';
        break;
    case 4:
        eightBall = 'It is decidedly so';
        break;
    case 5:
        eightBall = 'Most likely';
        break;
    case 6:
        eightBall = 'Ask again later';
        break;
    case 7:
        eightBall = 'My reply is no';
        break;
    case 8:
        eightBall = 'Without a doubt';
        break;
    case 9:
        eightBall = 'Outlook good';
        break;
    case 10:
        eightBall = 'Better not tell you now';
        break;
    case 11:
        eightBall = 'My sources say no';
        break;
    case 12:
        eightBall = 'Yes – definitely';
        break;
    case 13:
        eightBall = 'Yes';
        break;
    case 14:
        eightBall = 'Cannot predict now';
        break;
    case 15:
        eightBall = 'Outlook not so good';
        break;
    case 16:
        eightBall = 'You may rely on it';
        break;
    case 17:
        eightBall = 'Signs point to yes';
        break;
    case 18:
        eightBall = 'Concen- trate and ask again';
        break;
    default:
        eightBall = 'Very doubtful';
}

document.getElementById('answer').innerHTML = eightBall;