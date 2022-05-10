let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    console.log("button clicked");
    validation();
})



let validation=()=>{
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
      } else {
        console.log("successs");
        msg.innerHTML = "";
        accepdata();
      }
}

class Tasks{
    task;
}
let accepdata=()=>{
    var data=new Tasks();
   var task= data.task=input.value;
    console.log(data);
    createpost(task);
}

let createpost=(task)=>{
    posts.innerHTML +=`
    <div>
    <p>${task}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  input.value = "";
}
let editopost=(e)=>{
    e.console.log("hey");
}
let deletePost=(e,i)=>{
  console.log(i)
    e.parentElement.parentElement.localstorage.remove()
}
