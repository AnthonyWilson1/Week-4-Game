$(document).ready(function(){

    var win = 0
    var loss = 0
    var yourScore = 0


    function randomNumber (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return randomNumber = number
    }

    function randomNumberG1 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return gem1 = number
    }

    function randomNumberG2 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return gem2 = number
    }

    function randomNumberG3 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return gem3 = number
    }

    function randomNumberG4 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return gem4 = number
    }
    
    function reset() {
        randomNumber(19,120);
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        addRandom();

    };

    function addWin() {
        win ++;
        $("#Win-Counter").empty();
        $("#Win-Counter").append(win);
    };

    function addLoss() {
        loss ++;
        $("#Loss-Counter").empty();
        $("#Loss-Counter").append(loss);
    };

    function addScore () {
       $("#Your-Score").empty();
       $("#Your-Score").append(yourScore);
    };

    function addRandom () {
        $("#Random-Number").append(randomNumber);
    };

    function startGame () {
        randomNumber(19,120);
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        addScore();
        addRandom();
    };

    function condition () {
        if (yourScore === randomNumber) {
        console.log("You Win");
        addWin();
        reset();
    } else if (yourScore > randomNumber) {
        console.log("You Lose");
        addLoss();
        reset();
        }
    };

    startGame();

    $("#gem1").click(function() {
        yourScore += gem1;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        condition();
        console.log(yourScore);
        console.log(gem1);
    });

    $("#gem2").click(function() {
        yourScore += gem2;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        condition();
        console.log(yourScore);
        console.log(gem2);
    });

    $("#gem3").click(function() {
        yourScore += gem3;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        condition();
        console.log(yourScore);
        console.log(gem3);
    });

    $("#gem4").click(function() {
        yourScore += gem4;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        condition();
        console.log(yourScore);
        console.log(gem4);
    });

   
});