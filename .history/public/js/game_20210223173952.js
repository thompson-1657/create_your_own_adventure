$(document).ready(() => {
    $.get("/api/story")
    
    const storyInput = $("#storyInput")
    const choice1 = $("#buttonInput")
    const choice2 = $("#buttonInput")
    
    // function for parsing choices of story
    // function choice(stories) {
    //     var parsedJSON = JSON.parse(stories.choice)
    //     for (var i = 0; i <parsedJSON.length; i++) {
    //         alert(parsedJSON[i].Id)
    //     }
    // }
})