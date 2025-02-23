/**
 * Write your challenge solution here
 **/
const inputDisplay = document.getElementById('taskInput');
const tasksContainer = document.getElementById('taskList');
const presentText = document.getElementById('present-list');
const tasksCount = document.getElementById('totalTasks');
let count = 0;
const completedTaks = document.getElementById('completedTasks');
let completeTaskCount = 0;
const addBtn = document.getElementById('addButton');
addBtn.addEventListener('click', () => {
    const value = inputDisplay.value;

    const checkBox = document.createElement('input');
    checkBox.className = 'complete-checkbox';
    checkBox.type = 'checkbox'; 
    checkBox.addEventListener('change',() => {
        if(checkBox.checked){
            completeTaskCount++;
            span.style.textDecoration = 'line-through';
            span.style.color = '#95a5a6';
        }
        else{
            completeTaskCount--;
            span.style.textDecoration = 'none';
            span.style.color = '#000000';
        }
        completedTaks.innerText = `Completed: ${completeTaskCount}`;
    })
    // let checkBoxValue = checkBox.attributes = 'unchecked';
    
    count++;

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = inputDisplay.value;

    const delButton = document.createElement('button');
    delButton.className = 'delete-button';
    delButton.innerText = 'Delete';

    delButton.addEventListener('click', () => {
        li.remove();
        count--;
        // completeTaskCount--;
        tasksCount.innerText = `Total tasks: ${count}`;
        // completedTaks.innerText = `Completed: ${completeTaskCount}`;
    })
    
    presentText.remove();

    tasksContainer.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delButton);

    tasksCount.innerText = `Total tasks: ${count}`;
    inputDisplay.value = '';
})
