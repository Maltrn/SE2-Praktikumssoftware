/**
 * Managed die Extensions der einzelnen Tabs
 */
(function() {

  // Controllerdefintion
  // $scope = model: das Model-Objekt
  var app = angular.module("SE2-Software");

  var LeistungenController = function($scope) {

    // Locals
    // ------------------
    var eintrIndex;
    // ------------------


    // Vorerst Hardcoded Daten zur Demonstration
    // Später dynamische Ermittlung durch Spring MVC
    // =================================================================================================================================================

    $scope.teilnehmer = [{
      matrNr: 243441,
      vorn: "Max",
      nachn: "Mustermann1",
      grNr: 1,
      fach: "GKA",
      pvl: "erfolgreich",
      note: 15
    }, {
      matrNr: 243442,
      vorn: "Max",
      nachn: "Mustermann2",
      grNr: 2,
      fach: "ADP",
      pvl: "nicht erfolgreich",
      note: -1
    }, {
      matrNr: 243443,
      vorn: "Max",
      nachn: "Mustermann3",
      grNr: 1,
      fach: "GKA",
      pvl: "erfolgreich",
      note: 3
    }, {
      matrNr: 243444,
      vorn: "Max",
      nachn: "Mustermann4",
      grNr: 4,
      fach: "BSP",
      pvl: "nicht erfolgreich",
      note: -1
    }, {
      matrNr: 243445,
      vorn: "Max",
      nachn: "Mustermann5",
      grNr: 5,
      fach: "BWP",
      pvl: "offen",
      note: -1
    }, {
      matrNr: 243446,
      vorn: "Max",
      nachn: "Mustermann6",
      grNr: 5,
      fach: "BWP",
      pvl: "offen",
      note: -1
    }]

    $scope.noten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    $scope.pvls = ["erfolgreich", "nicht erfolgreich", "offen"];
    $scope.faecher = ["GKAP", "ADP", "BWP", "SEP", "BSP"];
    $scope.gruppen = [1, 2, 3, 4, 5, 6];
    $scope.semester = [1, 2, 3, 4, 6, 6];
    $scope.fachbereiche = ["AI", "WI", "TI"];

    // ==================================================================================================================================================


    // Scope-Felder
    // -------------------------------------
    $scope.ls = {};
    $scope.ls.matrNr;
    $scope.ls.vorn;
    $scope.ls.nachn;
    $scope.ls.grNr;
    $scope.ls.pvl;
    $scope.ls.note;
    $scope.ls.eintrNote = 5;;
    $scope.ls.eintrPVL = $scope.pvls[0];
    $scope.ls.fach = $scope.faecher[0];
    $scope.ls.gruppe = $scope.gruppen[0];
    $scope.ls.sem = $scope.semester[2];
    $scope.ls.fb = $scope.fachbereiche[0];
    // -------------------------------------


    // Funktionen um Ergebnisse darzustellen
    // --------------------------------------------------
    // Gibt den PVL-Status eines Teilnehmers in der Liste zurück
    $scope.getPVL = function(ngIndex) {

      return $scope.teilnehmer[ngIndex].pvl;
    }


    // Gibt das Success-Icon zurück
    $scope.getSuccess = function() {
      return "resources/icons/success.html";
    }

    // Gibt das Fail-Icon zurück
    $scope.getFail = function() {
      return "resources/icons/fail.html";
    }

    // Gibt das Open-Icon zurück
    $scope.getOpen = function() {
      return "resources/icons/open.html";
    }

    // Prüft ob Teilnehmer benotet wurde
    $scope.isOpenNote = function(ngIndex) {
        return $scope.teilnehmer[ngIndex].note === -1;
      }
      // Prüft ob Teilnehmer Klausur bestanden hat
    $scope.isSuccessNote = function(ngIndex) {
      return $scope.teilnehmer[ngIndex].note > 4;
    }

    // Prüft ob Teilnehmer die PVL erhalten hat
    $scope.isSuccessPVL = function(ngIndex) {
      return $scope.teilnehmer[ngIndex].pvl == $scope.pvls[0];
    }

    $scope.isOpenPVL = function(ngIndex) {
      return $scope.teilnehmer[ngIndex].pvl == $scope.pvls[2];
    }


    // Iinitlaisiert das Teilnehmer-Detail-Popup
    $scope.initTmDetailsLeist = function(ngIndex) {
      $scope.ls.matrNr = $scope.teilnehmer[ngIndex].matrNr;
      $scope.ls.vorn = $scope.teilnehmer[ngIndex].vorn;
      $scope.ls.nachn = $scope.teilnehmer[ngIndex].nachn;
      $scope.ls.fach = $scope.teilnehmer[ngIndex].fach;
      $scope.ls.grNr = $scope.teilnehmer[ngIndex].grNr;
      $scope.ls.pvl = $scope.teilnehmer[ngIndex].pvl;

      if ($scope.teilnehmer[ngIndex].note == -1) {
        $scope.ls.note = "offen";
      } else {
        $scope.ls.note = $scope.teilnehmer[ngIndex].note;
      }
    }

    // Initialisiert den Index des Teilnehmers, der bewertet werden soll
    $scope.initEintragen = function(ngIndex) {
      eintrIndex = ngIndex;
    }

    // Trägt eine Note ein
    $scope.trageNoteEin = function() {
      $scope.teilnehmer[eintrIndex].note = $scope.ls.eintrNote;
    }

    // Trägt eine PVL ein
    $scope.tragePVLEin = function() {
        $scope.teilnehmer[eintrIndex].pvl = $scope.ls.eintrPVL;
      }
      // --------------------------------------------------
  };

  // Controller bei der App "anmelden"
  app.controller("LeistungenController", LeistungenController);

  // Code sofort ausführen
}());
