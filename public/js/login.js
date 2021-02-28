$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };


    if (!userData.email){
      console.log("wrong email")
      $('#signUpEmail-error').empty()
      function validEmail() {
      $('#signUpEmail-error').append('<p>Must enter a valid email.</p>')
      }
      validEmail()
      return
      }else if (!userData.password) {
        console.log("wrong password")
        $('#signUpPassword-error').empty()
        function validPassword() {
        $('#signUpPassword-error').append('<p>Must enter a valid password.</p>')
        }
        validPassword()
        return
      } 
      
    
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
        if(err){
          $('#signUpPassword-error').empty()
          function validPassword() {
          $('#signUpPassword-error').append('<p>Must enter a valid email or password.</p>')
          }
          validPassword()
        }
      });
  }
});
