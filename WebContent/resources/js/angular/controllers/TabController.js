/**
 * Controllerclass to manage Tabs
 */
(function () {

	// Define MainController and refer to webapp
  var app = angular.module("SE2-Software");

	// $scope = model object
	var TabController = function($scope){

    // Locals
    var profile = "profile";
    var news = "news";
    var praktika = "praktika";
    var gruppen = "gruppen";
    var leistungen = "leistungen";
    var meldungen = "meldungen";
    var datenim = "datenim";
    var datenex = "datenex";
    var tmUebersicht = "tmUebersicht";

    $scope.switchToTmUebersicht = function(){
      $scope.viewToggle = tmUebersicht;
    }

    $scope.switchToDatenEx = function(){
      $scope.viewToggle = datenex;
    }

    $scope.switchToDatenIm = function(){
      $scope.viewToggle = datenim;
    }
    $scope.switchToMeldungen = function(){
      $scope.viewToggle = meldungen;
    }

    $scope.switchToLeistungen = function(){
      $scope.viewToggle = leistungen;
    }

    $scope.switchToProfile = function(){
      $scope.viewToggle = profile;
    }

    $scope.switchToNews = function(){
      $scope.viewToggle = news;
    }

    $scope.switchToPraktika = function(){
      $scope.viewToggle = praktika;
    }

    $scope.switchToGruppen = function(){
      $scope.viewToggle = gruppen;
    }

	};

  // register Controller to App
	app.controller("TabController", TabController);

}());
