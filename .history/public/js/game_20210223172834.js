$(document.ready(() => {
    $.get("/api/story")
    function choice(stories) {
        var parsedJSON = JSON.parse(stories.choice)
        for (var i = 0; i <parsedJSON.length; i++) {
            alert(parsedJSON[i].Id)
        }
    }
    
    
}))