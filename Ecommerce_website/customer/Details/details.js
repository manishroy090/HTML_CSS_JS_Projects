if(localStorage.getItem("currentProduct")==null){
    location.replace("../dashboard/dashboard.html");
}
else{
    var currentproduct=JSON.parse(localStorage.getItem("currentProduct"));
    var details=document.getElementById("details");
    var image="<img width='250px' height='300px' src="+currentproduct.imgurl+">";
    details.innerHTML="<h3> product ID:"+currentproduct.pid+"</h3><h3"+currentproduct.name+"</h3>"+image+"<h4>price:"+currentproduct.price+"INR</h4>";

}
function goBack() {
    localStorage.removeItem("currentProduct");
    location.replace("../dashboard/dashboard.html");
  }


