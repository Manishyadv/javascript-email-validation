function idValidate(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const $message = $("#message");
    const email = $("#email").val();
    $message.text("");
  
    if (idValidate(email)) {
      $message.text(email + " is valid 👍");
      $message.css("color", "#3E9339");
    } else {
      $message.text(email + " is not valid a valid email address");
      $message.css("color", "#ff0000");
    }
    return false;
  }
  
  $("#email").on("input", validate);
  

