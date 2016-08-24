var app = angular.module('app', ['ngRoute', 'app.controllers']);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
    })

    .when('/sobre', {
        templateUrl: 'pages/content/sobre.html',
        controller: 'SobreCtrl'
    })

    .when('/habilidades', {
        templateUrl: 'pages/content/habilidades.html',
        controller: 'HabilidadesCtrl'
    })

    .when('/portfolio', {
        templateUrl: 'pages/content/portfolio.html',
        controller: 'PortfolioCtrl'
    })

    .when('/contato', {
        templateUrl: 'pages/content/contato.html',
        controller: 'ContatoCtrl'
    })

    .when('/erro', {
        templateUrl: 'pages/content/404.html',
        controller: 'ErroCtrl'
    })

    .otherwise({
        redirectTo: '/erro'
    });
});
