angular.module('starter')
.controller('PerfilController', function($rootScope, $scope, $cordovaCamera){
	$scope.estaEditando = false;
	$scope.textoBotao = 'Editar';
	$scope.acaoBotao = function() {
		$scope.estaEditando = !$scope.estaEditando;
		if ($scope.estaEditando) {
			$scope.textoBotao = 'Salvar';
		} else {
			$scope.textoBotao = 'Editar';
		}
	}
	$scope.tirarFoto = function() {
		var opcoes = {
			correctOrientation:true,
			quality:50,
			cameraDirection: 1
		}
		$cordovaCamera.getPicture(opcoes).then(function(foto){
			$scope.caminhoFoto = foto
		}, function(erro) {
			$ionicPopup.alert({
				title:'Falhar',
				template: 'Erro ao abrir câmera'
			})
		});
	}
	$scope.usuarioLogado = $rootScope.usuario
});