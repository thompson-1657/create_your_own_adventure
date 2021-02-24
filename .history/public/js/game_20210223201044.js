$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {
            console.log("this is gamejs " + data.narrative)
            let storyBit = `<p> ${data.narrative} </p>`
            storyInput.append(storyBit)
        }
        fillStory()
    
        buttonInput.on("click", )
        function choice() {
            // console.log(data.choice)
            // console.log(data.choice.id)
            console.log(data.leftChoice)
            // var parsedJSON = JSON.parse(data.choice)
            // console.log(parsedJSON)
            // for (var i = 0; i < parsedJSON.length; i++) {
            //     alert(parsedJSON[i].Id)
            //     buttonInput.append()
            // }
        }
        choice()
    

    })
    
})
