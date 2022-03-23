$(document).ready(function () {

    $(".card-key").hide();


    $(".card-tag").click(
        function () {
            console.log("clicked...waiting...");
            $(".card-key").show();
            $(".card-key").toggleClass("card-keyMove");
            $(".card-tag").toggleClass("card-tagGood");
           
                setTimeout(myURL, 3000);
                function myURL(){
                   window.open('/jokes.html',"_self");
                }
        });

        $("#review").click(
            function () {
                window.open('form.html',"_self");
            });

});