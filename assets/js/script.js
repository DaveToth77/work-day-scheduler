tasks = [];

//load tasks
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if (!tasks) {
        tasks = {};
    };
    addTask(tasks)
}

var addTask = function () {
    $.each(tasks, function (list, arr) {

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)

        // console.log(list)
        // console.log(taskP);

        $("#task-item-" + list).replaceWith(taskP);
    })
}