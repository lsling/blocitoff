(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;

    Task.createTask = function(task) {
      tasks.createdAt = firebase.database.ServerValue.TIMESTAMP;
      tasks.completed = false;
      return tasks.$add(task);
    };

    Task.removeTask = function(task) {
      tasks.$remove(task);
    };

    Task.completedTask = function(task){
      tasks.completed = true ;
      tasks.$save(task);

        }

    return Task;
    }


  //   Task.createTask = function(name) {
  //       tasks.$add(name);
  //   };
  //
  //   return Task;
  // }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
