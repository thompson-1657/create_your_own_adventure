$(document).ready(() => {
    $.get("/api/story", (data) => {
        const storyInput = $("#storyInput")
        const buttonInput = $("#buttonInput")
        
        function fillStory() {
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
    
    $.get("api/items", (item) => {
        function fillInventory() {
            console.log(item)
            // let inventory = `<p> ${data.name} </p>`
        }
        fillInventory()
    })
})
