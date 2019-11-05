// Initial array of russias
var topics = ["vodka", "rhinestones", "putin", "adidas", "bears", "dash cams"];

// Function to displays GIFs when buttons are clicked
function displayrussiaGifs() {
  var buttonItem = $(this).attr("data-name");
  console.log("you clicked " + buttonItem);

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    buttonItem +
    "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(response);

    $("#gifs-appear-here").empty();

    for (var i = 0; i < results.length; i++) {
      // Making a new div
      var newDiv = $("<div>");

      // Getting the rating from the JSON object
      var rating = results[i].rating;
      console.log(rating);

      // Making a new paragraph for the rating
      var newP = $("<p>").text("Rating: " + rating);

      // Making a new img for the userInput gif
      var russiaImage = $("<img>");
      // Creating a new attribute (src) and setting it to the url
      russiaImage.attr("src", results[i].images.fixed_height_still.url);

      // Creating a new attribute (data-still) and setting it to the corresponding url
      russiaImage.attr("data-still", results[i].images.fixed_height_still.url);

      // Creating a new attribute (data-animate) and setting it to the corresponding url
      russiaImage.attr("data-animate", results[i].images.fixed_height.url);

      // Assigning attribute of 'animate' to the gif
      russiaImage.attr("data-state", "still");
      // Assigning class of .gif to the image
      russiaImage.addClass("gif");

      // prepending the rating and gif image to the new div that was created
      newDiv.prepend(newP);
      newDiv.prepend(russiaImage);

      // prepending the new div onto the page
      $("#gifs-appear-here").prepend(newDiv);
    }
  });
}

// Function to add new buttons to page
function renderButtons() {
  // Deleting the existing buttons prior to adding new buttons
  $("#buttons-view").empty();

  // Looping through the array of topics
  for (var i = 0; i < topics.length; i++) {
    var newBtn = $("<button>");
    // Adding a class
    newBtn.addClass("russia");
    // Adding a data-attribute with a value of the input at index i
    newBtn.attr("data-name", topics[i]);
    // Providing the button's text with a value of the input at index i
    newBtn.text(topics[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(newBtn);
  }
}

// This function handles events where Add Button is clicked
$("#add-russia").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  event.preventDefault();

  function clearInput() {
    // clears input area for next entry
    $("#russia-input").val("");
  }

  // This line will grab the text from the input box
  var userInput = $("#russia-input")
    .val()
    .trim();

  // The input from the textbox is then added to our array

  if (userInput.length > 1) {
    topics.push(userInput);

    // calling renderButtons which handles the processing of our array
    renderButtons();
    clearInput();
  } else {
    alert("Please enter a word longer than 1 character.");
    clearInput();
  }
});

function animateGif() {
  // On click let's see what the data state of the clicked gif is set to
  var state = $(this).attr("data-state");
  console.log(state);

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }

  // If state is equal to 'animate', then update the src attribute of this
  // image to it's data-still value and update the data-state attribute to 'still'
  else if (state === "animate") {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}

// Calling the renderButtons once to display the initial list of buttons
renderButtons();

// When buttons with a class of 'russia' are clicked, call the displayrussiaGifs function
$(document).on("click", ".russia", displayrussiaGifs);

// When gifs are clicked, call the animateGif function
$(document).on("click", ".gif", animateGif);
