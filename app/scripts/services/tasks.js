angular.module('acmtutorialApp')
  .factory('Tasks', [function() {

    var tasks;
    
    if(localStorage.getItem("myTasks")){
        tasks = JSON.parse(localStorage.getItem("myTasks"));
    } else {
        tasks = [];
    }

    return {
        add: function(task){
            tasks.push(task);
            localStorage.setItem("myTasks", JSON.stringify(tasks));
        },
        get: function(){
            return tasks;
        }
    }

}]);