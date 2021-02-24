$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {
            storyInput.append(data.text)
        }
    
        function choice() {
            function choices() {
                var parsedJSON = JSON.parse(data.choice)
                for (var i = 0; i <parsedJSON.length; i++) {
                    alert(parsedJSON[i].Id)
                    buttonInput.append()
                }
            }
        }
    

    })
    
})