var StrPattern = /^[a-zA-Z]{4,10}$/;

var passWordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
function validation(){
    var username = document.querySelector("#username").value;
    var Email = document.querySelector("#Email").value;
    var password = document.querySelector("#password").value;

    if(!username.test(username.value)){
        document.getElementsByName('username')[0].placeholder = 'please enter valid username';
    }
    else if(!emailPattern.test(Email.value)){
        document.getElementsByName('Email')[0].placeholder = 'please enter valid Email';

    }
    else if(!passWordPattern .test(password.value)){
        document.getElementsByName('password')[0].placeholder = 'please enter valid password';
    }
    else{
        localStorage();
    }
    
}
 

function Rlocalstorage() {
    
    if(localStorage.getItem("users")==null){
        localStorage.setItem('users',JSON.stringify([]));
    }
    
    var username = document.querySelector("#username").value;
    var Email = document.querySelector("#Email").value;
    var password = document.querySelector("#password").value;
    console.log(username,Email,password);

    var user={
        username:username,
        password:password,
        Email:Email
    }
    
    var users=JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    
    
 

}

function signin (){
    window.location="../Login/login.html";
}