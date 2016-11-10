angular.module('ionTodos.TodosService', [])
  .factory('TodosService',TodosService);

function TodosService() {
  var service = {
    getTodos:getTodos
  };

  var todos = [
    { title: 'Get Milk', id: 1 },
    { title: 'Buy Tickets', id: 2 },
    { title: 'Work Out', id: 3 },
    { title: 'Drop off book', id: 4 },
  ];

  function getTodos() {
    return todos;
  }

  function saveTodos() {
    localStorage.setItem('todos',todos);
  }

  function loadTodos() {
    todos = localStorage.getItem('todos');
  }

  function pullTodos() {
    //todo: http GET request
  }

  function pushTodos() {
    //todo: http POST request
  }

  function addTodo(todo) {
    todos.append(todo)
  }

  function removeTodo(index) {
    todos.splice(index,1);
  }

  return service;
}
