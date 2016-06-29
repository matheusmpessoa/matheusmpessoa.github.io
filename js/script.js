// criou o modulo e nomeou como myApp
var app = angular.module('mainApp', ['ngRoute']);

// ---------- ROUTE ----------
// configure routes
app.config(function ($routeProvider) {
    $routeProvider

    // route para a pagina home
        .when('/', {
        templateUrl: 'pages/content/home.html',
        controller: 'mainController'
    })

    // route para a pagina about
    .when('/sobre', {
        templateUrl: 'pages/content/sobre.html',
        controller: 'sobreController'
    })

    // route para a pagina portfolio
    .when('/habilidades', {
        templateUrl: 'pages/content/habilidades.html',
        controller: 'habilidadesController'
    })

    // route para a pagina portfolio
    .when('/portfolio', {
        templateUrl: 'pages/content/portfolio.html',
        controller: 'portfolioController'
    })

    // route para a pagina contact
    .when('/contato', {
        templateUrl: 'pages/content/contato.html',
        controller: 'contatoController'
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
        templateUrl: 'pages/template/header.html',
        controller: 'myHeaderController',
        link: linkFunction
    };
});

app.directive("myFooter", function () {
    var linkFunction = function (scope, element, attributes) {
        scope.text = attributes["myFooter"];
    };

    return {
        restrict: "A",
        templateUrl: 'pages/template/footer.html',
        link: linkFunction
    };
});

// ---------- CONTROLLER ----------
app.controller("myHeaderController", function ($scope, $location) {
    $scope.menuClass = function (page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
});

// criou o controller e o inject $scope
app.controller('mainController', function ($scope) {

});

app.controller("sobreController", function ($scope) {

});

app.controller('habilidadesController', function ($scope) {
    $scope.linguagens = [
        {
            name: "HTML5",
        },
        {
            name: "CSS3"
        },
        {
            name: "JavaScript"
        },
        {
            name: "Node.js"
        },
        {
            name: "MongoDB"
        }
    ];

    $scope.frameworksBibliotecas = [
        {
            name: "AngularJS"
        },
        {
            name: "Ionic"
        },
        {
            name: "jQuery"
        },
        {
            name: "Bootstrap 3 e 4"
        },
        {
            name: "Material Design Lite"
        }
    ];

    $scope.ferramentas = [
        {
            name: "Grunt"
        },
        {
            name: "Gulp"
        },
        {
            name: "Trello"
        },
        {
            name: "Balsamiq"
        }
    ];

    $scope.ides = [
        {
            name: "Brackets (minha preferida)"
        },
        {
            name: "Atom"
        },
        {
            name: "IntelXDK"
        }
    ];

    $scope.versionamento = [
        {
            name: "Github"
        }
    ];

    $scope.sistemas = [
        {
            name: "Windows",
        },
        {
            name: "Ubuntu / Linux"
        }
    ];
});

app.controller('portfolioController', function ($scope) {
    $scope.sistemas = [
        {
            name: "contactListApp",
            link: "https://github.com/matheusmpessoa/contactListApp"
        },
        {
            name: "angularjs-example",
            link: "https://github.com/matheusmpessoa/angularjs-example"
        },
        {
            name: "javascript-pure-example",
            link: "https://github.com/matheusmpessoa/javascript-pure-example"
        },
        {
            name: "jquery-example",
            link: "https://github.com/matheusmpessoa/jquery-example"
        },
        {
            name: "links-dev-js",
            link: "https://github.com/matheusmpessoa/links-dev-js"
        },
        {
            name: "angularjs-succinctly",
            link: "hhttps://github.com/matheusmpessoa/angularjs-succinctly"
        },
        {
            name: "haskell",
            link: "https://github.com/matheusmpessoa/haskell"
        },
        {
            name: "gemstore-angularjs",
            link: "https://github.com/matheusmpessoa/gemstore-angularjs"
        },
        {
            name: "form-angularjs",
            link: "https://github.com/matheusmpessoa/form-angularjs"
        }
    ];

    $scope.aplicativos = [
        {
            name: "app-fibonacci",
            link: "https://github.com/matheusmpessoa/app-fibonacci"
        },
        {
            name: "app-dicionario",
            link: "https://github.com/matheusmpessoa/app-dicionario"
        }
    ];

    $scope.contribuicoes = [
        {
            name: "fatecrl-curso-si",
            link: "https://github.com/matheusmpessoa/fatecrl-curso-si"
        },
        {
            name: "dctb-links",
            link: "https://github.com/matheusmpessoa/dctb-links"
        },
        {
            name: "fibonacci",
            link: "https://github.com/matheusmpessoa/fibonacci"
        }
    ];
});

app.controller('contatoController', function ($scope) {

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
        text: "<p>Mensagem copiada para área de transferência</p>",
        timer: 1500,
        html: true,
        showConfirmButton: false
    });
}
