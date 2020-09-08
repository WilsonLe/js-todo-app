class Todos{
    getTodos(){
        var todos = Storage.getTodos();
        return todos
    }
    renderTodos(input){
        let DOM = ``
        for (var i = 0; i < todos.length; i++) {
            DOM += todos[i][1];
        }
        const todoList = document.querySelector('.todo-list')
        todoList.innerHTML = DOM
    }
}

class Storage{
    static getTodos(){
        if (localStorage.getItem('Todos')){
            return JSON.parse(localStorage.getItem('Todos'))
        }else{
            return []
        }
    }
    static saveTodos(todos){
        localStorage.setItem('Todos', JSON.stringify(todos))
    }
}


class UI {
    setupApp() {
        const todoButton = document.querySelector('.todo-button')
        todoButton.addEventListener('click', (e) => {
            e.preventDefault()
            var text = this.getInput()
            this.clearInput()
            this.renderInput(text).then(() => {
                Storage.saveTodos(todos)
                this.getRemoveButtons()
            })
        })
    }
    getInput() {
        const todoInput = document.querySelector('.todo-input')
        return todoInput.value
    }
    clearInput() {
        const todoInput = document.querySelector('.todo-input')
        todoInput.value = ''
    }
    async renderInput(input) {
        try {
            let id = Date.now()
            if (input) {
                todos.push([id, `
                    <div class="todo-item" data-id="${id}">
                        <div class="todo-text">
                            ${input}
                        </div>
                        <button class="todo-remove" data-id="${id}" id="${id}">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                `])
            }
            let DOM = ``
            for (var i = 0; i < todos.length; i++) {
                DOM += todos[i][1];
            }
            const todoList = document.querySelector('.todo-list')
            todoList.innerHTML = DOM
        } catch (e) {
            console.log(e);
        }
    }
    getRemoveButtons() {
        const RemoveButtons = [...document.querySelectorAll('.todo-remove')]
        RemoveButtons.forEach(RemoveButton => {
            RemoveButton.addEventListener('click', (e) => {
                e.preventDefault()
                let id = RemoveButton.dataset.id
                this.removeElementfromTodo(id)
                //render from todos
                let DOM = ``
                for (var i = 0; i < todos.length; i++) {
                    DOM += todos[i][1];
                }
                const todoList = document.querySelector('.todo-list')
                todoList.innerHTML = DOM

                //re init
                this.getRemoveButtons()
            })
        });
    }
    removeElementfromTodo(id) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i][0] == id) {
                todos.splice(i, 1)
            }
        }
        Storage.saveTodos(todos)    
    }
}





document.addEventListener('DOMContentLoaded', () => {
    ui = new UI
    todo = new Todos
    todos = todo.getTodos()
    todo.renderTodos(todos)
    ui.getRemoveButtons()
    ui.setupApp()
})