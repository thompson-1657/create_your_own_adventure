$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

// This is the post routes to both tables.
  // $.post("/api/character", data)
  // $.post("/api/character", data)


// get information from mainStory table database
  $.get("/api/story").then(story => {
    console.log(story)
  });

  // get information from character table database
  $.get("/api/character").then(character => {
    console.log(character)
  });


});
