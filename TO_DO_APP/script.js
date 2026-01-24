
const input = document.querySelector("#taskInput");
        const addBtn = document.querySelector(".add-btn");
        const todoList = document.querySelector(".todo-list");

        // Add task function
        function addTask() {
            const taskText = input.value.trim();

            if (taskText === "") {
                return;
            }

            // Create list item
            const li = document.createElement('li');
            li.classList.add('todo-item');

            // Create span for task text
            const span = document.createElement('span');
            span.textContent = taskText;

            // Create actions div
            const actions = document.createElement('div');
            actions.classList.add('actions');

            // Create complete button
            const completeBtn = document.createElement('button');
            completeBtn.textContent = '✔';
            completeBtn.classList.add('btn-action', 'complete-btn');

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '✖';
            deleteBtn.classList.add('btn-action', 'delete-btn');

            // Append buttons to actions
            actions.append(completeBtn, deleteBtn);

            // Append span and actions to list item
            li.append(span, actions);

            // Append list item to todo list
            todoList.appendChild(li);

            // Clear input
            input.value = "";
        }

        // Add button click event
        addBtn.addEventListener('click', addTask);

        // Add Enter key support
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        // Handle complete and delete actions
        todoList.addEventListener('click', function(event) {
            const todoItem = event.target.closest('.todo-item');
            if (!todoItem) return;

            if (event.target.classList.contains('complete-btn')) {
                todoItem.classList.toggle('completed');
            }

            if (event.target.classList.contains('delete-btn')) {
                todoItem.remove();
            }
        });