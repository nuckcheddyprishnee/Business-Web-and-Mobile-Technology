// DOM manipulation pattern

/*
3 Steps:

step 1: grab element from the DOM and assign to a js variable
step 2: write a function to handle the event
step 3: connect the variable and the funciton via the event listener so that the event triggers the update of the DOM
*/
let addTaskButton = document.getElementById('add-task')
let newTaskInput = document.getElementById('input-task')
let todoListContainer = document.getElementById('todo-list')

let templateElement = document.getElementById('list-item-template')
let template = templateElement.innerHTML;

let showAllbutton = document.getElementById('show-all')
let showActivebutton = document.getElementById('show-active')
let showCompletedbutton = document.getElementById('show-completed')
function onAddTaskClicked(e){
    //grab text entered by a user in the input-task textbox and add it as a list item to my ul
    let taskName = newTaskInput.value;
    // var x = document.createElement("INPUT");
    // var li = document.createElement('li');
    // x.setAttribute("type", "checkbox");
    // li.innerText = newTaskInput.value;
    // todoListContainer.appendChild(x);
    // todoListContainer.appendChild(li);
    newTaskInput.value = "";
    
    if (taskName != ""){
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
        todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);

        saveTask(taskName, false);
    }
    //create a list item, set the text for the list item to the taskName
    //add the list item to the ul element, todoListContainer
    
    // modify your code to now include a checkbox as part of the list item

    //modify your code to handle the click event on a checkbox to strike through the list item
    

}

function onTodolistClicked(e)
{
    let targetElement = event.target;

    while (!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    }

    let checkbox = targetElement.querySelector(".checkbox")
    if (checkbox.checked){
        targetElement.classList.add("completed");
    }else {
        targetElement.classList.remove("completed");
    }
    let taskNameElement = targetElement.querySelector(".task-name");
    let taskName = taskNameElement.innerText;
    saveTask(taskName, checkbox.checked)
}

function showAllTasks(e){
    let tasks = document.getElementsByClassName("task");
    console.log(tasks);

    for (let i =0; i<tasks.length; i++){
        tasks[i].style.display = "none"
        tasks[i].style.display = "block"
    }
}

function showActiveTasks(e){
    let tasks = document.getElementsByClassName("task");
    console.log(tasks);

    for (let i =0; i<tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "none"
        }else{
            tasks[i].style.display = "block";
        }
    }
}

function showCompletedTasks(e){
    let tasks = document.getElementsByClassName("task");
    console.log(tasks);

    for (let i =0; i<tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            tasks[i].style.display = "block"
        }else{
            tasks[i].style.display = "none";
        }
    }
}

function saveTask(name, IsCompleted){
    localStorage.setItem(name, IsCompleted)
}

function renderTasks(){
    for (let i = 0; i<localStorage.length; i++){
        let taskName = localStorage.key(i);
        let isCompleted = localStorage.getItem(taskName) == "true";
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
        if (!isCompleted){
            todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
        }
    }
}
addTaskButton.addEventListener('click', onAddTaskClicked)
todoListContainer.addEventListener('click', onTodolistClicked)
showAllbutton.addEventListener('click', showAllTasks)
showActivebutton.addEventListener('click', showActiveTasks)
showCompletedbutton.addEventListener('click', showCompletedTasks)
renderTasks()