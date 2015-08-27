// Create MainController
(function () {

	// Define MainController and create Webapp
	// $scope = model object $http = http-handle-object,
	// $intervall = angular-function (service)
  var app = angular.module("SE2-Software", []);

	var MainController = function($scope){

    // Locals
    var profile = "profile";
    var news = "news";
    var praktika = "praktika";
    var gruppen = "gruppen";
    var noten = "noten";
    var pvl = "pvl";
    var meldungen = "meldungen";
    var datenim = "datenim";
    var datenex = "datenex";


    // Model-Defintion
    $scope.getGruppeErstellen = function(){
      return "resources/popups/modal_gruppe_erstellen.html";
    }
    $scope.getModalEdit = function(){
      return "resources/popups/modal_veranstaltung_aendern.html";
    }

    $scope.getModalNew = function(){
      return "resources/popups/modal_veranstaltung_erstellen.html";
    }

    $scope.viewToggle = null;

    $scope.switchToDatenEx = function(){
      $scope.viewToggle = datenex;
    }

    $scope.switchToDatenIm = function(){
      $scope.viewToggle = datenim;
    }
    $scope.switchToMeldungen = function(){
      $scope.viewToggle = meldungen;
    }

    $scope.switchToPVL = function(){
      $scope.viewToggle = pvl;
    }

    $scope.switchToNoten = function(){
      $scope.viewToggle = noten;
    }

    $scope.switchToProfile = function(){
      $scope.viewToggle = profile;
      console.log($scope.viewToggle);
    }

    $scope.switchToNews = function(){
      $scope.viewToggle = news;
      //console.log($scope.viewToggle);
    }

    $scope.switchToPraktika = function(){
      $scope.viewToggle = praktika;
      //console.log($scope.viewToggle);
    }

    $scope.switchToGruppen = function(){
      $scope.viewToggle = gruppen;
      //console.log($scope.viewToggle);
    }

	};

  // register Controller
	app.controller("MainController", MainController);

	//Alternative Syntax
	// app.controller("MainController", ["MainController"]);

// Instantly invoke
}());
