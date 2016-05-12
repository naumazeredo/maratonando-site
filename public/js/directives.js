mrtApp.directive('loadingSpinner', function() {
	return {
		restrict: 'E',
		scope: {
			color: '=',
			width: '=',
			height: '='
		},
		templateUrl: 'views/misc/loading-spinner.html'
	};
});

mrtApp.directive('registerProfile', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/register.html'
	};
});
