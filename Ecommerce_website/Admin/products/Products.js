
document.getElementById("Save").style.display = "none";

function addtolo() {
    var pid = document.getElementById("pid").value;
    var imgurl = document.getElementById("imgurl").value;
    var Name = document.getElementById("Name").value;
    var price = document.getElementById("price").value;
    if (localStorage.getItem("products") == null) {
        localStorage.setItem("products", JSON.stringify([]));
    }

    var product = {
        pid: pid,
        imgurl: imgurl,
        Name: Name,
        price: price
    }

    var products = JSON.parse(localStorage.getItem("products"));
    products.push(product);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
    clearinputfields();
    createbody();
}

function clearinputfields() {
    document.getElementById("pid").value = "";
    document.getElementById("imgurl").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("price").value = "";


}
function createbody() {
    var tbody = document.getElementById("tbody");
    var tbodycontents = "";
    var products = JSON.parse(localStorage.getItem("products"));
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var image = "<img width='100px' height='50px'src=" + product.imgurl + ">";
        tbodycontents = tbodycontents + "<tr>" + "<td>" + product.pid + "</td>" + "<td>" + image + "</td>" + "<td>" + product.Name + "</td>" + "<td>" + product.price + "</td>" + "<td>" + "<button onclick='updateproduct(" + product.pid + ")'>Edit</button>" + "<button onclick='deleto(this)'>delet</button>" + "</td>" + "</tr>"
    }
    tbody.innerHTML = tbodycontents;
}

function updateproduct(pid) {
    console.log(pid);
    var products = JSON.parse(localStorage.getItem("products"));
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.pid == pid) {
            document.getElementById("pid").value = product.pid;
            document.getElementById("imgurl").value = product.imgurl;
            document.getElementById("Name").value = product.Name;
            document.getElementById("price").value = product.price;
            document.getElementById("pid").disabled = true;
            document.getElementById("Save").style.display = "inline";
            document.getElementById("add").style.display = "none";
            break;
        }
    }

}

function Save() {
    var pid = document.getElementById("pid").value;
    var imgurl = document.getElementById("imgurl").value;
    var Name = document.getElementById("Name").value;
    var price = document.getElementById("price").value;
    var products = JSON.parse(localStorage.getItem("products"));
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.pid == pid) {
            products[i].imgurl = imgurl;
            products[i].Name = Name;
            products[i].price = price;
            break;
        }
    }
    localStorage.setItem('products',JSON.stringify(products));
    createbody();
}
function deleto(e,i){
   e.parentElement.parentElement.remove();
    console.log(i);

}