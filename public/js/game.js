$(document).ready(() => {
    const buttonInput = $("#buttonInput")
    const storyInput = $("#storyInput")

    $("#start").click(function () {
        $.get('/api/story/1', function (data) {
            fillStory(1)
            choice(1)
        })
    })


    function choice(param) {
        $.get(`/api/story/${param}`, (data) => {
            buttonInput.empty()
            let buttonleft;
            let buttonright;

            if (data.leftChoiceId && data.rightChoiceId) {
                const buttonGroup = `<button id="leftButton" data-value="${data.leftChoiceId}">
                ${data.leftChoice}</button>
                <button id="rightButton" data-value="${data.rightChoiceId}">
                ${data.rightChoice}</button>`
                buttonInput.append(buttonGroup)
                buttonleft = $("#leftButton")
                buttonright = $("#rightButton")
            } else if (data.leftChoiceId) {
                const buttonGroup = `<button id="leftButton" data-value="${data.leftChoiceId}">
                ${data.leftChoice}`
                buttonInput.append(buttonGroup)
                buttonleft = $("#leftButton")
            } else if (data.rightChoiceId) {
                const buttonGroup = `<button id="rightButton" data-value="${data.rightChoiceId}">
                ${data.rightChoice}`
                buttonInput.append(buttonGroup)
                buttonright = $("#rightButton")
            }

            if (buttonleft) {
                buttonleft.click(function () {
                    let button1 = $(this).data("value")
                    $.get(`/api/story/${button1}`, fillStory(button1))
                    choice(button1)
                })
            }
            if (buttonright) {
                buttonright.click(function () {
                    let button2 = $(this).data("value")
                    $.get(`/api/story/${button2}`, fillStory(button2))
                    choice(button2)
                })
            }})
    }


    function fillStory(buttons) {
        $.get(`/api/story/${buttons}`, (data) => {
            storyBit = `<p> ${data.narrative} </p>`
            storyInput.append(storyBit)
        })
    }
})
