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
