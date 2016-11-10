angular.module('ionTodos.TodoController')
  .controller('TodoController', TodoController);

function TodoController($stateParams) {
  var vm = this;

  vm.foo = $stateParams.title;
  return vm;
}
