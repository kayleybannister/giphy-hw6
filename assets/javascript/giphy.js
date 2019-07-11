        var topics = ["golden retriever", "beach", "georgia bulldogs", "dolly parton", "boats"];

        //creating function to display buttons on page
        function renderButtons(){

            $("#buttons").empty();

            // assigns each topic to a button
            for (var i = 0; i < topics.length; i++) 
                {
                    $("#buttons").append("<button data-type>" + topics[i] + "</button>");
                };
        };

        //need to create a function that takes the user's input for the search
        //and applies that word(s) to the queryUrl variable
        $("#submit").on("click", searchButton);

        function searchButton(event) {
            event.preventDefault();
            topics.push($("#add-button").val().trim());
            renderButtons();
        }

        //need a function to pause and animate each gif that is clicked on

        //calling the renderButtons function
        renderButtons();

        $(document).on("click", "img", handleImgClick);

        function handleImgClick() {
            $(this).siblings("img").show();
            $(this).hide();
        }

        //whenever a button is clicked, the gifs for that topic should be displayed
        $(document).on("click", "button", function() {

        var topic = $(this).html();
        console.log(topic + " button clicked");

        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=g&api_key=U0Q0VCprObfzUgrS9wtYTFyYLlX0NZL2&limit=10";

        //calling AJAX
        $.ajax({
        url: queryUrl,
        method: "GET"
        }).then(function(response) {

            console.log(response.data);

            var results = response.data;

            for (var i = 0; i < results.length; i++)
            {

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var gif1 = $("<img>");
                gif1.attr("src", results[i].images.fixed_height.url);

                var gif2 = $("<img>");
                gif2.attr("src", results[i].images.fixed_height_still.url);
                gif2.css("display", "none");

                var gifDiv = $("<div>");

                gifDiv.prepend(p, gif1, gif2);
                $(".gifs").prepend(gifDiv);
                
            }

          });

        //ends on click function  
        });