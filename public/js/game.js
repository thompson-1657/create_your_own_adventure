$(document).ready(() => {
    const buttonInput = $("#buttonInput")
    const storyInput = $("#storyInput")

    $("#start").click(function () {
        $.get('/api/story/1', function (data) {
          fillStory(1)
          choice(1)
        })
      })

    buttonleft.click(function () {
        let button1 = $(this).data("value")
        console.log(button1);
        $.get(`/api/story/${button1}`, fillStory(button1))
        choice(button1)
    })
    buttonright.click(function () {
        let button2 = $(this).data("value")
        $.get(`/api/story/${button2}`, fillStory(button2))
        choice(button2)
    })

    function choice(param) {
        $.get(`/api/story/${param}`, (data)=>{
            buttonInput.empty()
            const buttonGroup = `<button id="leftButton" data-value="${data.leftChoiceId}">
            ${data.leftChoice}</button>
            <button id="rightButton" data-value="${data.rightChoiceId}">
            ${data.rightChoice}</button>`

            buttonInput.append(buttonGroup)
            let buttonleft = $("#leftButton")
            let buttonright = $("#rightButton")

            buttonleft.click(function () {
                let button1 = $(this).data("value")
                $.get(`/api/story/${button1}`, fillStory(button1))
                choice(button1)
            })
            buttonright.click(function () {
                let button2 = $(this).data("value")
                $.get(`/api/story/${button2}`, fillStory(button2))
                choice(button2)
            })
        }
        )
    }


    function fillStory(buttons) {
        $.get(`/api/story/${buttons}`, (data) => {
            storyBit = `<p> ${data.narrative} </p>`
            storyInput.append(storyBit)
        })
    }
    
})
