alert('You have 10 guesses.guess is 1-10');
var answer = 3;
var guess = prompt("what is your guess?");
for(i=0;i<10;i++){
if (answer == guess){
    alert("your guess correctly congratulations");
    break;
}else{
    guess = prompt("Please Try Agian");
}
}