$(document).ready(function() {

  //***api key  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=nhQIrl5Nl12UagwScORTRAWbWDrD6zpd */

  // var Cartoons =["Doug", "Hey Arnold", "Rugrats", ];
  //function for displaying cartoon gifs

  $(document).on("click", ".cartoon", function() {

    var cartoons = $(this).attr("data-cartoon");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoons + "&api_key=nhQIrl5Nl12UagwScORTRAWbWDrD6zpd";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
      // promises to get the result of ajax request
        var results=response.data

        $("#cartoon-pics").empty();


        //looping through array of The cartoons in a variable
        for (var i = 0; i < 10; i++){
                  
          var gifDiv=$("<div>");
          var rating=results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var cartoonImage = $("<img>");
          cartoonImage.attr("src", results[i].images.fixed_height_still.url);

          cartoonImage.attr({
            "data-state": "still",
            "data-still": results[i].images.fixed_height_still.url,
            "data-animate": results[i].images.fixed_height.url,
            class: "gif"
          });
          
          // This gives rating information before the gif image.
          gifDiv.prepend(p);
          gifDiv.prepend(cartoonImage);

          $("#cartoon-pics").prepend(gifDiv);
        }

    })
      
  })
  
})
