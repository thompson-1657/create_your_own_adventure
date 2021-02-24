$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {
            console.log("this is gamejs" + data.text)
            let storyBit = `<p> ${data.text} </p>`
            storyInput.append(storyBit)
        }
        fillStory()
    
        buttonInput.on("click", )
        function choice() {
            console.log(data.choice)
            var parsedJSON = JSON.parse(data.choice)
            for (var i = 0; i < parsedJSON.length; i++) {
                alert(parsedJSON[i].Id)
                buttonInput.append()
            }
        }
    

    })
    
})
