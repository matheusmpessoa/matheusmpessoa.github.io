// criou o modulo e nomeou como myApp
var myApp = angular.module('myApp', ['ngRoute']);

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
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        
        // route para a pagina portfolio
        .when('/portfolio', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'portfolioController'
        })

        // route para a pagina contact
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        
        // route para ser redirecionado se o endereço for digitado errado
        .otherwise({
            redirect: '/'
        });
});

// ---------- CONTROLLER ----------
// criou o controller e o inject $scope
myApp.controller('mainController', function ($scope) {
    // mensagem para ser disparada na view
    $scope.title = 'Matheus Pessoa';
    $scope.footer = 'Site desenvolvido por';
    $scope.name = 'Matheus Pessoa';
});

myApp.controller('aboutController', function ($scope) {
    $scope.message = 'About page.';
});

myApp.controller('portfolioController', function ($scope) {
    $scope.message = 'Portfolio page.';
});

myApp.controller('contactController', function ($scope) {
    $scope.message = 'Contato';
});

myApp.controller('otherController', function() {
    var mp = this;
    
    mp.itens = [
        {name: 'Item1'},
        {name: 'Item2'},
        {name: 'Item3'},
        {name: 'Item4'},
    ];
    
    mp.addTeam = function() {
        mp.itens.push({name: mp.inputMenu});
        mp.inputMenu = null;
    }
    
     vm.removeIten = function(menu) {
        if (confirm("Você realmente deseja deletar este item?")){
            var index = mp.itens.indexOf(menu);
            mp.itens.splice(index, 1);
        }
    }
});

// ---------- SWEETCOPY ----------
function copyCtrl($scope) {
    $scope.sweetCopy = function () {
        sweetCopy();
    };
}
function sweetCopy() {
    swal({   
        title: "<h1><i class='fa fa-clipboard fa-fw''></i></h1>",
        text: "<p>Mensagem copiada para área de transferência</p>",
        timer: 1000,
        html: true,
        showConfirmButton: false
    });
}