/**
 * Controllerclass to manage Popups
 */
(function () {

	// Define MainController and refer to Mainapp
	// $scope = model
  var app = angular.module("SE2-Software");

	var ExtController = function($scope, $document){

    $scope.erstellen = null;
    // Method Defintion
    $scope.grErstellen = function(){

      if($scope.erstellen != "grErstellen"){
        $scope.erstellen="grErstellen";
        var someElement = angular.element(document.getElementById('grerstellen'));
        $document.scrollToElement(someElement, 30, 500);
      }
    }

    $scope.newsErstellen = function(){

      if($scope.erstellen != "newsErstellen"){
        $scope.erstellen="newsErstellen";
        var someElement = angular.element(document.getElementById('newserstellen'));
        $document.scrollToElement(someElement, 30, 500);
      }
    }

    $scope.grErstellenClose = function(){

      if($scope.erstellen == "grErstellen"){
        $scope.erstellen=null;
      }
    }

    $scope.veranErstellen = function(){
      if($scope.erstellen != "veranErstellen"){
        $scope.erstellen="veranErstellen";
        var someElement = angular.element(document.getElementById('veranerstellen'));
        $document.scrollToElement(someElement, 30, 500);
      }
    }

    $scope.veranErstellenClose = function(){

      if($scope.erstellen == "veranErstellen"){
        $scope.erstellen=null;
      }
    }

    $scope.newsErstellenClose = function(){

      if($scope.erstellen == "newsErstellen"){
        $scope.erstellen=null;
      }
    }
	};

  // register Controller to Mainapp
	app.controller("ExtController", ExtController);
}());
