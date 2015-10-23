/**
 * Managed die einzelnen Tabs
 */
(function() {

  // Controllerdefinition
  var app = angular.module("SE2-Software");

  // $scope = model object
  var TabController = function($scope) {

    // Togglepoint
    $scope.switch = {};
    $scope.viewToggle = $scope.switch.profil;


    // Locals
    // --------------------------------------------------------------------------
    var profil = "profile";
    var teams = "teams";
    var news = "news";
    var praktika = "praktika";
    var wahlpflicht = "wahlpflicht";
    var projekte = "projekte";
    var gruppen = "gruppen";
    var leistungen = "leistungen";
    var meldungen = "meldungen";
    var datenim = "datenim";
    var datenex = "datenex";
    var tmUebersicht = "tmUebersicht";
    // -------------------------------------------------------------------------


    // Tabs
    // -------------------------------------------------------------------------
    var newsTab = "resources/apanel/tabs/news.html";
    var profileTab = "resources/apanel/tabs/profile.html";
    var praktikaTab = "resources/apanel/tabs/pflicht_praktika.html";
    var wahlPflichtTab = "resources/apanel/tabs/wahlpflicht_uebersicht.html";
    var projekteTab = "resources/apanel/tabs/projekte_uebersicht.html";
    var gruppenTab = "resources/apanel/tabs/gruppen.html";
    var leistungenTab = "resources/apanel/tabs/leistungen.html";
    var meldungenTab = "resources/apanel/tabs/meldungen.html";
    var datenExTab = "resources/apanel/tabs/datenex.html";
    var datenImTab = "resources/apanel/tabs/datenim.html";
    var tmTab = "resources/apanel/tabs/tm_uebersicht.html";
    var teamTab = "resources/studpanel/tabs/teams.html";
    // -------------------------------------------------------------------------


    // get Tabs
    // -------------------------------------------------------------------------
    $scope.getCurrTab = function() {
      return $scope.viewToggle;
    }

    $scope.getNews = function() {
      return newsTab;
    }

    $scope.getProfile = function() {
      return profileTab;
    }

    $scope.getPraktika = function() {
      return praktikaTab;
    }

    $scope.getWahlpflicht = function() {
      console.log("called");
      return wahlPflichtTab;
    }

    $scope.getProjekte = function() {
      return projekteTab;
    }

    $scope.getGruppen = function() {
      return gruppenTab;
    }

    $scope.getLeistungen = function() {
      return leistungenTab;
    }

    $scope.getMeldungen = function() {
      return meldungenTab;
    }

    $scope.getDatenEx = function() {
      return datenExTab;
    }

    $scope.getDatenIm = function() {
      return datenImTab;
    }

    $scope.getTmUebersicht = function() {
        return tmTab;
      }

    $scope.getTeamUebersicht = function(){
      return teamTab;
    }
      // -------------------------------------------------------------------------


    // Tab-Switch functions
    // -------------------------------------------------------------------------
    $scope.switchToTmUebersicht = function() {
      $scope.viewToggle = tmUebersicht;
    }

    $scope.switchToTeams = function(){
      $scope.viewToggle = teams;
    }

    $scope.switchToDatenEx = function() {
      $scope.viewToggle = datenex;
    }

    $scope.switchToDatenIm = function() {
      $scope.viewToggle = datenim;
    }
    $scope.switchToLeistungen = function() {
      $scope.viewToggle = leistungen;
    }

    $scope.switchToProfile = function() {
      $scope.viewToggle = profil;
    }

    $scope.switchToNews = function() {
      $scope.viewToggle = news;
    }

    $scope.switchToPraktika = function() {
      $scope.viewToggle = praktika;
    }

    $scope.switchToWahlpflicht = function() {
      $scope.viewToggle = wahlpflicht;
    }

    $scope.switchToProjekte = function() {
      DBVeranstService.initPO("5", "AI");
      $scope.viewToggle = projekte;
    }

    $scope.switchToGruppen = function() {
        $scope.viewToggle = gruppen;
      }
      // -------------------------------------------------------------------------

  };

  // Controller bei der app "anmelden"
  app.controller("TabController", TabController);

  // Code sofort ausführen
}());
