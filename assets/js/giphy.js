// Declaring Global Variables
// -------------------------
// -------------------------

var topics = ["golden retriever", "beach", "georgia", "dolly parton", "boats"];

var userSearch = "";

//creating click event to start entire app
$("button").on("click", function() {

    console.log("Button clicked");

//for whichever topic button the user clicks
topic = $(this).attr("topic")

var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&api_key=U0Q0VCprObfzUgrS9wtYTFyYLlX0NZL2&limit=5";

//calling AJAX
$.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {

      console.log(response.url);

    });





// ends entire function
});