localStorage.setItem("name","Riddhi");
localStorage.setItem("lastname","Aggarwal");

const name=localStorage.getItem("lastname");
console.log(typeof(name));
const details={
    name:"Riddhi",
    lastname:"Aggarwal"
};
localStorage.getItem("d",JSON.stringify(details));
const getob=JSON.parse(localStorage.getItem("d"));
console.log(getob);

let todos=JSON.parse(localStorsge.getitem("todos"))||[];



const obj={
    id:50,
    text:"task",
    complete:false,
    starred:true,
    edit:0
};
todos=[obj,...todos];
localStorage.setItem("todos",JSON.stringify(todos));



let id=Number(localStrorage.getItem("id"))||0;
function addtodo(){
    const task=todoinput.value;
    if(!task){
        return;
    }
    id=id+1;
    const obj={
        id:id,
        text:task,
        complete:false,
        edit:0
    }
    todos.unshift(obj);
    localStorage.setItem("todos",JSON.stringify(todos));
    localStorage.setItem("id",id);// so that id variable never reset , the value of id will be updated id only.
}
