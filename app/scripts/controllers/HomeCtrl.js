(function() {
  function HomeCtrl($scope, $uibModal, Task) {

    this.tasks = Task.all;

    this.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/task-modal.html',
        controller: 'ModalCtrl as modal',
        windowClass: 'modal-window'
      });

      modalInstance.result.then(function(name) {
        Task.createTask(name);
      });
    };    
  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['$scope', '$uibModal', 'Task', HomeCtrl]);
})();
