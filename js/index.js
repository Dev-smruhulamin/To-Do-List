const form = document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskLists = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
    // console.log("event");
    event.preventDefault();

   if (taskInput.value){
    const task = taskInput.value;
    console.log(task);

    // Creating the task div.
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    // Creating the content div.

    const taskElContent = document.createElement("div");
    taskElContent.classList.add("content");

    //inserting content div to task
    taskEl.appendChild(taskElContent);

    // Creating input (task).

    const taskElInput = document.createElement("input");
    taskElInput.classList.add("text");
    taskElInput.value = task;
    taskElInput.setAttribute("readonly","readonly");

    //inserting input to content div
    taskElContent.appendChild(taskElInput);

    //crearting action div
    const taskElAction = document.createElement("div");
    taskElAction.classList.add("actions");

    //Inserting action div to content div
    taskElContent.appendChild(taskElAction);

    //Creating a edit button
    const taskElEditBtn = document.createElement("button");
    taskElEditBtn.classList.add("edit");
    taskElEditBtn.innerText = "Edit";

    //Inserting a edit button
    taskElAction.appendChild(taskElEditBtn);

    //Creating a delete button
    const taskElDeleteBtn = document.createElement("button");
    taskElDeleteBtn.classList.add("delete");
    taskElDeleteBtn.innerText = "Delete";

    //Inserting a delete button
    taskElAction.appendChild(taskElDeleteBtn);

    //Creating a complete button
    const taskElComleteBtn = document.createElement("button");
    taskElComleteBtn.classList.add("complete");
    taskElComleteBtn.innerText = "Mark complete";

    //Inserting a complete button
    taskElAction.appendChild(taskElComleteBtn);


    //inserting task element div to tasks div
    taskLists.appendChild(taskEl);

    //Clear The Input Field
    taskInput.value = "";

    //Edit btn

    taskElEditBtn.addEventListener("click",function(){
        if(taskElEditBtn.innerText.toLowerCase()=== "edit"){
            taskElEditBtn.innerText = "Save";
            taskElInput.removeAttribute("readonly");
            taskElInput.focus();

        } else{
            taskElEditBtn.innerText = "Edit";
            taskElInput.setAttribute("readonly", "readonly");
        }
    });

    //Complete btn::::: 

   taskElComleteBtn.addEventListener("click", function(){
    if (taskElComleteBtn.innerText.toLowerCase()==="mark complete")
    {
        taskElComleteBtn.innerText ="completed";
        taskElComleteBtn.classList.add("mark-completed");
        
    }
    else{
        taskElComleteBtn.innerText = "mark complete"
        taskElComleteBtn.classList.remove("mark-completed");
    }
   });

   //Delete btn 
   taskElDeleteBtn.addEventListener("click", function(e){
    taskLists.removeChild(taskEl);
   })

   }
   else{
    alert("Enter a Task")
   }

});


// document.getElementById("new-task-submit").addEventListener("click", function (event)
// {
//     console.log("Running event",event,event.id);
// });