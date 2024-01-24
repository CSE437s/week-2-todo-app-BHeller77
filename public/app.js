document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const todoText = input.value.trim();
      if (todoText !== '') {
        addTodo(todoText);
        input.value = '';
      }
    });
  
    function addTodo(text) {
        const li = document.createElement('li');
        li.textContent = text;
        todoList.appendChild(li);
        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTodo(li);
        });
        li.appendChild(deleteButton);
    }

    function deleteTodo(todoElement) {
        const todoId = todoElement.dataset.id; // Assuming you set a data-id attribute
  // Assuming your server is running on http://localhost:3000
  fetch(`http://localhost:3000/todos/${todoId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      // Remove the ToDo item from the UI
      todoElement.remove();
    })
    .catch((error) => console.error('Error deleting ToDo item:', error));
    }   
  });
  