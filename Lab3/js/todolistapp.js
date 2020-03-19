var newTodoInput = document.getElementById('newTodo');
var addNewTodoButton = document.getElementById('addNewTodo');
var todoList = document.getElementById('todoList');
var todoDoneList = document.getElementById('todoDoneList');
//var declares a variable

var todos = [
  { todo: "Buy bread", checked: false },
  { todo: "Buy milk", checked: false },
  { todo: "Buy cheese", checked: true }
];

function addTodo(label) {
  if (label != "") {
    todos.push({ todo: label, checked: false });
    updateTodos();
  }
}

addNewTodoButton.addEventListener('click', function (e) {
  e.preventDefault();
  addTodo(newTodoInput.value);
  newTodoInput.value = "";
  console.log(todos);
});

function updateTodos() {
  todoList.innerHTML = "";
  todoDoneList.innerHTML = "";

  todos.forEach(function (el) {

    var todo = document.createElement('li');
    todo.className = "todo";
    todo.innerText = el.todo;

    todo.addEventListener('click', function (e) {
      todos.forEach(function (el, i) {
        if (todos[i].todo === e.target.innerText) {
          todos[i].checked = !todos[i].checked;
          updateTodos();
        }
      })
    });

    if (el.checked) {
      todoDoneList.appendChild(todo);
    } else {
      todoList.appendChild(todo);
    }
  });
}

updateTodos() 
