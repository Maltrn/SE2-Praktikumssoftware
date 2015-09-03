/**
 * Managed die einzelnen Tabs
 */
(function () {

	// Controllerdefinition
  var app = angular.module("SE2-Software");

	// $scope = model object
	var TabController = function($scope){

    // Togglepoint
    $scope.switch = {};
    $scope.viewToggle = $scope.switch.profil;


    // Locals
    // --------------------------------------------------------------------------
    var profil = "profile";
    var news = "news";
    var praktika = "praktika";
    var gruppen = "gruppen";
    var leistungen = "leistungen";
    var meldungen = "meldungen";
    var datenim = "datenim";
    var datenex = "datenex";
    var tmUebersicht = "tmUebersicht";
    // -------------------------------------------------------------------------


    // Tabs
    // -------------------------------------------------------------------------
    var newsTab = "resources/tabs/news.html";
    var profileTab = "resources/tabs/profile.html";
    var praktikaTab = "resources/tabs/veranstaltungen.html";
    var gruppenTab = "resources/tabs/gruppen.html";
    var leistungenTab = "resources/tabs/leistungen.html";
    var meldungenTab = "resources/tabs/meldungen.html";
    var datenExTab = "resources/tabs/datenex.html";
    var datenImTab = "resources/tabs/datenim.html";
    var tmTab = "resources/tabs/tm_uebersicht.html";
    // -------------------------------------------------------------------------


    // get Tabs
    // -------------------------------------------------------------------------
    $scope.getCurrTab = function(){
      return $scope.viewToggle;
    }

    $scope.getNews = function(){
      return newsTab;
    }

    $scope.getProfile = function(){
      return profileTab;
    }

    $scope.getPraktika = function(){
      return praktikaTab;
    }

    $scope.getGruppen = function(){
      return gruppenTab;
    }

    $scope.getLeistungen = function(){
      return leistungenTab;
    }

    $scope.getMeldungen = function(){
      return meldungenTab;
    }

    $scope.getDatenEx = function(){
      return datenExTab;
    }

    $scope.getDatenIm = function(){
      return datenImTab;
    }

    $scope.getTmUebersicht = function(){
      return tmTab;
    }
    // -------------------------------------------------------------------------


    // Tab-Switch functions
    // -------------------------------------------------------------------------
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
      $scope.viewToggle = profil;
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
    // -------------------------------------------------------------------------

	};

  // Controller bei der app "anmelden"
	app.controller("TabController", TabController);

// Code sofort ausführen
}());
