'use strict';

/* App Module */
var app = angular.module("phonecatApp", ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/phones', {
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl'
		}).
		when('/phones/:phoneId', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		}).
		otherwise({
			redirectTo: '/phones'
		});
}]);