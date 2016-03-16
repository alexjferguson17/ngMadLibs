var madLibsApp = angular.module('ngMadLibs', []);
	madLibsApp.controller('madLibsController', ['$scope', function($scope){


	$scope.gender = 'm';
	//$scope.btnIsClicked = false;
	
	$scope.changeGender = function(gender){
		$scope.gender = gender;
	};

	$scope.showParagraph = function() {
		$scope.btnIsClicked = true;
	}

	$scope.resetGame = function() {
		$scope.btnIsClicked = false;
		$scope.name = '';
		$scope.dirtyTask = '';
		$scope.obnoxCeleb = '';
		$scope.jobTitle = '';
		$scope.celeb = '';
		$scope.hugeNum = '';
		$scope.tediousTask = '';
		$scope.uselessSkill = '';
		$scope.adjective = '';
	}

	$scope.resetGame();

}]);
