$(document).ready(function(){

    function luke() {
        var heading = $("<p></p>").text("Luke-Skywalker");
        var img = ('<img src="assets/images/luke-skywalker.jpeg">');
        var paragraph = $("<p></p>").text(120);
        $(".chosenChar").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function lukeE1() {
        var heading = $("<p></p>").text("Luke-Skywalker");
        var img = ('<img src="assets/images/luke-skywalker.jpeg">');
        var paragraph = $("<p></p>").text(120);
        $(".enemiesAvailOne").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    }
    function palp() {
        var heading = $("<p></p>").text("Emperor-Palpatine");
        var img = ('<img src="assets/images/Emperor-Palpatine.jpeg">');
        var paragraph = $("<p></p>").text(100);
        $(".chosenChar").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function palpE1() {
        var heading = $("<p></p>").text("Emperor-Palpatine");
        var img = ('<img src="assets/images/Emperor-Palpatine.jpeg">');
        var paragraph = $("<p></p>").text(100);
        $(".enemiesAvailOne").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function palpE2() {
        var heading = $("<p></p>").text("Emperor-Palpatine");
        var img = ('<img src="assets/images/Emperor-Palpatine.jpeg">');
        var paragraph = $("<p></p>").text(100);
        $(".enemiesAvailTwo").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function maul() {
        var heading = $("<p></p>").text("Darth-Maul");
        var img = ('<img src="assets/images/Darth-Maul.jpeg">');
        var paragraph = $("<p></p>").text(150);
        $(".chosenChar").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function maulE2() {
        var heading = $("<p></p>").text("Darth-Maul");
        var img = ('<img src="assets/images/Darth-Maul.jpeg">');
        var paragraph = $("<p></p>").text(150);
        $(".enemiesAvailTwo").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function maulE3() {
        var heading = $("<p></p>").text("Darth-Maul");
        var img = ('<img src="assets/images/Darth-Maul.jpeg">');
        var paragraph = $("<p></p>").text(150);
        $(".enemiesAvailThree").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function sully() {
        var heading = $("<p></p>").text("Imperial-Sullist");
        var img = ('<img src="assets/images/Sullust_Imperial_Factory.jpg">');
        var paragraph = $("<p></p>").text(180);
        $(".chosenChar").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function sullyE3() {
        var heading = $("<p></p>").text("Imperial-Sullist");
        var img = ('<img src="assets/images/Sullust_Imperial_Factory.jpg">');
        var paragraph = $("<p></p>").text(180);
        $(".enemiesAvailThree").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };
    function palpDef() {
        var heading = $("<p></p>").text("Emperor-Palpatine");
        var img = ('<img src="assets/images/Emperor-Palpatine.jpeg">');
        var paragraph = $("<p></p>").text(100);
        $("#chosenDef").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
    };


    $("#luke").click(function(){
        $("#luke").remove();
        $("#palp").remove();
        $("#maul").remove();
        $("#sully").remove();
        luke();
        palpE1();
        maulE2();
        sullyE3();
        $("p").addClass("text-center")
        $("#chosenCharr").addClass("one");
        $(".enemiesAvailOne").addClass("four");
        $(".enemiesAvailTwo").addClass("four");
        $(".enemiesAvailThree").addClass("four");
        $(".two").css({'margin-top' : '0%'});
    });

    $("#palp").click(function(){
        $("#palp").remove();
        $("#luke").remove();
        $("#maul").remove();
        $("#sully").remove();
        palp();
        lukeE1();
        maulE2();
        sullyE3();
        $("p").addClass("text-center")
        $("#chosenCharr").addClass("one");
        $(".enemiesAvailOne").addClass("four");
        $(".enemiesAvailTwo").addClass("four");
        $(".enemiesAvailThree").addClass("four");
        $(".two").css({'margin-top' : '0%'});
    });

    $("#maul").click(function(){
        $("#maul").remove();
        $("#palp").remove();
        $("#luke").remove();
        $("#sully").remove();
        maul();
        lukeE1();
        palpE2();
        sullyE3();
        $("p").addClass("text-center")
        $("#chosenCharr").addClass("one");
        $(".enemiesAvailOne").addClass("four");
        $(".enemiesAvailTwo").addClass("four");
        $(".enemiesAvailThree").addClass("four");
        $(".two").css({'margin-top' : '0%'});
    });


    $("#sully").click(function(){
        $("#sully").remove();
        $("#maul").remove();
        $("#palp").remove();
        $("#luke").remove();
        sully();
        lukeE1();
        palpE2();
        maulE3();
        $("p").addClass("text-center")
        $("#chosenCharr").addClass("one");
        $(".enemiesAvailOne").addClass("four");
        $(".enemiesAvailTwo").addClass("four");
        $(".enemiesAvailThree").addClass("four");
        $(".two").css({'margin-top' : '0%'});
    });


    $("#availOne").click(function(){
        $("#availOne").remove();
        $("#filler").addClass("col")
        palpDef();
        $("#chosenDef").addClass("five")
        $("#chosenDef").addClass("text-center")
    });






});