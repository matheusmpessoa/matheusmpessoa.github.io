// criou o modulo e nomeou como myApp
var app = angular.module('mainApp', ['ngRoute']);

// ---------- ROUTE ----------
// configure routes
app.config(function ($routeProvider) {
    $routeProvider

        // route para a pagina home
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route para a pagina about
        .when('/sobre', {
            templateUrl : 'pages/sobre.html',
            controller  : 'sobreController'
        })
        
        // route para a pagina portfolio
        .when('/portfolio', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'portfolioController'
        })

        // route para a pagina contact
        .when('/contato', {
            templateUrl : 'pages/contato.html',
            controller  : 'contatoController'
        })
        
        // route para ser redirecionado se o endereço for digitado errado
        .otherwise({
            redirect: '/'
        });
});

// ---------- DIRECTIVE ----------
app.directive("myHeader", function () {
    var linkFunction = function (scope, element, attributes) {
        scope.text = attributes["myHeader"];
    };

    return {
        restrict: "A",
        templateUrl: 'pages/header.html',
        link: linkFunction
    };
});

app.directive("myFooter", function () {
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
app.controller('mainController', function ($scope) {

});

app.controller("sobreController", function ($scope) {
    $scope.linguagens = [
        { name: "HTML5"},
        { name: "CSS3"},
        { name: "JavaScript"},
        { name: "Node.js"},
        { name: "MongoDB"}
    ];

    $scope.frameworksBibliotecas = [
        { name: "AngularJS"},
        { name: "Ionic"},
        { name: "jQuery"},
        { name: "Bootstrap 3 e 4"},
        { name: "Material Design Lite"}
    ];

    $scope.ferramentas = [
        { name: "Trello"},
        { name: "Balsamiq"}
    ];

    $scope.ides = [
        { name: "Brackets (minha preferida)"},
        { name: "Atom"}
    ];
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
