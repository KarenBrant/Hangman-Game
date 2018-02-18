 var players = ["roger federer", "rafael nadal", "novak djokovic", "andy murray", "john isner", "serena williams", "venus williams", "sam querrey", "nick kyrgios", "grigor dimitrov", "caroline wozniaki", "jack sock", "maria sharapova", "angelique kerber", "taylor fritz", "jared donaldson", "frances tiafoe", "madison keys", "sloane stephens", "coco vandeweghe"];
 var wins = 0;
 var result = [];
 var wins = 0;
 var loss = 0;
 var name = [];
 var pickCount = 20;


document.onkeyup = function(event) {

    var computerPick = players[Math.floor(Math.random() * players.length)];
    console.log(computerPick);
    name = computerPick.split("");
    console.log ("name: " + name);

    // Print blanks, but I don't know why mine won't print
    for (var j=0; j<computerPick.length; j++) {
        result[j]="__";
        console.log("blanks: " + result[j]);
    }
    document.getElementById("fill").innerHTML = result.join(" ");

    var length = computerPick.length;
    var picks = [];

    // Pick letters as long as the word isn't filled up yet
    while (length>=0) {
        var letter = prompt ("Pick a letter");
        var pos = 0;
        console.log(letter);
        picks.push(letter);
        console.log(picks);
        // Puts letters in array to check to see if they've already been used.
        if (picks.indexOf(letter) != -1) {
            console.log("picks: " + picks);
        } else {
            picks.pop();
                prompt ("You already picked that letter. Click ok to pick a different letter.");
            }
        var pos = computerPick.indexOf(letter, pos);
        // Checks to see if the letter is in the word
        if (pos === -1) {
            prompt ("The letter " + letter + " is not in the word.")
        }           
        // Puts the letters into the blanks, but it ends 1 letter too soon
        for (var i=0; i<=computerPick.length; i++) {
            if (computerPick[i] === letter) {
                result[i]=letter;
                document.getElementById("fill").innerHTML = result.join(" ");
                length--;
                pickCount--;
                if (pickCount === 0) {
                    alert ("Sorry you lost.");
                    loss++;
                    document.getElementById("loss").innerHTML = "Losses: " + loss;
                }
                if (length === 0) {
                    alert ("Congratulations - you won!");
                    wins++;
                    document.getElementById("wins").innerHTML = " Wins: " + wins;
                }
            }

        }
    }               
}

