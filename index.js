// dice one value

var dice1Number = Math.random();
dice1Number = (dice1Number * 5) +1
dice1Number = Math.round(dice1Number); 
console.log(dice1Number);

// dice two value

var dice2Number = Math.random();
dice2Number = (dice2Number * 5) +1
dice2Number = Math.round(dice2Number); 
console.log(dice2Number);

// var diceDisplay = document.getElementsByClassName("dice1");

            // dice one distribution
    if (dice1Number == 1) {
        document.getElementsByClassName("dice11")[0].style.display = 'block';
    // document.querySelector("img").classList.add("dice1")
}
    else if(dice1Number == 2){
        document.getElementsByClassName("dice12")[0].style.display = 'block';
    }
    else if(dice1Number == 3){
        document.getElementsByClassName("dice13")[0].style.display = 'block';
    }
    else if(dice1Number == 4){
        document.getElementsByClassName("dice14")[0].style.display = 'block';
    }
    else if(dice1Number == 5){
        document.getElementsByClassName("dice15")[0].style.display = 'block';
    }
    else if(dice1Number == 6){
        document.getElementsByClassName("dice16")[0].style.display = 'block';
    }
    else {
    alert(dice1Number)
}

            // dice one distribution

    if (dice2Number == 1) {
        document.getElementsByClassName("dice21")[0].style.display = 'block';
}
    else if(dice2Number == 2){
        document.getElementsByClassName("dice22")[0].style.display = 'block';
    }
    else if(dice2Number == 3){
        document.getElementsByClassName("dice23")[0].style.display = 'block';
    }
    else if(dice2Number == 4){
        document.getElementsByClassName("dice24")[0].style.display = 'block';
    }
    else if(dice2Number == 5){
        document.getElementsByClassName("dice25")[0].style.display = 'block';
    }
    else if(dice2Number == 6){
        document.getElementsByClassName("dice26")[0].style.display = 'block';
    }
    else {
    alert(dice2Number)
}

        // winner
if (dice1Number > dice2Number) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins"
}
    else if(dice2Number > dice1Number){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"       
    }
    else if(dice1Number == dice2Number){
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩"       
    }
 else {
    alert("player two wins")
}
