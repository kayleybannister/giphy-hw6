// Declaring Global Variables
// -------------------------
// -------------------------

var topics = ["golden retriever", "beach", "georgia", "dolly parton", "boats"];

var userSearch = "";

var apiKey = "U0Q0VCprObfzUgrS9wtYTFyYLlX0NZL2";

var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topics || userSearch + "&rating=g&api_key=" + apiKey + "&limit=5";

//calling AJAX
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);

});