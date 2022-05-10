// once the user logs out, then remove current user key from local storage.


// go to local storage, get current user, if current user is null, then navigate to login / home page/

var user = JSON.parse(localStorage.getItem("currentuser"));
function redirect() {
    if (user === null) {
      location.replace("../login/login.html");
    }
  }
  redirect();

  var logo=document.getElementById("logout")
  function logout(){
    localStorage.removeItem("currentUser");
      location.replace("../Login/login.html")
  }

var logout = document.getElementById("logout")
function welcome() {
    var hed = document.getElementById("hed");
        var details = JSON.parse(localStorage.getItem("currentuser"));
    for (var i = 0; i < details.length; i++) {
        
        hed.innerHTML = "welcome to dashboard" + " " + details[i].logedname;
    }
   

}
welcome();


    var divbody=document.querySelector(".divbody");
    var products=JSON.parse(localStorage.getItem
    ("products"));
    var divcontent=" ";

    console.log(products);
    for(var i=0;i<products.length;i++){
        var product=products[i]
        
        var image="<img id='imge' height='100px' width='100px' src="+product.imgurl+">";
        

        divcontent=divcontent+"<div id='adiv' onclick=displayDetails(" +
        i +
        ")>"+image+"<h5>"+product.Name+"</h5>"+"<p>"+product.price+"</p>"+"<butoon id='cart'>CLICK ME</button>"+"</div>"
        
    }
    console.log(divcontent);
    divbody.innerHTML=divcontent;


cardbody();
function displayDetails(index) {
  localStorage.setItem("currentProduct", JSON.stringify(products[index]));
  location.replace("../details/details.html");
}

