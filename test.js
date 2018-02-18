var players = ["Roger Federer", "Rafael Nadal", "Nadal Djokovic", "Andy Murray", "John Isner", "Serena Williams", "Venus Williams", "Sam Querrey", "Nick Kyrgios", "Grigor Dimitrov", "Caroline Wozniaki", "Jack Sock", "Maria Sharapova", "Angelique Kerber", "Taylor Fritz", "Jared Donaldson", "Frances Tiafoe", "Madison Keys", "Sloane Stephens", "Coco Vandeweghe"];
var wins = 0;


document.getElementById("start").addEventListener("keyup", startGame);

function startGame() {
    var userGuess = event.key;
    console.log(userGuess);
}
 
    // Determines which key was pressed.
// if (userGuess != "") {
//     var computerGuess = players[Math.floor(Math.random() * players.length)];
//     console.log('Move on');
//     function chooseLetter(event) {
//       console.log(event.target.innerText);
// }
// function createLetters() {
//     var wrapper = document.getElementById('letters');
//     for (var j=65; j<91; j++) {
//         var btn = document.createElement('button');
//         btn.innerText = String.fromCharCode(i);
//         wrapper.appendChild(btn);
//         var choice = btn.addEventListener ('click', chooseLetter);
//     }
// }
// var n = computerGuess.indexOf(choice);
// }