
var button=document.getElementById("btn").value;

class todolist{
    task;
}
function addtask(){
    
    if(localStorage.getItem("tasks")==null){
        localStorage.setItem("tasks",JSON.stringify([]));
    }
    var newtasks=document.getElementById("tskad").value;
    
 
    var task1=new todolist();
    task1.task=newtasks;
    

    var ta=JSON.parse(localStorage.getItem("tasks"))

    
    ta.push(task1);
    localStorage.setItem("tasks",JSON.stringify(ta));
    tasksbody(task1);
    
   
   
   

}


function tasksbody(task1){
    var tasksbody=document.getElementById("taskbody");
    var ta=JSON.parse(localStorage.getItem("tasks"));
   var taskcontent=" ";
    for(var i=0;i<ta.length;i++){
        var task=ta[i]
        taskcontent=taskcontent+"<div id='divcr'>"+"<div id='adiv'>"+task.task+"</div>"+"<button onclick='updatetask("+this+")'>Edit</button>"+"<button>delet</button>"+"</div>"
    }
    console.log(task);


 tasksbody.innerHTML=taskcontent;
}
let updatetask=(ll )=>{
    debugger;
    console.log(this.ParentNode);
}
