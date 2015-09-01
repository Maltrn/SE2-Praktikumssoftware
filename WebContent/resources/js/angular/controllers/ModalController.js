/**
 * Controllerclass to manage Popups
 */
(function () {

	// Define MainController and refer to Mainapp
	// $scope = model
  var app = angular.module("SE2-Software");

	var ModalController = function($scope){

    $scope.getModalEdit = function(){
      return "resources/popups/modal_veranstaltung_aendern.html";
    }

    $scope.getModalNew = function(){
      return "resources/popups/modal_veranstaltung_erstellen.html";
    }

    $scope.getModalPVL = function(){
      return "resources/popups/modal_pvl.html";
    }

    $scope.getModalNote = function(){
      return "resources/popups/modal_note.html";
    }
	};

  // register Controller to Mainapp
	app.controller("ModalController", ModalController);
}());
