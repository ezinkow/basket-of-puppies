$(document).ready(function() {
    // Getting references to our form and input
    var completeForm = $(".complete");
    var userInput = $("#text");
    var passwordInput = $(".password");
  
    // When the signup button is clicked, we validate the email and password are not blank
    completeForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        userid: userInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.userid || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      completeUser(userData.userid, userData.password);
      userInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function completeUser(userid, password) {
      $.post("/api/register", {
        userid: userid,
        password: password
      })
        .then(function(data) {
          window.location.replace("/");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    // function handleLoginErr(err) {
    //   $("#alert .msg").text(err.responseJSON);
    //   $("#alert").fadeIn(500);
    // }
  });
  