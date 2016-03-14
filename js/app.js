var madLibsApp = angular.module('ngMadLibs', []);
	madLibsApp.controller('madLibsController', ['$scope', function($scope){
	$scope.name = 'Name';
	$scope.dirtyTask = 'Dirty Task';
	$scope.obnoxCeleb = 'Obnox Celeb';
	$scope.jobTitle = 'Job Title';
	$scope.celeb = 'Celeb';
	$scope.hugeNum = 'Huge Number';
	$scope.tediousTask = 'Tedious Task';
	$scope.uselessSkill = 'Useless Skill';
	$scope.adjective = 'Adjective';

	$scope.gender = 'm'
	
	$scope.changeGender = function(gender){
		$scope.gender = gender;
	};
}]);
