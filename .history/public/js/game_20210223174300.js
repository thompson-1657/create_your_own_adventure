$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {
            storyInput.append()
        }
    
        function choice1() {
    
        }
    
        function choice2() {
    
        }
        // function for parsing choices of story
        // function choice(stories) {
        //     var parsedJSON = JSON.parse(stories.choice)
        //     for (var i = 0; i <parsedJSON.length; i++) {
        //         alert(parsedJSON[i].Id)
        //     }
        // }

    })
    
})