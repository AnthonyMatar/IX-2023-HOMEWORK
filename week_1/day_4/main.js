let guess = document.getElementById('guess');
let expl = document.getElementById('explanation');
let correct = document.getElementById("right-wrong");
let hint = document.getElementById('second-hint');
let nextButton1 = document.getElementById('next-button');
let index = 0;
let flag = false;
let correctFlag = false;

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let movieExplanation = movies[index].explanation;
let movieAnswer = movies[index].title;
let movieHint = movies[index].hint;

expl.innerHTML = movieExplanation;

   function reset(){
    if(index >= 10){
        correct.innerHTML = "Congrats! You got them all right. Refresh to restart.";
        expl.innerHTML = "You are a genius my friend";
        movieHint = "The only hint you need is your witts";
    }
    else{
        index++;
        movieExplanation = movies[index].explanation;
        movieAnswer = movies[index].title;
        movieHint = movies[index].hint;
        expl.innerHTML = movieExplanation;
        hint.innerHTML = '';
        correct.innerHTML='';
        correctFlag = false;
        nextButton1.innerHTML = "This button does nothing"
    }
}


   
function submitGuess(){
    guessCheck();
    guess.value = '';
    hint.value = movieHint;
}

function guessCheck(){
    if(guess.value == movieAnswer){
        correct.innerHTML = "Correct!";
        explanation.innerHTML = '';
        correctFlag = true;
        nextButton1.innerHTML = "Congrats! Click this button for the next movie."
    }
    else{
        correct.innerHTML = "Incorrect! Try again.";
    }
}

function showHint(){
    if(flag == false){
        hint.innerHTML = movieHint;
        flag = true;
    }
    else{
        hint.innerHTML = '';
        flag = false;
    }
}

function nextButton(){
    if(correctFlag){
        reset();
    }
}
