(function() {
  function ActiveCtrl($scope, $uibModal, Task) {

    this.tasks = Task.all;

    this.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/task-modal.html',
        controller: 'ModalCtrl as modal',
        windowClass: 'modal-window'
      });

      modalInstance.result.then(function(task) {
        Task.createTask(task);
      });

      // this.removeTask = function(task) {
      //   tasks.$remove(task);
      // };
      //
      // this.completedTask = function(task){
      //   tasks.completed(task);
      // };
    }
  }

  angular
    .module('blocItOff')
    .controller('ActiveCtrl', ['$scope', '$uibModal', 'Task', ActiveCtrl]);
})();
