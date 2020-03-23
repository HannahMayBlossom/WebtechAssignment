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
//this will push the arrary and check that it's not blank

addNewTodoButton.addEventListener('click', function (e) {
  e.preventDefault();
  addTodo(newTodoInput.value);
  newTodoInput.value = "";
  console.log(todos);
});
//this will add the todo when the button is clicked

function updateTodos() {
  todoList.innerHTML = "";
  todoDoneList.innerHTML = "";
//this clears old todos

  todos.forEach(function (el) {
  //so I can do it for each todo  

    var todo = document.createElement('li');
    todo.className = "todo";
    todo.innerText = el.todo;
    //so I can create new todos

    todo.addEventListener('click', function (e) {
      todos.forEach(function (el, i) {
        if (todos[i].todo === e.target.innerText) {
          todos[i].checked = !todos[i].checked;
          updateTodos();
        }
      })
    });
//this allows the todo's to be checked and unchecked

    if (el.checked) {
      todoDoneList.appendChild(todo);
    } else {
      todoList.appendChild(todo);
    }
  });
}
//this makes sure the checked items are in the correct area

updateTodos() 
