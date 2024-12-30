// Get references to DOM elements
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add a task
addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    // Delete task when the delete button is clicked
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
  }
});

// Optionally, you can add the task when pressing Enter key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});
