
const taskInput = document.getElementById('taskInput');
const taskInputBtn= document.getElementById('taskInputBtn');
const listItem = document.getElementById('listItems');

loadTask();
function addBtn(){
    const task = taskInput.value.trim();

    if(task){
             createTask(task);
             saveTask();
             
        taskInput.value = '';
        
        
    } else {
        alert("PUT A TASK OR SOMETHING, SIRE!");
    }
}

taskInputBtn.addEventListener('click', addBtn);

function createTask(task){
 
    const li = document.createElement('li')

    li.textContent = task;

    listItem.appendChild(li);

}

function saveTask(){
    let tasks  = [];

    listItem.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTask);
}