// const p=document.getElementById("text");
// console.log(p);
// const pclass=document.getElementsByClassName("text");
// console.log(pclass);

// const pclass1=document.getElementsByClassName("text")[0];
// console.log(pclass1);

// const pq=document.querySelector(".text");
// console.log(pq)

// const qall=document.querySelectorAll(".text");
// console.log(qall);


// create=document.querySelector(".create");
// const createinput=document.createElement("input");
// create.append(createinput);

// create.classList="divelement";


// p.style.color="red";
// p.remove()


// const todocontainer=document.getElementById("todo");
// console.log(todocontainer);
// const inputtask=document.createElement("input");
// inputtask.type="text";
// inputtask.placeholder="Enter Task.....";

// const btn=document.createElement("button");
// btn.textContent="Add"
// todocontainer.append(inputtask);
// console.log(todocontainer)
// todocontainer.append(inputtask);
// todocontainer.append(inputtask,btn);

// btn.addEventListener("click",addtodo);
// function addtodo(){
//     const task=inputtask.value;
//     // console.log(task);
//     todos.unshift(task)
//     inputtask.value="";
//     rendertask();
//     // console.log(todos)
// }
// function rendertask(task){

    
// }



//20-07-26;
(function(){
    const todos=[];
    // let todos=localStorage.getItem("todos");
    
    const todocontainer=document.getElementById("todo");
    console.log(todocontainer);
    const inputtask=document.createElement("input");
    inputtask.type="text";
    inputtask.placeholder="Enter task..."
    const btn=document.createElement("button");
    btn.textContent="Add";

    const todolist=document.createElement("div");
    todolist.style.border="2px solid green";
    todolist.style.margin="24px";
    todocontainer.append(inputtask,btn,todolist);
    


    function rendertask(task){
        const p=document.createElement("p");
        p.textContent=task;
        const deletebtn=document.createElement("button");
        deletebtn.textContent="Delete";
        const editbtn=document.createElement("button");
        editbtn.textContent="Edit";
        const todoitem=document.createElement("div");
        todoitem.style.border="2px solid red";
        todoitem.style.margin="22px";
        
        editbtn.addEventListener("click",function(){
            const editinput=document.createElement("input");
            editinput.value=task;
            const savebtn=document.createElement("button");
            savebtn.textContent="Save";
            const completebtn=document.createElement("button");
            completebtn.textContent="Completed";

            completebtn.addEventListener("click",function(){
                todoitem.style.backgroundColor="Green";
                completebtn.remove();
            })

            todoitem.prepend(editinput,savebtn,completebtn);
            editinput.focus();       
            savebtn.addEventListener("click",function(){
                const updatedtask=editinput.value;
                if(!updatedtask){
                    return;
                }
                p.textContent=updatedtask;
                const index=todos.indexOf(task);
                todos[index]=updatedtask;
                editbtn.remove();
                savebtn.remove();
                todoitem.style.backgroundColor="White";
                console.log(todos);


            })
        })

        deletebtn.addEventListener("click",function(){
            const index=todos.indexOf(task);
            todos.splice(index,1);          //remove element
            todoitem.remove();
        })
        todoitem.append(p,deletebtn,editbtn);
        todolist.prepend(todoitem);
        //todolist.prepend(p);    //whatever content we add displays infront of the privous input
    }

    

    function addtodo(){
        const task=inputtask.value;
        console.log(task);
        if(!task){
            return;
        }
        todos.unshift(task);    // add task in array todos
        // console.log(todos);
        rendertask(task);
        inputtask.value=""; //once we have entered the input after that it becomes empty automatically
        inputtask.focus();      // we dont have to ckick the input task box again and again to enter the input
    }
    // btn.addEventListener("click",function(){})
    btn.addEventListener("click",addtodo)  //only give function reference todo not todo()-> this is function calling 

    inputtask.addEventListener("keydown",function(e){
        // console.log(e);
        if(e.key=="Enter"){
            addtodo();
        }
    })

})();




