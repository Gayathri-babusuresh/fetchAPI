 document.getElementById("login-form").addEventListener("submit",function(e) {
    e.preventDefault();
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var indexUser = localStorage.getItem("u-name");
    var indexPwd = localStorage.getItem("pwd");

    if (user == "") {
      document.getElementById("user").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 2 || user.length > 20) {
      document.getElementById("user").innerHTML =
        " ** Username lenght must be between 2 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("user").innerHTML =
        " ** only characters are allowed";
      return false;
    } 

    if (user != indexUser){
      document.getElementById("user").innerHTML=
      " ** username is invalid";
      return false;
    }

    if (pass == "") {
      document.getElementById("pass").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("pass").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (pass != indexPwd) {
      document.getElementById("pass").innerHTML =
        " ** Invalid Password";
      return false;

    }
        
    if(pass == indexPwd && user == indexUser){
      window.location.href="fetch.html";
      alert("you logged in successfully..");
    }

    if(user != indexUser){
      document.getElementById("user").innerHTML="invalid username";
    }

    if(pass != indexPwd){
      document.getElementById("pass").innerHTML="invalid password";
    }

  })


  










 
