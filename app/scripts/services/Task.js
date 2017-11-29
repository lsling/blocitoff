(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    var completedTasksList = $firebaseArray(ref.orderByChild('completed').equalTo(true));
    var expiredTasksList = $firebaseArray(ref.orderByChild('expired').equalTo(true));

    var markCompletedTask = function(task){
      task.completed = true ;
      task.completedAt = firebase.database.ServerValue.TIMESTAMP;
      tasks.$save(task);
    }

    var createTask = function(task){
      task.createdAt = firebase.database.ServerValue.TIMESTAMP;
      task.completedAt = '';
      task.completed = false;
      task.$priority = 0;
      return tasks.$add(task);

    }

    var removeTask = function(task) {
      tasks.$remove(tasks.$indexFor(task.$id));
    }

    var expiredTask = function(task) {
      task.expired = true ;
      task.expiredAt = firebase.database.ServerValue.TIMESTAMP;
      tasks.$save(task);
    }

    return{
      all : tasks,
      add : createTask,
      markCompleted : markCompletedTask,
      remove : removeTask,
      completed : completedTasksList,
      expired : expiredTasksList,
      expiredTask : expiredTask,
    };
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
