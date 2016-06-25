// criou o modulo e nomeou como myApp
var myApp = angular.module('mainApp', ['ngRoute']);

// ---------- ROUTE ----------
// configure routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route para a pagina home
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route para a pagina about
        .when('/sobre', {
            templateUrl : 'pages/sobre.html',
            controller  : 'aboutController'
        })
        
        // route para a pagina portfolio
        .when('/portfolio', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'portfolioController'
        })

        // route para a pagina contact
        .when('/contato', {
            templateUrl : 'pages/contato.html',
            controller  : 'contactController'
        })
        
        // route para ser redirecionado se o endereço for digitado errado
        .otherwise({
            redirect: '/'
        });
});

// ---------- DIRECTIVE ----------
myApp.directive("myHeader", function () {
    var linkFunction = function (scope, element, attributes) {
        scope.text = attributes["myHeader"];
    };

    return {
        restrict: "A",
        templateUrl: 'pages/header.html',
        link: linkFunction
    };
});

myApp.directive("myFooter", function () {
    var linkFunction = function (scope, element, attributes) {
        scope.text = attributes["myFooter"];
    };

    return {
        restrict: "A",
        templateUrl: 'pages/footer.html',
        link: linkFunction
    };
});

// ---------- CONTROLLER ----------
// criou o controller e o inject $scope
myApp.controller('mainController', function ($scope) {
    // mensagem para ser disparada na view

});


// ---------- SWEETCOPY ----------
function copyCtrl($scope) {
    $scope.sweetCopy = function () {
        sweetCopy();
    };
}
function sweetCopy() {
    swal({
        title: "<p><img src='img/icon/dollynho.jpg'></p>",
        text:  "<p>Mensagem copiada para área de transferência</p>",
        timer: 1500,
        html: true,
        showConfirmButton: false
    });
}
