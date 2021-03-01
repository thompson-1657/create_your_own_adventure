$(document).ready(() => {
  //global variables
  const buttonInput = $("#buttonInput")
  const storyInput = $("#storyInput")
  const exp = $(".exp")
  const level = $(".level")
  const name = $(".name")
  const invContent = $('.itemList')
  invContent.empty()
  // const hp = $(".hp")
  // const mp = $(".mp")
  // const htmlSkill = $(".html")
  // const cssSkill = $(".css")
  // const javaScriptskill = $(".javascript")

  //when the start button is clicked it will fill the first block of the story in
  $('#start').click(function () {
    $.get('/api/story/1', function (data) {
      fillStory(1)
      choice(1)
    })
  })

  //routes user choice based on the story
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
        buttonleft = $('#leftButton')
        buttonright = $('#rightButton')
      } else if (data.leftChoiceId) {
        const buttonGroup = `<button id="leftButton" data-value="${data.leftChoiceId}">
                ${data.leftChoice}`
        buttonInput.append(buttonGroup)
        buttonleft = $('#leftButton')
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
      }
    })
  }

  //displays the story buttons and based on the button it will give you an item or it will give you exp
  function fillStory(buttons) {
    $.get(`/api/story/${buttons}`, (data) => {
      storyBit = `<p> ${data.narrative} </p>`
      storyInput.append(storyBit)
      //updating the character exp for to fill character
      if (data.exp) {
        $.ajax({
          url: "/api/charexp",
          method: "PUT",
          data: {
            exp: data.exp
          }
        })
        fillCharacter()
      }
      //appends inventory data to the webpage
      if (data.item) {
        const itemList = `
                <li id="itemNoHover"> ${data.item} </li>
                `
        invContent.append(itemList)
      }
    })
  }

  //based on character xp your character will level up
  function fillCharacter() {
    $.get("api/character", function (status) {
      exp.empty()
      level.empty()
      name.empty()
      exp.append(status[0].exp)
      if (status[0].exp >= 300) {
        level.append(7)
      } else if (status[0].exp >= 250) {
        level.append(6)
      } else if (status[0].exp >= 200) {
        level.append(5)
      } else if (status[0].exp >= 150) {
        level.append(4)
      } else if (status[0].exp >= 100) {
        level.append(3)
      } else if (status[0].exp >= 50) {
        level.append(2)
      }
      name.append(status[0].name)
    })
  }
  fillCharacter()
})