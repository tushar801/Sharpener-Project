function addTodo() {
    const todoName = document.getElementById('todoName').value;
    const description = document.getElementById('description').value;
  
    if (todoName.trim() === '') {
      alert('Please enter a Todo Name');
      return;
    }
  
    const task = {
      name: todoName,
      description: description,
    };
  
    createTaskElement(task);
  }
  
  function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
      <div>
        <strong>${task.name}</strong>
        <p>${task.description}</p>
      </div>
      <div>
        <button onclick="markDone(this)">✔</button>
        <button onclick="deleteTask(this)">❌</button>
      </div>
    `;
  
    document.getElementById('remainingTasks').appendChild(taskDiv);
  }
  
  function markDone(button) {
    const taskDiv = button.closest('.task');
    taskDiv.classList.add('done');
    document.getElementById('doneTasks').appendChild(taskDiv);
  }
  
  function deleteTask(button) {
    const taskDiv = button.closest('.task');
    taskDiv.remove();
  }
  