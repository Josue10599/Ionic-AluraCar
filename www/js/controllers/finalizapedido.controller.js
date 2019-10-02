angular.module('starter')
.controller('FinalizarPedidoController', function($scope, $stateParams, 
	$ionicPopup, $state, CarroService, $ionicHistory, ionicDatePicker, DatabaseValues){
	$scope.carroMontado = angular.fromJson($stateParams.carroEscolhido);
	$scope.pedido = {};
	$scope.dataSelecionada;
	$scope.abrirPopUpCalendario = function() {
		var configuracoes = {
			callback: function(data){
				$scope.dataSelecionada = new Date(data);
			},
			weeksList: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
			monthsList: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		}
		ionicDatePicker.openDatePicker(configuracoes);
	}
	$scope.finalizarPedido = function() {
		var pedidoFinalizado = {
			params : {
				carro : $scope.carroMontado.nome,
				preco : $scope.carroMontado.preco,
				nome : $scope.pedido.nome,
				endereco : $scope.pedido.endereco,
				email : $scope.pedido.email
			}
		}
		CarroService.salvarPedido(pedidoFinalizado).then(function(dados){
			$scope.salvarDadosNoBancoDeDados('true');
			$ionicPopup.alert({
				title:'Parabéns!!!',
				template:'Compra realizada com sucesso!'
			}).then($scope.retornarTelaLista());
		}, function(erro) {
			$scope.salvarDadosNoBancoDeDados('false');
			$ionicPopup.alert({
				title:'Erro',
				template:'Problemas com o servidor'
			}).then($scope.retornarTelaLista())
		});
	};
	$scope.salvarDadosNoBancoDeDados = function(confirmado) {
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao){
			transacao.executeSql('INSERT INTO agendamentos(nome, endereco, email, dataAgendamento, modelo, preco, confirmado) VALUES (?,?,?,?,?,?,?)', 
			[$scope.pedido.nome, $scope.pedido.endereco, $scope.pedido.email, $scope.w, $scope.carroMontado.nome, $scope.carroMontado.preco, confirmado]);
		})
	};
	$scope.retornarTelaLista = function() {
		$ionicHistory.nextViewOptions({
			disableBack: true
		})
		$state.go('app.listagem');
	};
});