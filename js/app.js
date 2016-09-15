var app = angular.module('app', ['ngRoute', 'app.controllers']);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
    })

    .when('/sobre', {
        templateUrl: 'pages/sobre.html',
        controller: 'SobreCtrl'
    })

    .when('/portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: 'PortfolioCtrl'
    })

    .when('/contato', {
        templateUrl: 'pages/contato.html',
        controller: 'ContatoCtrl'
    })

    .when('/erro', {
        templateUrl: 'pages/404.html',
        controller: 'ErroCtrl'
    })

    .otherwise({
        redirectTo: '/erro'
    });
});
