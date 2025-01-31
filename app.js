var app = angular.module('todoApp', []);

app.controller('todoController', function ($scope) {
    $scope.newTask = '';
    $scope.tasks = [
        { text: 'Task 1' },
        { text: 'Task 2' },
        { text: 'Task 3' }
    ];

    $scope.addTask = function () {
        if ($scope.newTask.trim() !== '') {
            $scope.tasks.push({ text: $scope.newTask });
            $scope.newTask = ''; // Clear the input field after adding
        }
    };

    $scope.editTask = function (index) {
        var editedTask = prompt('Edit Task:', $scope.tasks[index].text);

        if (editedTask !== null) {
            $scope.tasks[index].text = editedTask;
        }
    };

    $scope.deleteTask = function (index) {
        var confirmDelete = confirm('Are you sure you want to delete this task?');

        if (confirmDelete) {
            $scope.tasks.splice(index, 1);
        }
    };
});
