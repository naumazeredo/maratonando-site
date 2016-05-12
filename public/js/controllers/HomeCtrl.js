// TODO(naum): Do not copy RegisterCtrl (ofc there's a way to not copy a controller function)
var app = angular.module('HomeCtrl', []);
app.controller('HomeController', [
	'$scope',
	'$location',
	'$rootScope',
	'Notification',
	'AccountFactory',
	function($scope, $location, $rootScope, Notification, account) {
		$scope.account = {
			name: '',
			surname: '',
			email: '',
			password: '',
			confirmPassword: '',
			username: ''
		};

		$scope.register = function() {
			account.register($scope.account)
				.then(function(data) {
					if (data._id) {
						$rootScope.user = data;
						$location.path('/profile');
						Notification.success("Bem-vindo, " + data.local.name + ".");
					}
				}, function(error) {
					Notification.error(error);
				});
		};
	}
]);
