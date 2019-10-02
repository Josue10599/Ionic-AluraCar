angular.module('starter')
.controller('CarroEscolhidoController', function($scope, $stateParams) {
	$scope.carroEscolhido = angular.fromJson($stateParams.carro);
	$scope.listaDeAcessorios = [{'nome':'Freio ABS', 'preco':1000}, {'nome':'Ar-condicionado', 'preco':2000},
	{'nome':'Capa de banco', 'preco':500}, {'nome':'MP3 Player', 'preco':100}]
	$scope.mudou = function(acessorio, isMarcado) {
		if (isMarcado) {
			$scope.carroEscolhido.preco += acessorio.preco;
		} else {
			$scope.carroEscolhido.preco -= acessorio.preco;
		}
	};
});