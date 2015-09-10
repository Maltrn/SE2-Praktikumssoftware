/**
 * Service um zwischen Gruppencontroller und VeranstaltungsController zu vermitteln
 * TODO: Wird um viele weitere Funktionen erweitert, wenn reale Datenbank vorhanden
 *
 *
 */
(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var vgservice = function() {

    var fach;
    var dozent;
    var currAnzTm;
    var minAnzTm;
    var maxAnzTm;

    var getFach = function() {
      return fach;
    }

    var setFach = function(fa) {
      fach = fa;
    }

    var getVerantwortlicher = function() {
      return dozent;
    }

    var setVerantwortlicher = function(doz) {
      dozent = doz;
    }

    var getCurrAnzTm = function() {
      return currAnzTm;
    }

    var setCurrAnzTm = function(currAnz) {
      currAnzTm = currAnz;
    }

    var getMinAnzTm = function() {
      return minAnzTm;
    }

    var setMinAnzTm = function(minAnz) {
      minAnzTm = minAnz;
    }

    var getMaxAnzTm = function() {
      return maxAnzTm;
    }

    var setMaxAnzTm = function(maxAnz) {
      maxAnzTm = maxAnz;
    }

    //Gebe Object zurück, dass die Methoden enthält, damit zugriff gewährt
    return {
      getFach: getFach,
      setFach: setFach,
      getVerantwortlicher: getVerantwortlicher,
      setVerantwortlicher: setVerantwortlicher,
      getCurrAnzTm: getCurrAnzTm,
      setCurrAnzTm: setCurrAnzTm,
      getMinAnzTm: getMinAnzTm,
      setMinAnzTm: setMinAnzTm,
      getMaxAnzTm: getMaxAnzTm,
      getMinAnzTm: getMinAnzTm,
    };
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("vgservice", vgservice);

  // Code sofort ausführen
}());
