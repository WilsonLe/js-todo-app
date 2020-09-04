//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//event listeners
todoButton.addEventListener('click', (e)=>{
    e.preventDefault();
    addTodo();
})
todoInput.addEventListener('change',()=>{
    addTask();
})
//functions
function addTodo(){
    text = addTask();
    //do what we want with the text
    console.log(text);



    //clear inputs
    clearInputs();
}
function addTask(){
    return todoInput.value;
}
function clearInputs(){
    todoInput.value = '';
}