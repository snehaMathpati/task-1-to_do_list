document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('new-task').value;
    if (taskName.trim() === '') return;

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-name';
    taskSpan.textContent = taskName;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => editTask(taskSpan));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTask(listItem));

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);

    document.getElementById('new-task').value = ''; 
}

function editTask(taskSpan) {
    const newTaskName = prompt('Edit your task', taskSpan.textContent);
    if (newTaskName !== null && newTaskName.trim() !== '') {
        taskSpan.textContent = newTaskName;
    }
}

function deleteTask(listItem) {
    listItem.remove();
}
