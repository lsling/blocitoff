(function(){
  function ExpiredCtrl($scope, Task){
    $scope.expiredTasks = Task.expired;
    $scope.completedTasks = Task.completed;
    $scope.newArray = $scope.expiredTasks.concat($scope.completedTasks);

    $scope.removeTask = function(task){
      Task.remove(task);
    }
  }

  angular
    .module('blocItOff')
    .controller('ExpiredCtrl', ['$scope', 'Task' , ExpiredCtrl]);
})();
