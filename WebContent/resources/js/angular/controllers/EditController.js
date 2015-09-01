/**
 * Controllerclass to manage Edits
 */
(function () {

	// Define MainController and refer to Mainapp
	// $scope = model
  var app = angular.module("SE2-Software");

	var EditController = function($scope){

    $scope.edit = false;

    $scope.showEditPanel = function(){

      if(!$scope.edit){
        $scope.edit = true;
      }
    }

    $scope.hideEditPanel = function(){
      if($scope.edit){
        $scope.edit = false;
      }
      console.log($scope.edit);
    }

	};

  // register Controller to Mainapp
	app.controller("EditController", EditController);
}());
