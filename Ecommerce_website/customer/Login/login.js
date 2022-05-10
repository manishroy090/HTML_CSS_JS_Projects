var useremail, userpassword, btn;


var btn = document.getElementById("btn");


function checkingtoloca() {
   if (localStorage.getItem('currentuser') == null) {
      localStorage.setItem('currentuser', JSON.stringify([]));

   }
   event.preventDefault();
   useremail = document.getElementById("Email").value;
   userpassword = document.getElementById("password").value;
   var regi = JSON.parse(localStorage.getItem("users"));
   for (var i = 0; i < regi.length; i++) {
      if (regi[i].Email !== useremail) {
         console.log("please enter valid email");
         document.getElementById("Email").value = '';
         document.getElementsByName('email')[0].placeholder = 'please enter valid email';
      }
      else if (regi[i].password !== userpassword) {
         console.log("please enter valid password");
         document.getElementById("password").value = '';
         document.getElementsByName('password')[0].placeholder = 'please enter valid password';
         break;

      }
      else {
         console.log("you are loged in");
         window.location = "../Dashboard/Dashboard.html";

         var currentuser_D = {
            logedemail: useremail,
            logedpassword: userpassword,
            logedname: regi[i].username
         }
         var currentuser = JSON.parse(localStorage.getItem("currentuser"));
      
         currentuser.push(currentuser_D);
         localStorage.setItem("currentuser", JSON.stringify(currentuser));

         break;
      }
   }
}

function signup() {
   window.location = "../Register/registration.html";
}



