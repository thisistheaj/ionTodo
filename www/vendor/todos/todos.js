angular.module('ionTodos.TodoListController')
  .controller('TodoListController', TodoListController);

function TodoListController(TodosService) {
  var vm = this;
  var todos = TodosService.getTodos();

  vm.todos = todos;
  vm.addTodo = addTodo;
  vm.removeTodo = removeTodo;

  function addTodo() {
    var t = prompt("Add To-Do Item:");
    TodosService.addTodo({title:t,id:(todos.length + 1)});
    alert('ayy')
  }

  function removeTodo(todo) {
    TodosService.removeTodo(vm.todos.indexOf(todo));
  }

  return vm;
}
