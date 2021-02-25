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
            buttonInput.empty()
            console.log(data.leftChoiceId)
            console.log(data.leftChoice)
            console.log(data.rightChoice)
            console.log(data.rightChoiceId)
            const buttonGroup = `<button data-value="${data.leftChoiceId}">${data.leftChoice}</button>
    <button data-value="${data.rightChoiceId}">${data.rightChoice}</button>`
            buttonInput.append(buttonGroup)
        }
        choice()
    })
    
    $.get("api/items", (data) => {

        function fillInventory() {
            console.log("this is gamejs " + data)
            let storyBit = `<p> ${data.narrative} </p>`
            storyInput.append(storyBit)
        }
    })
})
