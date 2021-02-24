$(document).ready(() => {
    $.get("/api/story")
    
    const storyInput = $("#storyInput")
    const buttonInput = $("#buttonInput")
    
    // function for parsing choices of story
    // function choice(stories) {
    //     var parsedJSON = JSON.parse(stories.choice)
    //     for (var i = 0; i <parsedJSON.length; i++) {
    //         alert(parsedJSON[i].Id)
    //     }
    // }
})