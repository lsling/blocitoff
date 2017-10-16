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

    Task.completeTask = function(taskId) {
      var task = tasks.$getRecord(taskId);
      tasks.completed = true;
      tasks.$save(task);
    };

    // Task.completedTask = function(task){
    //   tasks.completed = true ;
    //   tasks.$save(task);
    // };

    // Task.markComplete = function(task){
    //   tasks.completed(task);
    // };

    Task.expireTask = function(task) {
      var task = tasks.$getRecord(task);
      var today = new Date()
      var now = today.getTime();
      var days = 24 * 60 * 60 * 1000 // hours * minutes * seconds * milliseconds
      if (task.completed = false && (now - task.dateAdded) >= (7 * days)){
          task.expired = true;
          tasks.$save(task);
      }
    };

    return Task;
    }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
