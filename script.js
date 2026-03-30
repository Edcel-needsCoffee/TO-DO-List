
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
 
    const list = document.createElement('li')

    list.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'deleteTask';

    deleteButton.addEventListener('click', function(){
        listItem.removeChild(list);
        alert('A Task had been removed');
    })
    
    list.appendChild(deleteButton);
    listItem.appendChild(list);

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