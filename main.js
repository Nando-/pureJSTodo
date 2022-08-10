//selectors

const todoInput = document.querySelector(".list-input");
const todoButton = document.querySelector(".list-button");
const todoList = document.querySelector(".list-entry");

todoButton.addEventListener('click', addTodo);

function addTodo(event){

    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoButton.classList.add("todo")

    const newTodo = document.createElement("li")

    newTodo.innerText = 'test'
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

}