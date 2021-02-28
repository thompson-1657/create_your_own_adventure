$(document).ready(() => {
  const buttonInput = $("#buttonInput")
  const storyInput = $("#storyInput")
  const exp = $(".exp")
  const level = $(".level")
  const name = $(".name")
  // const hp = $(".hp")
  // const mp = $(".mp")
  // const htmlSkill = $(".html")
  // const cssSkill = $(".css")
  // const javaScriptskill = $(".javascript")

  $('#start').click(function () {
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

  function fillStory(buttons) {
    $.get(`/api/story/${buttons}`, (data) => {
      storyBit = `<p> ${data.narrative} </p>`
      storyInput.append(storyBit)
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
      if (data.item) {
        $.ajax({
          url: "/api/charitem",
          method: "PUT",
          data: {
            item: data.item
          }
        })
        fillInventory()
      }
    })
  }

  function fillInventory() {
    $.get('api/character', (char) => {
      console.log(char.item)
      for (i = 0; i < item.length; i++) {
        const itemList = `
                <li id="itemNoHover"> ${item[i].name} </li>
                <div id="itemHover"> ${item[i].description} </div>
                `
        $('.itemList').append(itemList)
      }
    })
  }
  fillInventory()

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

      const itemList = `
      <li id="itemNoHover"> ${status.item.name} </li>
      <div id="itemHover"> ${status.item.description} </div>
      `

      if (status[0].item === true) {
        $('.itemList').append(itemList)
      } else {
        console.log("Have not aquired")
      }
      // level.append(status[0].level)
      //  hp.append(status[0].hp)
      //  mp.append(status[0].mp)
      //  htmlSkill.append(status[0].HTML)
      //  cssSkill.append(status[0].CSS)
      //  javaScriptskill.append(status[0].JavaScript)
    })
  }
  fillCharacter()
})