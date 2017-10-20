(function() {
  function ActiveCtrl($scope, Task) {
    $scope.newTask = {};
    $scope.tasks = Task.all;

    $scope.hasItExpired = function(task){
      var currentTime = new Date().getTime();
      var taskCreated = task.createdAt;
      if ((currentTime - taskCreated ) >= 604800000) {
        Task.expiredTask(task);

      }
    }

    $scope.createTask = function(){
      Task.add($scope.newTask);
      $scope.priority = null;
      $scope.newTask = {};
    }

    $scope.removeTask = function(task){
      Task.remove(task);
    }

    $scope.markComplete = function(task){
      Task.markCompleted(task);
    }

  }

  angular
    .module('blocItOff')
    .controller('ActiveCtrl', ['$scope', 'Task', ActiveCtrl]);
})();
