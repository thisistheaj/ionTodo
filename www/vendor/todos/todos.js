angular.module('ionTodos.TodoListController')
  .controller('TodoListController', TodoListController);

function TodoListController(TodosService) {
  var todos = TodosService.getTodos();

  var vm = this;
  vm.todos = todos;
  vm.addTodo = addTodo;

  function addTodo() {
    var t = prompt("Add To-Do Item:");
    TodosService.addTodo({title:t,id:(todos.length + 1)});
  }

  return vm;
}
