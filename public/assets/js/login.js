$(document).ready(function() {
    // Getting references to our form and inputs
    var signForm = $(".signin");
    var userInput = $("#userinput");
    var passwordInput = $("#password");
  
    // When the form is submitted, we validate there's an email and password entered
    signForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        userid: userInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.userid || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.userid, userData.password);
      userInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(userid, password) {
      $.post("/api/login", {
        userid: userid,
        password: password
      })
        .then(function() {
          window.location.replace("/index");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  

