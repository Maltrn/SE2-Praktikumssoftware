/**
 * Managed die möglichen Edits
 */
(function () {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object
	var EditController = function($scope){

    // boolean im Edit ein oder auszublenden und Getter
    // -------------------------------------------------------------
    $scope.edit = false;
    $scope.getEditStatus = function(){
      return $scope.edit;
    }
    // --------------------------------------------------------------

    // Tabs
    var newsEdit = "resources/edits/news_edit.html";
    var newsShow = "resources/tabs/news_show.html";


    // Tabs-Getter
    // --------------------------------------------------------------
    $scope.getNewsEdit = function(){
      return newsEdit;
    }

    $scope.getNewsShow = function(){
      return newsShow;
    }

    // --------------------------------------------------------------


    // Tab-Toggle Funktionen
    // -------------------------------------------------------------
    $scope.showEditPanel = function(){

      if(!$scope.edit){
        $scope.edit = true;
      }
    }

    $scope.hideEditPanel = function(){
      if($scope.edit){
        $scope.edit = false;
      }
    }
    // --------------------------------------------------------------
	};

  // Controller bei der App "anmelden"
	app.controller("EditController", EditController);

// Code sofort ausführen  
}());
