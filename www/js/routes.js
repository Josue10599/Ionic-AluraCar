angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('login', {
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'LoginController'
    })
    .state('app', {
        url:'/app',
        templateUrl:'templates/menu.html',
        abstract:true,
        controller:'MenuController'
    })
    .state('app.listagem', {
        url:'/listagem',
        views: {
            'menuContent': {
                templateUrl:'templates/listagem.html',
                controller:'ListagemController'
            }
        }
    })
    .state('app.perfil', {
        url:'/perfil',
        views: {
            'menuContent': {
                templateUrl:'templates/perfil.html',
                controller:'PerfilController'
            }
        }
    })
    .state('app.carroescolhido', {
        url:'/carroescolhido/:carro',
        views: {
            'menuContent': {
                templateUrl:'templates/carroescolhido.html',
                controller:'CarroEscolhidoController'
            }
        }
    })
    .state('app.finalizar', {
        url:'/finalizar/:carroEscolhido',
        views: {
            'menuContent': {
                templateUrl:'templates/finalizarpedido.html',
                controller:'FinalizarPedidoController'
            }
        }
    })
    .state('app.agendamentos', {
        url:'/agendamentos',
        views: {
            'menuContent': {
                templateUrl:'templates/agendamentos.html',
                controller:'AgendamentoController'
            }
        }
    })
    $urlRouterProvider.otherwise('login');
})