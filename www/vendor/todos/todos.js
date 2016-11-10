angular.module('ionTodos.TodoListController')
  .controller('TodoListController', TodoListController);

function TodoListController() {
  var todos = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  var vm = this;
  vm.todos = todos;


  return vm;
}
