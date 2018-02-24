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


    $("#gem1").click(function() {
        //$("#gem1").attr("value",gem1);
        //console.log($("#gem1").attr("value"));
        yourScore += gem1;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        console.log(yourScore);
        console.log(gem1);
    });

    $("#gem2").click(function() {
        //$("#gem2").attr("value",gem2);
        //console.log($("#gem2").attr("value"));
        yourScore += gem2;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        console.log(yourScore);
        console.log(gem2);
    });

    $("#gem3").click(function() {
        //$("#gem3").attr("value",gem3);
        //console.log($("#gem3").attr("value"));
        yourScore += gem3;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        console.log(yourScore);
        console.log(gem3);
    });

    $("#gem4").click(function() {
        //$("#gem4").attr("value",gem4);
        //console.log($("#gem4").attr("value"));
        yourScore += gem4;
        $("#Your-Score").empty();
        $("#Your-Score").append(yourScore);
        console.log(yourScore);
        console.log(gem4);
    });
    


    function reset() {
        randomNumber(19,120);
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        var yourScore = 0
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

    function startGame () {
        randomNumber(19,120);
        randomNumberG1(1,12);
        randomNumberG2(1,12);
        randomNumberG3(1,12);
        randomNumberG4(1,12);
        addScore();
        addRandom();
    }

    function addScore () {
       $("#Your-Score").empty();
       $("#Your-Score").append(yourScore);
    };

    function addRandom () {
        $("#Random-Number").append(randomNumber);
    };

    startGame();

    console.log(randomNumber);
    console.log(yourScore);

    if (yourScore === randomNumber) {
        addWin();
        reset();
    } else if (yourScore > randomNumber) {
        addLoss();
        reset();
        }
    

    









   

});