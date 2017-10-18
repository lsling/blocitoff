(function(){
    function ExpiredCtrl($scope, Task){
        $scope.expiredTasks = Task.expired;
        $scope.completedTasks = Task.completed;
        $scope.newArray = $scope.expiredTasks.concat($scope.completedTasks);

        console.log($scope.newArray);

    }
    angular
        .module('blocItOff')
        .controller('ExpiredCtrl', ['$scope', 'Task' , ExpiredCtrl]);
})();
