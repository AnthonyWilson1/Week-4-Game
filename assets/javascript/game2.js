$(document).ready(function(){

    function luke() {
        var heading = $("<p></p>").text("Luke-Skywalker");
        var img = ('<img src="assets/images/luke-skywalker.jpeg">');
        var paragraph = $("<p></p>").text(120);
        $("#chosenCharr").prepend(heading,img,paragraph);
        $("img").addClass("img-fluid");
        $("#chosenCharr").addClass("four");
        $("#chosenCharr").addClass("text-center");
    };

    $("#luke").click(function(){
        $("#luke").remove();
        luke();
    });

    $("#luke").click(function(){
        $("#luke").remove();
    });

});