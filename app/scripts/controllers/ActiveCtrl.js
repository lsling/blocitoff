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
      $scope.newTask = {};
      $scope.priority = 0;
    }

    $scope.removeTask = function(task){
      Task.remove(task);
    }

    $scope.markComplete = function(task){
      Task.markCompleted(task);
    }

    $scope.humanReadablePriority = function(priorityNumber) {
      switch (parseInt(priorityNumber)) {
        case 1:
          return 'High';
          break;
        case 2:
          return 'Medium';
          break;
        case 3:
          return 'Low';
          break;
        default:
          return 'N/A';
      }
    }
  }

  angular
    .module('blocItOff')
    .controller('ActiveCtrl', ['$scope', 'Task', ActiveCtrl]);
})();
