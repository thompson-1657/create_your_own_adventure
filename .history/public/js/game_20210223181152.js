$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {

            console.log("this is gamejs" + data)
            storyInput.append(data.text)
        }
    
        function choice() {
            var parsedJSON = JSON.parse(data.choice)
            for (var i = 0; i <parsedJSON.length; i++) {
                alert(parsedJSON[i].Id)
                buttonInput.append()
            }
        }
    

    })
    
})