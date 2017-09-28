(function() {
    function ModalCtrl($uibModalInstance, Task) {

        this.createTask = function(name) {
            Task.createTask(name);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocItOff')
        .controller('ModalCtrl', ['$uibModalInstance', 'Task', ModalCtrl]);
})();
