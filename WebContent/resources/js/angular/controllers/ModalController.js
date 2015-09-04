/**
 * Managed die Popups
 */
(function () {

	// Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope: Model Object
	var ModalController = function($scope){

    // Getter für die einzelnen Popups
    // -------------------------------------------------------------
    $scope.getVeranstaltungEdit = function(){
      return "resources/popups/modal_veranstaltung_aendern.html";
    }

    $scope.getGruppeEdit = function(){
      return "resources/popups/modal_gruppe_aendern.html";
    }

    $scope.getModalNew = function(){
      return "resources/popups/modal_veranstaltung_erstellen.html";
    }

    $scope.getModalPVL = function(){
      return "resources/popups/modal_pvl.html";
    }
    // -------------------------------------------------------------

    $scope.getModalNote = function(){
      return "resources/popups/modal_note.html";
    }

    $scope.getModalTmDetails = function(){
      return "resources/popups/modal_teilnehmer_details.html";
    }

    $scope.getModalTmEntfernen = function(){
      return "resources/popups/modal_tm_entfernen.html";
    }
	};

  // Controller bei der App "anmelden"
	app.controller("ModalController", ModalController);

// Code sofort ausführen
}());
