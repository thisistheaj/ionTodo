angular.module('ionTodos').config(route);

function route($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'vendor/menu.html',
    })

    .state('app.todos', {
      url: '/todos',
      views: {
        'menuContent': {
          templateUrl: 'vendor/todos/todos.html',
          controller: 'TodoListController',
          controllerAs: 'vc'
        }
      }
    })

    .state('app.todo', {
      url: '/todos/:title',
      views: {
        'menuContent': {
          templateUrl: 'vendor/todo/todo.html',
          controller: 'TodoController',
          controllerAs:'vc'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/todos');
}
