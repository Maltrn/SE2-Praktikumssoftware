

(function() {

  // Hauptapp referenzieren damit Service sichtbar wird
  var app = angular.module("SE2-Software");

  // Servicedefinition
  var DBPraktikaService = function($http) {


    // Gebe dieses Object zurück und mache die Methoden zugänglich
    // -----------------------------------------------------------------
    return {


    };
  };

  // Service bei der Hauptapp als "Service" über factory-Methode anmelden
  app.factory("DBPraktikaService", DBPraktikaService);

  // Code sofort ausführen
}());
