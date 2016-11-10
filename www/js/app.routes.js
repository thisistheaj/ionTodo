angular.module('ionTodos')

  .config(function ($stateProvider, $urlRouterProvider) {
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
            controller: 'TodoListController'
          }
        }
      })

      .state('app.todo', {
        url: '/todos/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'vendor/todo/todo.html',
            controller: 'TodoController'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/todos');
  });
