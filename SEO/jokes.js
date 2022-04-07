
$(document).ready(function(){

    var limit = 30;
    var theJoke;
    var randomNumber;

    $(".joke").click(function () {
        randomNumber = Math.trunc(Math.random()*30) + 1;
        console.log(randomNumber);
    });

    $(".home").click(
        function () {
            window.open('index.html',"_self");
        });


$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
    headers: { 'X-Api-Key': 'BOenUi3O8jqrJsmqcMr+Hg==x9tp8koWakotRgGE'},
    contentType: 'application/json',
    success: function(result) {

        $(".joke").click(function () {
            randomNumber = Math.trunc(Math.random()*30) + 1;
            // console.log(randomNumber);
            theJoke = result[randomNumber].joke;
            $(".text-display").text(theJoke).toString();
        });
        //  console.log(result[0].joke);

     
        

            // $(".text-display").text(result.joke)
            // console.log("Click");

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

});
   


