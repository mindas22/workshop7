var todoApp = angular.module("todoAppModule", []);


todoApp.controller("todoCtrl", function($scope) {

	var rockStars = [
		{name: 'John Beetle', like: 'Yoko'},
		{name: 'Paul Beatle', likes: 'Ringo'},
		{name: 'Labas Rytas', likes: 'cold shower'}
	];

	console.log(rockStars)
	$scope.rockStars = rockStars;
});