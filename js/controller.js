angular.module('app.controllers', [])

app.directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: function (tElement, tAttrs) {
            return tAttrs.templateUrl ? tAttrs.templateUrl : 'pages/template/header.html';
        }
    };
});

app.directive('footer', function () {
    return {
        restrict: 'E',
        templateUrl: function (tElement, tAttrs) {
            return tAttrs.templateUrl ? tAttrs.templateUrl : 'pages/template/footer.html';
        }
    };
});


app.controller('HomeCtrl', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('SobreCtrl', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('ContatoCtrl', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
