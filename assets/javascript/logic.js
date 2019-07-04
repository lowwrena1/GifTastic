var Cartoons =["Doug", "Hey Arnold", "Rugrats", ];
//function for displaying cartoon gifs
function rendButtons() {
    //deleting the cartoon buttons prior to adding new cartoon buttons
    $("#buttons-view").empty();

    //looping through array of The cartoons in a variable
    for (var i =0; i< Cartoons.length; i++){
        var a =$("<button>");
        a.addClass("cartoon");
        a.attr("data-name", cartoons[i]);
        a.text(movies[i]);
        // adding the button to the html
    $("#buttons-view").append(a);
    }
}

//this function handles events where one button is clicked
$("#add-cartoon").on("click", function(event){
    //prevents formm from trying to submit itself.
    //user can hit enter instead of clicking the button if they want
    event.preventDefault();
    //this line will grab the text from the input box
    var cartoon = $("#cartoon-input").val().trim();
    //the cartoon is now added to our array
    cartoons.push(movie);
    //calling renderButtons which handle the processing of our movie array
    renderButtons();
});
//calling the render buttons function at least once to display the intial list of movies
// Event listener for our user button. ***name isn't 
    $("#userButtons").on("click", function() {
        // Storing our giphy API URL for a random cat image
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=nhQIrl5Nl12UagwScORTRAWbWDrD6zpd";
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        });
   
      // After the data from the AJAX request comes back
      then(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
        // Creating and storing an image tag
        var cartoonImage = $("<img>");
        // Setting the cartImage src attribute to imageUrl
        cartoonImage.attr("src", imageUrl);
        cartoonImage.attr("alt", "cart image");
        // Prepending the cartImage to the images div
        $("#images").prepend(cartImage);
      });
    });

