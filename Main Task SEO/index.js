$(document).ready(function () {

    $(".card-key").hide();


    $(".move-button").click(
        function () {
            console.log("clicked...waiting...");
            $(".card-key").show();
            $(".card-key").toggleClass("card-keyMove");
            $(".card-tag").toggleClass("card-tagGood");
           
                setTimeout(myURL, 3000);
                function myURL(){
                   window.open('pages/jokes.html',"_self");
                }
        });

});