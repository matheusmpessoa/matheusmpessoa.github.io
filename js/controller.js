angular.module('app.controllers', [])

app.controller('HomeCtrl', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('SobreCtrl', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('ContatoCtrl', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
