var todoApp = angular.module("todoAppModule", []);


todoApp.controller("todoCtrl", function($scope) {

	var lists = [
		{name: 'Finish workshop 7', Description: 'Yoko'},
		{name: 'start SSWA module', Description: 'Ringo'},
		{name: 'Go hiking', Description: 'cold shower'}
	];

	console.log(lists)
	$scope.lists = lists;
});