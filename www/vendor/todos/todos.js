angular.module('ionTodos.TodoListController')
  .controller('TodoListController', TodoListController);

function TodoListController(TodosService) {
  var todos = TodosService.getTodos();

  var vm = this;
  vm.todos = todos;


  return vm;
}
