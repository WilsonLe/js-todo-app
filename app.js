//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//event listeners
todoButton.addEventListener('click', (e) => {
    id = Date.now();
    e.preventDefault();
    addTodo(id, addRemoveListener);

})
todoInput.addEventListener('change', () => {
    addTask();
})



//init todo lists
let todos = [];

//functions

function addTodo(id, callback) {
    text = addTask();
    if (text != '') {
        //processing text
        todos.push([`
            <div class="todo-item" data-id="${id}">
                <div class="todo-text">
                    ${text}
                </div>
                <button class="todo-remove" data-id="${id}" id="${id}">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `,id])


        //render to dom
        var DOM = ``
        for (i = 0; i < todos.length; i++) {
            DOM += todos[i];
        }
        todoList.innerHTML = DOM

        //clear inputs
        clearInputs();
    }
    callback(id);
}
function addTask() {
    return todoInput.value;
}
function clearInputs() {
    todoInput.value = '';
}
function addRemoveListener(id) {
    document.getElementById(id).addEventListener('click', () => {
        for (i = 0 ; i < todos.length; i++){
            if (todos[i][1] == id){
                todos.splice(i,1)
            }
        }
        var DOM = ``
        for (i = 0; i < todos.length; i++) {
            DOM += todos[i];
        }
        todoList.innerHTML = DOM
    })
}
