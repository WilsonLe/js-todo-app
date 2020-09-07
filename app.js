//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoRemove = document.querySelector('.todo-remove')

//event listeners
todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    addTodo();
})
todoInput.addEventListener('change', () => {
    addTask();
})




//init todo lists
let todos = [];

//functions
function addTodo() {
    text = addTask();
    id = Date.now();

    //processing text
    todos.push(`
        <div class="todo-item" data-id="${id}">
            <div class="todo-text">
                ${text}
            </div>
            <button class="todo-remove" data-id="${id}">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `)


    //render to dom
    var DOM = ``
    for (i = 0; i < todos.length; i++) {
        DOM += todos[i];
    }
    todoList.innerHTML = DOM

    //clear inputs
    clearInputs();
}
function addTask() {
    return todoInput.value;
}
function clearInputs() {
    todoInput.value = '';
}