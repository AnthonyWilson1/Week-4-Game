$(document).ready(function(){

    var win = 0
    var loss = 0
    var yourScore = 0
    var number=0;
    var gem1=0;
    var gem2=0;
    var gem3=0;
    var gem4=0;



    function randomNumber (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        return number
    }

    function randomNumberG1 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        gem1 = number
    }

    function randomNumberG2 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        gem2 = number
    }

    function randomNumberG3 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        gem3 = number
    }

    function randomNumberG4 (min,max) {
        var number = Math.floor(Math.random() * (max - min) ) + min;    
        gem4 = number
    }
    
    function reset() {
        number = randomNumber(19,120);
        yourScore=0;
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        $("#Your-Score").empty();
        $("#Your-Score").html(yourScore);
        addRandom();

    };

    function addWin() {
        win ++;
        $("#Win-Counter").empty();
        $("#Win-Counter").html(win);
    };

    function addLoss() {
        loss ++;
        $("#Loss-Counter").empty();
        $("#Loss-Counter").html(loss);
    };

    function addScore () {
       $("#Your-Score").empty();
       $("#Your-Score").html(yourScore);
    };

    function addRandom () {
        number = randomNumber(19,120)
        $("#Random-Number").html(number);
    };

    function startGame () {
        //randomNumber(19,120);
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        addScore();
        addRandom();
    };

    function condition () {
        if (yourScore === number) {
        console.log("You Win");
        addWin();
        reset();
    } else if (yourScore > number) {
        console.log("You Lose");
        addLoss();
        reset();
        }
    };

    startGame();

    $("#gem1").click(function() {
        yourScore += gem1;
        $("#Your-Score").empty();
        $("#Your-Score").html(yourScore);
        condition();
        console.log(yourScore);
        console.log(number);
        console.log(gem1);
    });

    $("#gem2").click(function() {
        yourScore += gem2;
        $("#Your-Score").empty();
        $("#Your-Score").html(yourScore);
        condition();
        console.log(yourScore);
        console.log(number);
        console.log(gem2);
    });

    $("#gem3").click(function() {
        yourScore += gem3;
        $("#Your-Score").empty();
        $("#Your-Score").html(yourScore);
        condition();
        console.log(yourScore);
        console.log(number);
        console.log(gem3);
    });

    $("#gem4").click(function() {
        yourScore += gem4;
        $("#Your-Score").empty();
        $("#Your-Score").html(yourScore);
        condition();
        console.log(yourScore);
        console.log(number);
        console.log(gem4);
    });

   
});