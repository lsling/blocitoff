(function() {
    function ModalCtrl($scope, $uibModalInstance, Task) {

        this.createTask = function(name) {
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocItOff')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Task', ModalCtrl]);
})();
